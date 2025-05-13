# 🛠️ Nutshell Backend – AI-Powered Budgeting API

**Nutshell Backend** is the **server-side API** for **Nutshell**, an **AI-driven budgeting app** that categorizes expenses, provides financial insights, and supports FIRE planning.

🚀 Built for **DUHacks 4.0**  
🔗 Frontend Repo: [BudgetingForAll-ui](https://github.com/blamex321/BudgetingForAll-ui)  

![Hackathon](https://img.shields.io/badge/Hackathon-DUHacks%204.0-purple)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange)

---

## **📈 Features**
✅ **AI-Powered Expense Categorization** using **GPT-4o**  
✅ **Secure REST API** for expense tracking and budgeting  
✅ **User Authentication** with Firebase Auth  
✅ **Financial Planning & Insights**  
✅ **Scalable Node.js & Express Backend**  

---

## **🛠️ Tech Stack**
| **Category**  | **Technology** |
|--------------|--------------|
| 🛠 **Backend** | Node.js, Express |
| 🔥 **Database** | Firebase Firestore |
| 🔑 **Authentication** | Firebase Auth |
| 🤖 **AI Processing** | OpenAI GPT-4o |
| 🌐 **Hosting** | Vercel / Firebase Functions |

---

## **🚀 Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/blamex321/BudgetingForAll-backend.git
cd BudgetingForAll-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file inside **`backend/`** with:
```
OPENAI_API_KEY=your-openai-api-key
FIREBASE_API_KEY=your-firebase-api-key
DATABASE_URL=your-firebase-database-url
```

Additionally, the Firebase credentials are stored in **JSON format** inside the `config/` folder. You need to obtain your **Firebase service account key** from the **Google Cloud Console** and place it in the `config/` folder as `firebaseConfig.json`. **We do not provide our credentials for security reasons.**

### **4️⃣ Run the API Server**
```sh
npm start
```

---

## **🌍 API Endpoints**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/expenses` | Add a new expense |
| `GET` | `/api/expenses` | Fetch all expenses |
| `POST` | `/api/ai/categorize` | AI-based categorization using GPT-4o |
| `POST` | `/api/ai/advice` | Get AI-driven financial advice |

📀 **Example API Request (Categorization)**
```json
POST /api/ai/categorize
{
  "description": "Starbucks coffee"
}
```
📀 **Example Response**
```json
{
  "category": "Food"
}
```

---

## **📊 Database Schema**
```json
{
  "users": {
    "userId": {
      "email": "user@example.com",
      "expenses": {
        "expenseId": {
          "description": "Lunch at McDonald's",
          "amount": 500,
          "category": "Food",
          "date": "2025-02-22T12:00:00Z"
        }
      }
    }
  }
}
```

---

## **👥 Team**
- **Laxman Bankupalle** – Backend Lead 🛠️  
- **Sai Prakash** – Full Stack Developer 🤖  
- **Reethu Bhargavi** – UI/UX Designer 🎨  
- **Hareesh Beecha** – Database & Security Specialist 🔐  

📚 **Hackathon Submission Link**: [TBD]  

---

## **🙏 Contributing**
💡 Want to improve Nutshell?  
1. **Fork the repo**  
2. **Create a new branch** (`git checkout -b feature-branch`)  
3. **Commit changes** (`git commit -m "Added new feature"`)  
4. **Push to GitHub** (`git push origin feature-branch`)  
5. **Create a Pull Request** 🎉  

---

## **📩 Contact**
👤 **Laxman Bankupalle**  
📧 [laxman.bankupalle@gmail.com](mailto:laxman.bankupalle@gmail.com)  
💼 LinkedIn: [Laxman Bankupalle](https://www.linkedin.com/in/laxman-bankupalle/)  

---

🚀 **Made for DUHacks 4.0!** Give us a ⭐ if you like it! 😊🔥
