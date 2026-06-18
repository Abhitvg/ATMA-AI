import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, metrics } = body;

    if (!email || !metrics) {
      return NextResponse.json(
        { error: 'Email and metrics are required' },
        { status: 400 }
      );
    }

    const savings = metrics.savings || 0;
    const isEnterprise = savings > 100000;
    const companyName = 'Valued Enterprise';

    // 1. Generate the proposal content (TypeScript port of the Python logic)
    let proposalMd = '';
    
    if (!isEnterprise) {
      proposalMd = `
# Phase 1: Quick Wins AI Implementation for ${companyName}

## Executive Summary
Based on your current operations, Atma AI estimates an annual savings of **$${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}** by deploying an automated Chat Agent and Document Classifier.

## Scope of Work
- Deployment of a RAG-based Chatbot trained on your internal documentation.
- Setup of a Semantic Kernel orchestration layer.
- Integration with your existing CRM.

## Investment & Timeline
- **Timeline**: 4-6 weeks
- **Investment**: $15,000 - $30,000

## Next Steps
Reply to this email to schedule a technical discovery call with our founders.
      `;
    } else {
      proposalMd = `
# Enterprise AI Transformation for ${companyName}

## Executive Summary
Your operations represent a massive opportunity. Atma AI projects **$${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}** in annual efficiency gains via a multi-agent orchestration ecosystem.

## Scope of Work
- Multi-Agent Ecosystem deployment.
- Fine-tuned open-source LLMs deployed securely on your VPC.
- Data pipeline integration & CI/CD for AI models.

## Investment & Timeline
- **Timeline**: 3-6 months
- **Investment**: $100,000+

## Next Steps
Let's schedule an executive briefing.
      `;
    }

    // 2. Enhance with Gemini if API key is present
    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Refine this proposal to be more persuasive and concise:\n\n${proposalMd}`,
          config: {
            systemInstruction: 'You are a top-tier AI consultant writing a proposal.'
          }
        });
        
        if (response.text) {
          proposalMd = response.text;
        }
      } catch (err) {
        console.error("Failed to enhance proposal with Gemini:", err);
      }
    }

    // 3. Save to Firebase
    try {
      const { db } = await import('@/lib/firebaseAdmin');
      await db.collection('leads').add({
        email,
        metrics,
        proposal: proposalMd,
        level: isEnterprise ? 3 : 1,
        source: 'inbound',
        status: 'New',
        createdAt: new Date().toISOString()
      });
      console.log(`Saved lead to Firestore: ${email}`);
    } catch (dbError) {
      console.error("Failed to save lead to database (check Firebase config):", dbError);
    }

    // 4. In a real production scenario, you would email this to the user using Resend/Sendgrid here
    console.log(`Generated Proposal for ${email}:\n`, proposalMd);

    // 5. Send success response back to the widget
    return NextResponse.json({ 
      success: true, 
      message: 'Proposal generated successfully',
      preview: proposalMd
    });

  } catch (error) {
    console.error('Error generating proposal:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
