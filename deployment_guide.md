# Portfolio Deployment Guide

## 1. Project Structure
```text
my-portfolio/
├── public/                 # Static assets
│   └── vite.svg            # Vite favicon
├── src/                    # Source code
│   ├── assets/             # Images, fonts, etc.
│   │   └── react.svg       # React logo
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Footer with social links
│   │   └── Navbar.jsx      # Top navigation with dark mode toggle
│   ├── context/            # React Context providers
│   │   └── ThemeContext.jsx # Handlers for Dark/Light mode
│   ├── sections/           # Main page sections
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx # EmailJS integration
│   │   ├── HeroSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── SkillsSection.jsx
│   ├── App.css             # Base App styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Tailwind CSS directives
│   └── main.jsx            # React entry point
├── .env.example            # Template for environment variables
├── .gitignore              # Files ignored by Git
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
├── vercel.json             # Vercel configuration for SPA routing
└── vite.config.js          # Vite configuration
```

## 2. GitHub Deployment Commands

*Note: Your local Git repository has already been initialized and your initial commit has been made.*

To push your code to GitHub, go to [GitHub](https://github.com/), create a **New Repository** (do NOT initialize it with a README, .gitignore, or license), and then run the following commands in your terminal, replacing `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual details:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## 3. Vercel Hosting Steps

Once your code is on GitHub, follow these simple steps to deploy it to Vercel:

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** and select **Project**.
3. Locate the GitHub repository you just pushed and click **Import**.
4. Important: Under **Environment Variables**, you must add your EmailJS keys for the contact form to work:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Vercel will build and host your site automatically!
