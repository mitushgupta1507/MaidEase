# 🏠 MaidEase – Maid & Nanny Service Management Platform

A modern **full-stack MERN web application** that simplifies hiring trusted domestic helpers such as **maids, babysitters, nannies, and cooks**. MaidEase provides users with a secure and user-friendly platform to search, filter, book, and manage home service professionals while giving administrators complete control over workers, users, and bookings.

---

## 📖 Project Overview

Finding reliable household workers is often difficult due to the lack of trusted platforms. MaidEase solves this problem by providing a centralized system where customers can browse verified workers, compare profiles, make bookings, and manage their service history.

The platform also includes an **Admin Dashboard** for managing workers, users, bookings, and overall platform activities.

---

## ✨ Key Features

### 👤 User Features

- User Registration & Login (JWT Authentication)
- Secure User Profile
- Browse Available Workers
- Advanced Search & Filters
- View Worker Details
- Book Workers
- Booking History
- Booking Status Tracking
- Responsive UI

---

### 🛠 Admin Features

- Secure Admin Login
- Dashboard with Statistics
- Add New Worker
- Edit Worker Details
- Delete Worker
- Manage Users
- Manage Bookings
- Revenue Dashboard
- Recent Users & Recent Bookings
- Top Workers Overview

---

## 🚀 Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary
- bcryptjs

### Database

- MongoDB Atlas

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
MaidEase
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   ├── utils
│   └── package.json
│
└── README.md
```
---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/mitushgupta1507/MaidEase.git
```

---

## 2️⃣ Navigate to the Project

```bash
cd MaidEase
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 4️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/maidease

JWT_SECRET=maidease_secret_key
CLOUDINARY_CLOUD_NAME=dpguu08hy
CLOUDINARY_API_KEY=122641939873864
CLOUDINARY_API_SECRET=K8jBhg8Q8WOAft7ko_aYUVtt3jc
```

Create another `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# ▶️ Running the Application

## Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔌 API Overview

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | User Profile |

---

## Workers

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/workers` | Get All Workers |
| GET | `/api/workers/:id` | Worker Details |
| POST | `/api/workers` | Create Worker (Admin) |
| PUT | `/api/workers/:id` | Update Worker |
| DELETE | `/api/workers/:id` | Delete Worker |

---

## Bookings

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/bookings` | Create Booking |
| GET | `/api/bookings` | My Bookings |
| PUT | `/api/bookings/:id/cancel` | Cancel Booking |

---

## Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/admin/dashboard` | Dashboard Statistics |
| GET | `/api/admin/users` | Manage Users |
| GET | `/api/admin/bookings` | Manage Bookings |

---

# 📸 Screenshots

Add screenshots of the following pages after deployment:

- 🏠 Home Page
- 👤 Login Page
- 📝 Signup Page
- 👨‍👩‍👧 Workers Page
- 🔍 Worker Details
- 📅 Bookings
- 📜 Booking History
- 👤 User Profile
- 📊 Admin Dashboard
- 👷 Manage Workers
- 👥 Manage Users
- 📖 Manage Bookings

---

# 🚀 Future Enhancements

- 💳 Online Payment Integration
- 📱 Mobile Application
- 🔔 Real-time Notifications
- ⭐ Worker Reviews & Ratings
- 📍 Live Location Tracking
- 🤖 AI-based Worker Recommendations
- 🌐 Multi-language Support
- 📅 Calendar Integration
- 💬 Real-time Chat System
- 🆘 Emergency SOS Feature

---

# 👨‍💻 Author

**Mitush Gupta**

B.Tech Computer Science Engineering (Cyber Security)

MERN Stack Developer

GitHub: https://github.com/mitushgupta1507

Email: mitushgupta1507@gmail.com

---

# 📄 License

This project is developed for educational and internship purposes.

© 2026 Mitush Gupta. All Rights Reserved.