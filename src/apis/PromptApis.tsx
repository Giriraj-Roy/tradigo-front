import axios from "axios";
import Groq from "groq-sdk";

export const AskGemini = async (prompt : string) => {

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;    

    const data = {"contents":[{"parts":[{"text":prompt}]}]}
    const options = {
        headers : {
            'Content-Type': 'application/json'
        }
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`

    try {
        const result = await axios.post(url, data, options);
        return result.data
    } catch (error) {
        console.error("Error fetching data from Gemini API:", error);
    }
};


// GROQ LLM SERVICE MODEL

const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });

  
  export async function getGroqChatCompletion(prompt : string) {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });
  }

export const AskGroq = async (prompt : string)=>{
    try{
        const chatCompletion = await getGroqChatCompletion(prompt);

        // console.log(chatCompletion.choices[0]?.message?.content || "");

        return chatCompletion.choices[0]?.message?.content
    }catch(e){
        console.error(e);
        
    }
}