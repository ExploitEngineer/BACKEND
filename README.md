# 💻 BACKEND

Welcome to the **BACKEND** repository by [ExploitEngineer](https://github.com/ExploitEngineer) — a full-stack backend journey built with **Node.js**, **Express.js**, **MongoDB**, **JWT**, **bcrypt**, **Socket.IO**, and more. This repo contains hands-on implementations, real-world projects, and core backend concepts — structured in a professional and developer-friendly way.

---

## 🚀 Description

This repository includes all backend code from scratch, covering everything from the Node.js environment setup to advanced backend project architecture. It is designed to build deep backend skills by implementing every concept practically.

---

## 🧱 Tech Stack

* **Node.js** (Runtime)
* **Express.js** (Framework)
* **MongoDB & Mongoose** (Database & ODM)
* **EJS** (Template Engine)
* **JWT & bcrypt** (Authentication & Security)
* **Multer** (File Upload)
* **Socket.IO** (Real-time Communication)
* **dotenv** (Environment Configuration)
* **MVC Architecture** (Project Organization)

---

## 📁 Repository Structure

```
BACKEND/
│
├── auth-system/
├── crud-operations/
├── file-upload-multer/
├── mongo-relations/
├── scatch-store/
├── chess-clone-socketio/
│
├── config/
├── utils/
├── middlewares/
└── README.md
```

---

## 📚 Topics Covered

1. JavaScript Essentials for Backend
2. Node.js Setup & File System Operations
3. NPM – Basics & Advanced Usage
4. Express.js – Routing, Middleware, Config
5. Form Handling, Sessions, Cookies
6. EJS Templating, Layouts, Views
7. CRUD Operations with MongoDB
8. Mongoose – Schema & Model Design
9. JWT, bcrypt – Auth & Security
10. Multer – File Uploads & Folder Structure
11. Real-Time Chat/App – Using WebSockets
12. MVC Project Architecture
13. .env & Deployment Setup

---

## 🔨 Major Projects

### 💼 Scatch: Premium Bag Store

> A fully functional eCommerce-like backend project.

* User Authentication with JWT
* Add to Cart and Session Handling
* MVC Folder Structure
* Clean Separation of Concerns
* Production vs Development Environment Setup

---

### ♟️ Chess.com Clone (Real-time Multiplayer)

> Real-time chess app using **Socket.IO**

* WebSocket-based communication
* Multiplayer Rooms & Event Handling
* Game State Sync
* Real-time Messaging & Move Broadcasting

---

### 📁 File Upload System

> Multer-powered file upload API

* Uploads with `multipart/form-data`
* Folder management with custom storage config
* Secure handling and sanitization

---

### 🔐 Auth System (JWT + bcrypt)

> Secure login and registration system

* Password hashing with bcrypt
* Token generation & verification using JWT
* Middleware for protected routes

---

## 🧪 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ExploitEngineer/BACKEND.git
   cd BACKEND
   ```

2. Navigate to a project folder:

   ```bash
   cd auth-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in root of the project and add:

   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   ```

5. Run the server:

   ```bash
   npm run dev
   ```

---

## 📦 Environment Variables

Example `.env` file:

```env
PORT=4000
MONGO_URI=mongodb+srv://your-db-uri
JWT_SECRET=yourSuperSecret
```

---

## 🧠 Learning Goals

* Build production-ready REST APIs
* Understand async/await, promises, and middleware flow
* Work with MongoDB relations and CRUD ops
* Implement secure authentication with JWT + bcrypt
* Upload and manage files with Multer
* Create real-time apps with Socket.IO
* Use environment configs and structure code properly

---

## 🧑‍💻 Author

**ExploitEngineer**
🌐 [github.com/ExploitEngineer](https://github.com/ExploitEngineer)

> “Backend isn't just about saving data; it's about building logic that powers the world behind the scenes.”
