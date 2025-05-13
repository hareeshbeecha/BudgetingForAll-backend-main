const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const categorizeTransaction = async (description) => {
  try {
    console.log(`🔵 Sending request to OpenAI for: "${description}"`);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an AI that categorizes financial transactions into: Food, Transport, Shopping, Bills, Entertainment, Health, Miscellaneous. Only return the category name." },
        { role: "user", content: `Categorize this transaction: "${description}".` },
      ],
      temperature: 0,
      max_tokens: 10,
    });

    // ✅ Debugging: Log full API response
    console.log("🟢 OpenAI Response:", JSON.stringify(response, null, 2));

    if (!response || !response.choices || response.choices.length === 0) {
      console.error("🔴 OpenAI API returned an invalid response.");
      return "Miscellaneous";
    }

    const category = response.choices[0]?.message?.content?.trim();

    if (!category) {
      console.error("🔴 OpenAI returned an empty category.");
      return "Miscellaneous";
    }

    console.log(`✅ Categorized as: ${category}`);
    return category;
  } catch (error) {
    console.error("❌ Error in OpenAI API call:", error.message);
    return "Miscellaneous"; // Default fallback category
  }
};

module.exports = { categorizeTransaction };
