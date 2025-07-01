# 🛠️ NodeJS CRUD API

A simple and clean **CRUD (Create, Read, Update, Delete)** API built using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates basic backend functionality using RESTful principles — ideal for beginners learning full-stack development or backend APIs.

## 📌 Live Repo

🔗 GitHub: [https://github.com/Rahulkrcse124/NodeJS_CRUD](https://github.com/Rahulkrcse124/NodeJS_CRUD)

---

## 🚀 Features

- ✅ Create a new user
- 📖 Read all users or a single user by ID
- 🔄 Update existing user details
- ❌ Delete user by ID
- 📡 RESTful API structure
- 🧪 API tested using Postman / Thunder Client

---

## 🧰 Tech Stack

- **Node.js** – Server-side JavaScript
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **dotenv** – Environment variable management

---

## 📁 Project Structure

NodeJS_CRUD/
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ └── userController.js # Logic for user operations
├── models/
│ └── userModel.js # Mongoose user schema
├── routes/
│ └── userRoutes.js # User routes
├── .env # Environment variables
├── server.js # Entry point of the server
└── package.json # Project metadata & dependencies


---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/Rahulkrcse124/NodeJS_CRUD.git
cd NodeJS_CRUD

# Install dependencies
npm install

🌐 Configure Environment
Create a .env file at the root level and add:

env
PORT=4000
MONGO_URI=your_mongodb_connection_string
🚀 Start the Server
bash
Copy
Edit
npm start
API will run at: http://localhost:4000

📮 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create new user
PUT	/api/users/:id	Update user by ID
DELETE	/api/users/:id	Delete user by ID

🔍 Sample Request (POST)
http
Copy
Edit
POST /api/users
Content-Type: application/json

{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "age": 25
}
📸 Screenshots (Optional)
Add Postman screenshots or Thunder Client collections here to showcase working API.

📦 Future Improvements
Add user validation using express-validator

Add authentication (JWT)

Add Swagger documentation

Pagination & filtering support

Integrate frontend with React or EJS

🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.

# Fork the repo
# Create a new branch
# Commit your changes
# Push and create PR


📄 License
This project is licensed under the MIT License.

Made with ❤️ by Rahul Kumar

---
---

Let me know if you'd like to generate `.env.example`, add test cases with Jest, or auto-deploy this with Render or Railway.
