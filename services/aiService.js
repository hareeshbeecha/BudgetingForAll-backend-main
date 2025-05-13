const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getFinancialAdvice = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
    });

    // Extracting the message content
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Failed to retrieve financial advice.";
  }
};

module.exports = { getFinancialAdvice };