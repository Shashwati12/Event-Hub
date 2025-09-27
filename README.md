# EventHub

EventHub is a **full-stack college event management platform** built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled using **Tailwind CSS**. It allows users to **browse and register for events**, while event hosts can **create and manage their own events**.  

The platform supports **role-based access**, ensuring hosts and users see different interfaces and have different capabilities.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Features

### User Features
- Sign up / Login with secure authentication using **JWT**
- Browse all available events
- Register for events
- View the list of events they have registered for
- User dashboard with personalized event information

### Host Features
- Sign up / Login with host credentials
- Create new events with title, description, date, and location
- View all events they have hosted
- Edit or delete hosted events
- Host dashboard with full event management controls

### Common Features
- Role-based access: Host and User have separate dashboards
- Secure authentication and authorization
- Responsive UI with Tailwind CSS
- Optimized MongoDB schemas for fast queries
- Real-time updates on event registration status

---

## Technologies

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Package Management:** npm
- **Version Control:** Git & GitHub

---

## Installation

1. **Clone the repository**
```
git clone https://github.com/Shashwati12/Event-Hub.git
cd eventhub
```
2. **Install server dependencies**
```
cd server
npm install
```
3. **Install client dependencies**
```
cd ../client
npm install
```
4. **Create .env files** 
Server .env
```
ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Client .env
```
REACT_APP_API_URL=http://localhost:5000/api/v1
Run the development server
```

## Start backend
```
cd event-registration-backend
node server.js
```

## Start frontend
```
cd event-registration-frontend
npm run dev

```
## Usage
### Users will see a User Dashboard:

- Browse events
- Register for events
- View registered events
### Hosts will see a Host Dashboard:
- Create new events
- View all hosted events
- Edit or delete events

## Contributing
### Contributions are welcome!

1. Fork the repository
2. Create a new branch git checkout -b feature/your-feature
3. Commit your changes git commit -m 'Add some feature'
4. Push to the branch git push origin feature/your-feature
5. Open a Pull Request
