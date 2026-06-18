"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy" });

const SYSTEM_PROMPT = `You are the official AI Assistant for ATMA Consultancy, a premium, forward-thinking technology consultancy.
You help clients understand ATMA's services, portfolio, and research.
Our services include:
- Neuro-Symbolic AI
- Enterprise Architecture
- Cloud Native Applications
- Digital Transformation

Always be professional, concise, and helpful. If asked something unrelated to technology, software, ATMA, or AI, gently steer the conversation back to how ATMA can assist them with technology solutions. Keep responses relatively short.`;

export async function generateChatResponse(messages: { role: "user" | "model", parts: { text: string }[] }[]) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return { error: "AI Assistant is currently unavailable. Please check back later." };
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: messages,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      }
    });

    return { text: response.text };
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    return { error: "Failed to generate a response. Please try again." };
  }
}
