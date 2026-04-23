# Portfolio Website - Nitesh Singh

Minimal navy blue and white themed portfolio built with React.js and Node.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NETIZEN-11/my-portfolio-web)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 🌐 Live Demo
- **Website:** [Coming Soon - Deploy to see your live site!]
- **API:** [Coming Soon - Your Render backend URL]

## 🎨 Design Features

- **Minimal Design** - Clean navy blue (#001433) and white color scheme
- **No Gradients** - Simple, professional styling
- **Unified Tech Stack** - All technologies in one section with icons
- **Responsive** - Works on all devices
- **Smooth Animations** - Framer Motion powered

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## 📁 Project Structure

```
myPortFolio/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/      # Navbar, Footer, BackToTop
│   │   │   ├── Sections/    # Hero, About, Skills, Projects, Experience
│   │   │   └── UI/          # LoadingScreen, ProjectCard
│   │   ├── context/         # ThemeContext
│   │   ├── hooks/           # useScrollReveal
│   │   └── App.jsx
│   └── package.json
├── server/          # Node.js backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   └── server.js
└── README.md
```

## 🚀 Local Development

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file in `server/`:
```env
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5001
```

Start backend:
```bash
npm run dev
```

Backend runs on: **http://localhost:5001**

### Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in `client/`:
```env
VITE_API_URL=http://localhost:5001
```

Start frontend:
```bash
npm run dev
```

Frontend runs on: **http://localhost:5173** or **http://localhost:5174**

## 📦 Deployment

### 🚀 Quick Deploy (15 minutes)
See **[QUICK_START.md](QUICK_START.md)** for fastest deployment

### 📖 Detailed Deployment Guide
See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions

### ✅ Pre-Deployment Checklist
See **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** for complete checklist

### Deployment Stack
- **Frontend:** Vercel (Free tier)
- **Backend:** Render (Free tier)
- **Database:** MongoDB Atlas (Free tier)
- **Total Cost:** $0/month 🎉

## 🎯 Features

- ✅ Hero section with introduction
- ✅ About section with background
- ✅ Unified Tech Stack with icons
- ✅ Projects showcase with filtering
- ✅ Experience/Journey timeline
- ✅ Responsive navbar
- ✅ Footer with social links
- ✅ Smooth scroll animations
- ✅ Loading screen
- ✅ 404 page
- ✅ Back to top button

## 🎨 Color Palette

```
Navy-900: #001433 (Main background)
Navy-800: #002966 (Cards, sections)
Navy-700: #003d99 (Borders)
Navy-600: #0052cc (Buttons, accents)
Navy-500: #0066ff (Hover states)
White: #ffffff (Text)
Gray-300: #d1d5db (Secondary text)
```

## 📝 API Endpoints

### POST /api/contact
Submit contact form (currently not in use)

## 🔗 Links

- **GitHub:** [NETIZEN-11](https://github.com/NETIZEN-11)
- **Repository:** [my-portfolio-web](https://github.com/NETIZEN-11/my-portfolio-web)

## 📄 License

MIT License - Feel free to use this project for your own portfolio!

---

Made with ❤️ by Nitesh Singh
