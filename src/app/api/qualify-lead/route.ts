import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { chatHistory } = body;

    if (!chatHistory) {
      return NextResponse.json(
        { error: 'Chat history is required' },
        { status: 400 }
      );
    }

    // Default fallback if no OpenAI key
    let qualification = {
      is_enterprise: true,
      level: 2,
      primary_pain_point: "Scaling operations and manual processing",
      suggested_next_step: "Send ROI Calculator or schedule a discovery call"
    };

    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Here is the chat transcript:\n${chatHistory}`,
          config: {
            systemInstruction: `You are an AI Consultant qualification bot for Atma AI. 
Analyze the user's chat history and output ONLY a valid JSON object matching this schema:
{
  "is_enterprise": boolean (Is this a large enterprise?),
  "level": number (The enterprise toolkit level required: 1 (Quick Wins), 2 (Analytics/Multi-agent), or 3 (Transformation)),
  "primary_pain_point": string (The main pain point discussed),
  "suggested_next_step": string (What should we offer them next? e.g. ROI Calculator, Demo, Meeting)
}`,
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          qualification = JSON.parse(response.text);
        }
      } catch (err) {
        console.error("Failed to analyze chat with Gemini:", err);
      }
    }

    return NextResponse.json({ 
      success: true, 
      qualification 
    });

  } catch (error) {
    console.error('Error in lead qualification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
