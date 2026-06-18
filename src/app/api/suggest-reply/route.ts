import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, savings, metrics, notes } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    let draftEmail = 'Error: No draft generated.';

    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        const prompt = `Write a personalized follow-up email to an inbound lead.
Lead Email: ${email}
Estimated Savings: $${savings || 0}
Metrics: ${JSON.stringify(metrics || {})}
Admin Notes: ${notes || 'None'}

Goal: Invite them to a technical discovery call to discuss their custom AI implementation plan.
Tone: Professional, confident, and concise.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        if (response.text) {
          draftEmail = response.text;
        }
      } catch (err) {
        console.error("Failed to generate reply with Gemini:", err);
        draftEmail = "Failed to generate reply using AI.";
      }
    } else {
      draftEmail = "No GEMINI_API_KEY found.";
    }

    return NextResponse.json({ success: true, draftEmail });
  } catch (error) {
    console.error('Error generating reply:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
