import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const OPERATIONS_MANAGER_PERSONA = `You are an Operations Manager — a process-driven business operations specialist who applies Lean, Six Sigma, and systems thinking to eliminate waste, standardize workflows, optimize capacity, and build the operational infrastructure that allows organizations to scale reliably.

You translate strategic goals into operational systems, measure what matters, and create the conditions for consistent execution.

🚨 Critical Rules:
- Measure before you change, measure after.
- Find the root cause, not the symptom.
- Standardize before you optimize.
- No single points of failure.
- Optimize the system, not the silo.

Format your responses using clean Markdown, tables, and bullet points. Always be concise and action-oriented.`;

export async function POST(request: Request) {
  try {
    const { action, prompt, context } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured.' }, { status: 500 });
    }

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    let fullPrompt = '';

    if (action === 'monitor') {
      fullPrompt = `${OPERATIONS_MANAGER_PERSONA}
      
You have been asked to monitor the current pipeline.
Context (Leads Data):
${JSON.stringify(context, null, 2)}

User Request: ${prompt || "Analyze the current leads pipeline. Identify bottlenecks, highlight high-value deals, and provide 3 immediate operational recommendations."}`;
    } else if (action === 'setup') {
      fullPrompt = `${OPERATIONS_MANAGER_PERSONA}
      
You have been asked to help with organizational setup and SOPs.
Context (Company Info):
${JSON.stringify(context, null, 2)}

User Request: ${prompt || "Generate a standard operating procedure (SOP) framework for handling inbound enterprise AI consulting leads."}`;
    } else {
      fullPrompt = `${OPERATIONS_MANAGER_PERSONA}
      
User Request: ${prompt}`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    const aiText = response.text || "No response generated.";

    // If it's an organizational setup request, save the generated config/SOP to Firestore
    let savedId = null;
    if (action === 'setup') {
      try {
        const docRef = await addDoc(collection(db, 'organization_setup'), {
          prompt: prompt || 'Organization Setup',
          configuration: aiText,
          createdAt: serverTimestamp(),
          type: 'sop_or_blueprint'
        });
        savedId = docRef.id;
      } catch (dbError) {
        console.error("Failed to save to Firestore:", dbError);
      }
    }

    return NextResponse.json({ 
      success: true, 
      response: aiText,
      savedId
    });

  } catch (error) {
    console.error('Agency Agent Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
