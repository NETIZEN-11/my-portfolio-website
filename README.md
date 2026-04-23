# Portfolio Website - Nitesh Singh

Minimal navy blue and white themed portfolio built with React.js and Node.js.

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

### Option 1: Vercel (Frontend) + Render (Backend)

#### Deploy Backend on Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `server`
5. Add Environment Variables:
   - `MONGO_URI` = Your MongoDB Atlas connection string
   - `PORT` = 5001
6. Deploy and copy the URL

#### Deploy Frontend on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Settings:
   - **Framework:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add Environment Variable:
   - `VITE_API_URL` = Your Render backend URL
5. Deploy

### Option 2: Railway (Full Stack)
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Add two services:
   - Backend (server folder)
   - Frontend (client folder)
4. Configure environment variables
5. Deploy

### MongoDB Atlas Setup
1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist IP (0.0.0.0/0 for all)
4. Get connection string
5. Use in `MONGO_URI`

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
