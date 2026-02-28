# Modern Developer Portfolio

A sleek, responsive, and highly interactive developer portfolio built with the MERN stack in mind, configured using React.js, Vite, and Tailwind CSS. The portfolio features dark mode, Framer Motion animations, and a fully functional contact form powered by EmailJS.

## Features
- **Responsive Design**: Mobile-first architecture using Tailwind CSS v4.
- **Dark Mode**: Built-in dark/light mode toggle that persists in `localStorage`.
- **Animations**: Smooth scroll events and layout animations provided by `framer-motion`.
- **Contact Form**: Direct email delivery using `@emailjs/browser`.
- **Modern Stack**: Blazing fast development server with Vite, utilizing standard React Hooks and functional components.

## Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

## Installation Steps

1. **Clone the repository** (if from Git) or navigate to the project folder:
   ```bash
   cd my-portfolio
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173/` by default.

## Environment Variable Setup (EmailJS)

To get the contact form working, you need an EmailJS account.
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service to get your `Service ID`.
3. Create an Email Template to get your `Template ID`.
4. Go to Account Settings > API Keys to get your `Public Key`.

Create a `.env` file in the root directory (using `.env.example` as a template) and add your keys:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Deployment Steps (Vercel)

This project includes a `vercel.json` file to automatically handle SPA routing. 

### 1. Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit of portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. Deploy using Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import the GitHub repository you just pushed.
3. In the Configuration panel:
   - Framework Preset should automatically be detected as **Vite**.
   - Under **Environment Variables**, add the three EmailJS variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).
4. Click **Deploy**. Vercel will build and host your portfolio.

## Tech Stack Used
- React.js (v19)
- Vite
- Tailwind CSS (v4)
- Framer Motion
- React Icons
- EmailJS
