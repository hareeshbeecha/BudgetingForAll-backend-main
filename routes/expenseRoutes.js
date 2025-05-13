const express = require("express");
const { db } = require("../config/firebaseConfig");
const { authenticateToken } = require("../middleware/authMiddleware"); // Import auth middleware
const router = express.Router();

/**
 * Add Expense (Authenticated)
 */
router.post("/expenses", authenticateToken, async (req, res) => {
    try {
        const { description, amount, category } = req.body;
        const userId = req.user.uid; // Get authenticated user's ID

        const docRef = await db.collection("expenses").add({
            userId, // Store user ID with each expense
            description,
            amount,
            category,
            date: new Date()
        });

        res.json({ id: docRef.id, message: "Expense added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to add expense" });
    }
});

/**
 * Fetch User's Expenses (Authenticated)
 */
router.get("/expenses", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.uid; // Get authenticated user's ID
        const snapshot = await db.collection("expenses").where("userId", "==", userId).get();

        let expenses = [];
        snapshot.forEach(doc => expenses.push({ id: doc.id, ...doc.data() }));

        res.json(expenses);
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ error: "Failed to fetch expenses" });
    }
});

module.exports = router;
