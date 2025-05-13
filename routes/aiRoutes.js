const express = require("express");
const { getFinancialAdvice } = require("../services/aiService");
const { categorizeTransaction } = require("../services/categorizationServices");
const { predictBudget } = require("../services/budgetPrediction");
const router = express.Router();

router.post("/ai/advice", async (req, res) => {
    const { question } = req.body;
    const advice = await getFinancialAdvice(question);
    res.json({ advice });
});

router.post("/ai/categorize", async (req, res) => {  // ✅ Add async here
    try {
        const { description } = req.body;
        if (!description) {
            return res.status(400).json({ error: "Description is required" });
        }

        console.log(`🔵 Categorizing transaction: "${description}"`);

        const category = await categorizeTransaction(description); // ✅ Use await

        console.log(`🟢 Categorized as: ${category}`);

        res.json({ category }); // ✅ Now it will send the resolved category
    } catch (error) {
        console.error("❌ Error in categorization:", error.message);
        res.status(500).json({ error: "Failed to categorize transaction" });
    }
});


router.post("/ai/budget-prediction", (req, res) => {
    const { income, expenses } = req.body;
    const recommendedBudget = predictBudget(income, expenses);
    res.json({ recommendedBudget });
});

module.exports = router;
