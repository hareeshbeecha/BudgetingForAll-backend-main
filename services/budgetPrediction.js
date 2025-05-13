function predictBudget(income, expenses) {
    const savings = income - expenses;
    let recommendedBudget = savings * 0.7; // Suggests saving 30% of leftover income
    return recommendedBudget.toFixed(2);
}

module.exports = { predictBudget };
