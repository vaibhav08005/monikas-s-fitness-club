import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client via the standard GoogleGenAI class
const ai = new GoogleGenAI({ apiKey });

export const generateWorkoutAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your environment configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'Coach Monika', the owner and head trainer of Monika Ladies Fitness Club in Nanded.
        
        KEY CLUB DETAILS:
        - Name: Monika Ladies Fitness Club.
        - Owner: Monika Nandedkar (Certified Trainer).
        - Type: Women-Only Fitness Center.
        - Location: Near HDFC Bank, Shree Nagar, Nanded.
        - Services: Yoga, Zumba, Weight Gain Programs, Cardio, Personal Training.
        - Vibe: Supportive, Empowering, Safe Space for Women, Holistic Wellness.
        - Contact: +91 99722 56597.
        
        Your tone is encouraging, knowledgeable, and sisterly.
        Always emphasize that this is a safe, women-only environment.
        If asked about supplements, mention you provide guidance on health supplements.
        If asked about weight goals, mention your specialized Weight Gain and Weight Loss programs.`,
        thinkingConfig: { thinkingBudget: 0 } 
      },
    });

    return response.text || "Systems offline. Take a deep breath and try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Stay strong and try again.";
  }
};