# Event Hub

<div align="center">

**A modern, full-stack event management platform for seamless event discovery, registration, and hosting**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Documentation](#-api-documentation)
- [Architecture](#-architecture)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Event Hub** is a comprehensive event management platform designed for colleges and organizations to streamline event hosting and participation. The platform provides a dual-interface system catering to both **event hosts** (organizers/admins) and **regular users** (participants), offering role-based dashboards with tailored features for each user type.

Built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and styled with **Tailwind CSS**, Event Hub offers a modern, responsive, and intuitive user experience.

---

## ✨ Features

### 👥 **User Features**
- 🔐 **Secure Authentication** - JWT-based authentication with protected routes
- 📅 **Event Discovery** - Browse and search through all available events
- 🎫 **Event Registration** - Quick and easy event registration process
- 📱 **Personal Dashboard** - View registered events and manage participation
- 🔍 **Advanced Search** - Filter events by categories, date, and location
- 🌓 **Dark Mode Support** - Toggle between light and dark themes
- 📧 **Notifications** - Stay updated on event changes and reminders

### 🎯 **Host/Admin Features**
- ✏️ **Event Creation** - Create events with rich details, images, and categories
- 🖼️ **Image Upload** - Upload event banners and promotional images
- 📊 **Event Management** - Full CRUD operations on hosted events
- 👀 **Participant Tracking** - View registered participants for events
- 📈 **Dashboard Analytics** - Overview of hosted events and registrations
- ✅ **Real-time Updates** - Instant updates on event registrations

### 🎨 **General Features**
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🔄 **API Interceptors** - Centralized request handling with automatic token injection
- 🎨 **Modern UI/UX** - Beautiful interface with Framer Motion animations
- 🔒 **Protected Routes** - Role-based access control
- 🌐 **RESTful API** - Well-structured backend API
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast development

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.0.0 | UI framework |
| Vite | 6.2.0 | Build tool and dev server |
| Tailwind CSS | 4.1.3 | Utility-first CSS framework |
| React Router | 7.5.0 | Client-side routing |
| Axios | 1.8.4 | HTTP client with interceptors |
| Framer Motion | 12.6.3 | Animation library |
| Zustand | 5.0.3 | State management |
| Radix UI | - | Headless UI components |
| Lucide React | 0.487.0 | Icon library |

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | - | JavaScript runtime |
| Express.js | 5.1.0 | Web framework |
| MongoDB | - | NoSQL database |
| Mongoose | 8.13.2 | MongoDB ODM |
| JWT | 9.0.2 | Authentication tokens |
| bcryptjs | 3.0.2 | Password hashing |
| Multer | 1.4.5 | File upload handling |
| CORS | 2.8.5 | Cross-origin resource sharing |

---

## 📁 Project Structure

```
Event-Hub/
├── event-registration-backend/
│   ├── config/           # Database and configuration files
│   ├── controllers/      # Request handlers (auth, events, registrations)
│   ├── middleware/       # Authentication middleware
│   ├── models/          # Mongoose schemas (User, Event, Registration)
│   ├── routes/          # API route definitions
│   ├── uploads/         # Uploaded event images
│   ├── utils/           # Utility functions
│   ├── server.js        # Main server file
│   ├── .env.example     # Environment variables template
│   └── package.json     # Backend dependencies
│
└── event-registration-frontend/
    ├── public/          # Static assets
    ├── src/
    │   ├── api/         # Axios instance and API configuration
    │   ├── components/  # Reusable React components
    │   │   ├── ui/      # UI components (buttons, cards, dialogs)
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── EventCard.jsx
    │   │   └── ...
    │   ├── context/     # React context providers
    │   ├── pages/       # Page components
    │   │   ├── admin/   # Admin/Host dashboard pages
    │   │   ├── user/    # User dashboard pages
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── ...
    │   ├── utils/       # Utility functions
    │   ├── App.jsx      # Main app component with routing
    │   └── main.jsx     # Application entry point
    ├── .env.example     # Environment variables template
    ├── vite.config.js   # Vite configuration
    ├── tailwind.config.js # Tailwind CSS configuration
    └── package.json     # Frontend dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sherin-2711/Event-Hub.git
cd Event-Hub
```

2. **Install backend dependencies**
```bash
cd event-registration-backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../event-registration-frontend
npm install
```

### Environment Variables

#### **Backend** (`event-registration-backend/.env`)

Create a `.env` file in the `event-registration-backend` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/eventhub
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/eventhub

JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

> 💡 **Tip:** Use `.env.example` as a template

#### **Frontend** (`event-registration-frontend/.env`)

Create a `.env` file in the `event-registration-frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

### Running the Application

#### **Option 1: Run Backend and Frontend Separately**

**Terminal 1 - Start Backend Server:**
```bash
cd event-registration-backend
npm run dev
# Server will run on http://localhost:5000
```

**Terminal 2 - Start Frontend Dev Server:**
```bash
cd event-registration-frontend
npm run dev
# Frontend will run on http://localhost:5173
```

#### **Option 2: Production Build**

**Backend (Production):**
```bash
cd event-registration-backend
npm start
```

**Frontend (Build):**
```bash
cd event-registration-frontend
npm run build
npm run preview
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Register new user | ❌ |
| POST | `/auth/login` | User login | ❌ |

**Request Body (Signup):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user" // or "host"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Event Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/events/all` | Get all events | ❌ |
| GET | `/events/:id` | Get event by ID | ❌ |
| POST | `/events/create` | Create new event | ✅ (Host) |
| PUT | `/events/:id` | Update event | ✅ (Host) |
| DELETE | `/events/:id` | Delete event | ✅ (Host) |
| GET | `/events/hosted` | Get events created by logged-in host | ✅ (Host) |
| GET | `/events/registered/:email` | Get events registered by user | ✅ |

**Create Event Request:**
```json
{
  "title": "Tech Conference 2026",
  "description": "Annual technology conference",
  "date": "2026-03-15",
  "location": "Main Auditorium",
  "category": "Technology",
  "image": "<file_upload>"
}
```

### Registration Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register for an event | ✅ |
| GET | `/register/event/:eventId` | Get registrations for an event | ✅ (Host) |

**Register for Event:**
```json
{
  "eventId": "event_id_here",
  "email": "user@example.com"
}
```

### Authentication Header
```
Authorization: Bearer <jwt_token>
```

---

## 🏗️ Architecture

### Frontend Architecture
- **Component-based architecture** with React
- **API interceptors** for centralized token management
- **Protected routes** using custom `ProtectedRoute` component
- **State management** with Zustand
- **Responsive design** using Tailwind CSS and mobile-first approach

### Backend Architecture
- **MVC pattern** with controllers, models, and routes
- **JWT-based authentication** middleware
- **RESTful API design** with proper HTTP methods
- **File upload handling** with Multer
- **MongoDB database** with Mongoose ODM

### Security Features
- 🔒 Password hashing with bcrypt (10 salt rounds)
- 🎫 JWT token-based authentication
- 🛡️ Protected API routes with auth middleware
- 🔐 CORS configuration for secure cross-origin requests
- ✅ Input validation and sanitization

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting PR
- Update documentation if needed

---

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB team for the powerful database
- Tailwind CSS for the amazing utility-first framework
- All contributors who help improve this project

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

</div>
