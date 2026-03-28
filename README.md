<<<<<<< HEAD
# vitto-ai-project-
internship Assignment Project
=======
# 🚀 Vitto – AI-First BFSI Platform (Full Stack Assignment)

## 📌 Overview
This project is a full-stack implementation of an AI-first BFSI (Banking, Financial Services, and Insurance) platform as part of the Vitto Full Stack Intern assignment.

The system demonstrates:
- AI-first product positioning
- Full-stack architecture
- OTP-based authentication flow
- Lead capture system with PostgreSQL
- Scalable backend APIs

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Databases
- PostgreSQL (Lead storage)
- MongoDB (OTP session management)

### Deployment
- Frontend: Vercel (optional)
- Backend: Render

---

## 📂 Project Structure

vitto-ai-project/
│
├── frontend/ # React frontend
├── backend/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── config/
│ └── server.js



---

## 🔐 Features Implemented

### ✅ Authentication (OTP-based)
- Send OTP (mock implementation)
- Verify OTP
- Session handling using JWT

### ✅ Lead Management
- Create Lead (POST /api/leads)
- Get Lead (GET /api/leads/:id)
- Data stored in PostgreSQL

### ✅ Database Integration
- MongoDB for OTP (with TTL)
- PostgreSQL for structured lead data

### ✅ API Design
RESTful APIs built using Express.js with proper validation and error handling.

---

## 🔗 API Endpoints

### 🔐 Auth Routes

POST /api/auth/send-otp
POST /api/auth/verify-otp


### 📊 Lead Routes

POST /api/leads
GET /api/leads/:id

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder:


PORT=5000
PG_URI=your_postgresql_connection_string
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

## ▶️ How to Run Locally

### 1️⃣ Clone the repo

git clone https://github.com/your-username/vitto-ai-project.git

cd vitto-ai-project


### 2️⃣ Backend setup

cd backend
npm install
npm run dev


### 3️⃣ Frontend setup

cd frontend
npm install
npm run dev


---

## 🚀 Deployment

### Backend
Deployed on Render:
👉 https://your-backend-url.onrender.com

### Frontend (optional)
Deployed on Vercel

---

## 🧠 Challenges Faced

- PostgreSQL connection issues due to special characters in password
- SSL configuration errors with Neon database
- "relation does not exist" error due to schema mismatch
- Environment variable loading issues

---

## 💡 Solutions

- Encoded special characters in connection string
- Configured SSL properly for Neon (`rejectUnauthorized: false`)
- Ensured correct table creation in PostgreSQL
- Verified `.env` loading using dotenv

---

## 📚 Learnings

- Handling real-world backend debugging scenarios
- PostgreSQL + MongoDB integration in a single project
- Environment variable management
- API design and validation
- Cloud database (Neon + MongoDB Atlas)

---

## 📄 Assignment Deliverables Covered

- ✔ Full-stack application
- ✔ RESTful APIs
- ✔ PostgreSQL schema implementation
- ✔ MongoDB OTP session handling
- ✔ Deployment-ready backend

---

## 🙌 Author

**Hariom Patel**  
Full Stack Developer  
>>>>>>> 8a32ff2 (Initial commit - full stack project)
