require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function handleAI(bot, data) {
    const text = (data.text || "").toLowerCase().trim();
    const triggerWords = ["@bot", "bot"]; //can be anything any trigger word 
    const mentioned = triggerWords.some(trigger => text.startsWith(trigger.toLowerCase()));

    if (!mentioned) return;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const prompt = `
You are JonBot, a chill and playful AI created by @your_username
your a funny bot

"${data.text}"
`; //here u can tell the bot how he should act

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();

        bot.sendMessage(reply);
    } catch (err) {
        console.error("Bot error:", err);
        bot.sendMessage("something went wrong!");
    }
}

module.exports = { handleAI };
