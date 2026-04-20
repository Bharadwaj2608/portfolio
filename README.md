# 🚀 DEV.FOLIO — Full-Stack Portfolio

A visually stunning, production-ready portfolio built with the **MERN stack** + **Three.js** + **GSAP**.

![Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Stack](https://img.shields.io/badge/Node.js-18-339933?style=flat&logo=node.js)
![Stack](https://img.shields.io/badge/Express-4-000000?style=flat&logo=express)
![Stack](https://img.shields.io/badge/MongoDB-7-47A248?style=flat&logo=mongodb)
![Stack](https://img.shields.io/badge/Three.js-0.155-000000?style=flat&logo=three.js)
![Stack](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat&logo=greensock)

---

## ✨ Features

### Frontend
- **Three.js** 3D particle field with floating geometric shapes and neural-net connection lines
- **GSAP ScrollTrigger** animations — smooth reveals, parallax, counter animations
- **Custom cursor** with magnetic hover effects
- **Animated loader** with progress counter
- **Responsive design** — mobile-first, works on all screen sizes
- **React Router v6** — SPA routing with page transitions
- **Dynamic project filtering** by category
- **Interactive contact form** with validation feedback
- **Skills section** with animated progress bars by category

### Backend
- **RESTful API** with Express.js
- **MongoDB + Mongoose** — Projects, Skills, Contacts models
- **Rate limiting** — prevents abuse (100 req/15 min)
- **Helmet.js** — security headers
- **Express Validator** — input sanitization
- **Morgan** — HTTP request logging
- **CORS** configured for frontend origin
- **Database seeding** script with 6 projects + 22 skills

### Design
- **Obsidian dark theme** with ember orange + electric cyan accents
- **Bebas Neue** display font, **DM Sans** body, **JetBrains Mono** for code/labels
- Noise texture overlay for depth
- CSS Grid + Flexbox responsive layouts
- Additive blending on Three.js particles for glow effect

---

## 📁 Project Structure

```
portfolio/
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ThreeBackground.jsx   # Three.js particles + shapes
│   │   │   ├── Cursor.jsx            # Custom animated cursor
│   │   │   ├── Loader.jsx            # Animated loading screen
│   │   │   ├── Navbar.jsx            # Responsive nav + mobile menu
│   │   │   ├── Hero.jsx              # Landing section w/ GSAP
│   │   │   ├── Stats.jsx             # Animated stat counters
│   │   │   ├── ProjectsGrid.jsx      # Filterable project cards
│   │   │   ├── Skills.jsx            # Tabbed skill bars
│   │   │   ├── Contact.jsx           # Contact form + API
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx             # Timeline + bio
│   │   │   ├── Projects.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── utils/
│   │   │   └── api.js                # Axios instance + endpoints
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css                 # Design system + CSS variables
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                    # Node.js + Express backend
│   ├── models/
│   │   ├── Project.js
│   │   ├── Contact.js
│   │   └── Skill.js
│   ├── routes/
│   │   ├── projects.js        # CRUD + like endpoint
│   │   ├── contact.js         # Form submission + validation
│   │   ├── skills.js          # Skills + bulk create
│   │   └── stats.js           # Aggregated stats
│   ├── index.js               # Express app entry
│   ├── seed.js                # DB seeding script
│   ├── .env.example
│   └── package.json
│
├── package.json               # Root scripts (concurrently)
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd portfolio
npm run install:all
```

### 2. Configure Environment

```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and settings
```

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_secret_here
```

### 3. Seed Database

```bash
npm run seed
```
This creates 6 projects and 22 skills in MongoDB.

### 4. Start Development Servers

```bash
# From root — starts both frontend and backend
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects (filter by category/featured) |
| GET | `/api/projects/:id` | Single project (increments views) |
| POST | `/api/projects/:id/like` | Like a project |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| GET | `/api/skills` | All skills (grouped by category) |
| POST | `/api/skills/bulk` | Bulk create skills |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/stats` | Aggregated portfolio stats |

---

## 🎨 Customization

### Updating Your Info
Edit `client/src/components/Hero.jsx` for the headline and `client/src/pages/About.jsx` for bio and timeline.

### Adding Projects
Either seed via `server/seed.js` or POST to `/api/projects`.

### Theme Colors
All colors are CSS variables in `client/src/index.css`:
```css
:root {
  --ember: #FF4500;    /* Primary accent */
  --plasma: #FF6B00;   /* Secondary accent */
  --cyan: #00F5FF;     /* Cool accent */
  --electric: #7B2FFF; /* Purple accent */
}
```

### Three.js Particles
Adjust count, colors, and behavior in `ThreeBackground.jsx`:
```js
const count = 3500;  // Particle count
const colorOptions = [...]; // Particle colors
```

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | React 18 + Vite |
| 3D Graphics | Three.js |
| Animation | GSAP + ScrollTrigger |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Styling | CSS Variables + Tailwind |
| Backend | Node.js + Express 4 |
| Database | MongoDB + Mongoose |
| Validation | Express Validator |
| Security | Helmet.js + Rate Limiting |
| Dev Tools | Nodemon + Concurrently |

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client && npm run build
# Deploy /dist to Vercel
```

### Backend (Railway / Render)
Set environment variables on your platform and deploy the `/server` directory.

### MongoDB Atlas
Replace `MONGODB_URI` with your Atlas connection string.

---

## 📄 License
MIT — feel free to use as a template for your own portfolio.

---

**Built with ❤️ using React · Node.js · Express · MongoDB · Three.js · GSAP**
