import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction containing all business knowledge
const SYSTEM_INSTRUCTION = `
You are the helpful AI customer support assistant for "Printstar".
We are a business dealing in printing, photography, stationary, branding, and E-Services.

**Location:**
Kabowa St Anne, Opposite St.Kizito Secondary School, Uganda.

**Contact Numbers:**
+256 787 411898
+256 703 166291
+256 756 627921
+256 749 568306
+256 708 105 602

**Our Team:**
- Mr. Kwajja Lawrence
- Mr. Kanku Tom
- Mr. Kokulu Paul
- Mr. AbdulMalik Malolo
- Mr. Ssenabulya Isaac

**Services We Offer:**
1. **Printing:** High quality document printing, banners, flyers, posters, business cards.
2. **Photography:** Studio shots, event photography, photo printing.
3. **Stationary:** Office supplies, school supplies.
4. **Branding:** T-shirt printing, corporate items, vehicle branding.
5. **E-Services:** Passport processing, URA (Uganda Revenue Authority) Payments, Online applications.

**Tone:**
Friendly, professional, helpful, and concise.
If asked about prices, say "Please contact us on +256 787 411898 for a custom quote as prices vary by quantity and material."
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my connection to the server is currently down (API Key missing). Please call us directly.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Using gemini-2.5-flash for fast, efficient responses suitable for a chat widget
    const model = 'gemini-2.5-flash';

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm not sure how to answer that, but our team at Printstar would love to help you in person!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please check your internet connection or try again later.";
  }
};