# Portfolio Website - Nitish Kumar

Full Stack Developer Portfolio with React.js frontend and Node.js/Express backend.

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## Project Structure

```
portfolio/
├── client/          # React frontend
├── server/          # Node backend
└── README.md
```

---

## Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file in `server/` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend:
```bash
npm run dev
```

Backend runs on: http://localhost:5000

### Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in `client/` directory:
```env
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

Frontend runs on: http://localhost:5173

---

## Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port (default: 5000) |

### Frontend (.env)
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |

---

## API Endpoints

### POST /api/contact
Submit contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "All fields are required"
}
```

---

## Features

### Frontend
- Modern glassmorphism design
- Dark/Light mode toggle (persisted in localStorage)
- Fully responsive layout
- Smooth animations with Framer Motion
- Scroll reveal effects
- Loading screen
- Back-to-top button
- Toast notifications
- Project filtering
- 404 page

### Sections
- Hero with typing animation
- About
- Skills (categorized)
- Projects (4+ with links)
- Experience timeline
- Contact form
- Footer with social links

### Backend
- REST API with Express
- MongoDB storage with Mongoose
- Input validation
- Error handling middleware
- CORS enabled

---

## Deployment Guide

### Frontend: Vercel / Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL` = your backend URL

### Backend: Render / Railway

1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables:
   - `MONGO_URI` = your MongoDB connection string
   - `PORT` = 5000

### MongoDB: MongoDB Atlas

1. Create a free cluster at mongodb.com
2. Create a database user
3. Get connection string
4. Use it as `MONGO_URI` in backend

---

## Skills

- **Frontend:** React, JavaScript, HTML, CSS, Tailwind
- **Backend:** Node.js, Express.js, MongoDB
- **DevOps:** Docker, REST APIs, Git

---

## Contact

- **GitHub:** https://github.com/NETIZEN-11
- **Email:** nitishkumar@example.com

---

Made with React + Node.js