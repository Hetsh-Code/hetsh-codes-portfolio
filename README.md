# Hetsh Udhnawala - Premium Portfolio

> An award-winning, ultra-premium dark luxury 3D portfolio website showcasing the work of professional graphic designer **Hetsh Udhnawala**. Built with cutting-edge web technologies and powered by AI-assisted insights.

![React](https://img.shields.io/badge/React-19.0.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-06B6D4?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎨 Overview

This portfolio is a fully responsive, high-performance web application designed to showcase professional graphic design work. It features a sophisticated dark theme with interactive 3D elements, smooth animations, and an AI-powered chat interface powered by Google's Gemini API.

### Key Highlights

- 🌙 **Dark Luxury Design** - Sophisticated, minimalist aesthetic with premium visual hierarchy
- ⚡ **Lightning Fast** - Built with Vite for instant page loads and optimal performance
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- 🤖 **AI-Powered Chat** - Integrated Gemini AI for intelligent visitor interactions
- 🎭 **Interactive UI** - Smooth animations and transitions using Motion library
- 🔍 **Search Functionality** - Built-in search to explore projects and content
- 📊 **Comprehensive Sections** - About, Services, Portfolio, Skills, Timeline, Testimonials, and more

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Configuration](#configuration)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Features

- **Hero Section** - Captivating landing introduction with animated background
- **About Section** - Professional background and expertise overview
- **Portfolio Gallery** - Showcase of design projects with detailed case studies
- **Services** - Display of offered design and branding services
- **Skills** - Technical and creative skill inventory with proficiency levels
- **Timeline** - Professional journey and milestones
- **Testimonials** - Client feedback and social proof
- **Contact Section** - Multiple contact channels and messaging capability
- **Resume** - Downloadable resume with modal preview
- **Search Modal** - Quick search functionality across portfolio content
- **AI Chat** - Intelligent assistant for visitor inquiries

### Technical Features

- Type-safe TypeScript implementation
- Responsive design using Tailwind CSS
- Optimized animations with Motion library
- SEO-friendly structure
- Accessibility considerations
- Fast refresh development environment
- Production-ready build optimization

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19.0.1 |
| **Language** | TypeScript 5.8.2 |
| **Build Tool** | Vite 6.2.3 |
| **Styling** | Tailwind CSS 4.1.14 |
| **UI Components** | Lucide React (icons) |
| **Animations** | Motion 12.23.24 |
| **AI Integration** | Google Gemini API 2.4.0 |
| **Server** | Express 4.21.2 |
| **Environment** | Node.js 18+ |

---

## 📁 Project Structure

```
hetsh-codes-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── AvatarLogo.tsx
│   │   ├── Background.tsx
│   │   ├── Contact.tsx
│   │   ├── Cursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Resume.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── SearchModal.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── Timeline.tsx
│   ├── App.tsx              # Main App component
│   ├── data.ts              # Portfolio data and content
│   ├── types.ts             # TypeScript type definitions
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── assets/                  # Static assets (images, fonts, etc.)
├── public/                  # Public files
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── .env.local               # Environment variables (not tracked)
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or yarn/pnpm)
- **Google Gemini API Key** (for AI chat functionality)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hetsh-Code/hetsh-codes-portfolio.git
   cd hetsh-codes-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the project root and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   To get your Gemini API key:
   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Click on "Get API Key"
   - Create a new API key
   - Copy the key to your `.env.local` file

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

---

## ⚙️ Environment Setup

### Environment Variables

Create a `.env.local` file in the project root with the following:

```env
# Required for AI chat functionality
GEMINI_API_KEY=your_api_key_here
```

### Development Environment

The project uses:
- **Vite** for fast development and hot module replacement (HMR)
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling

### File Watching

File watching is automatically managed to prevent flickering during development. If you need to disable HMR (Hot Module Replacement), set:

```bash
DISABLE_HMR=true
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove dist folder and build artifacts |

### Development Workflow

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Make your changes** - The browser will auto-refresh thanks to HMR

3. **Type check your code:**
   ```bash
   npm run lint
   ```

4. **Before committing**, ensure no type errors exist

### Code Organization

- **Components** are located in `src/components/`
- **Data** is managed in `src/data.ts`
- **Types** are defined in `src/types.ts`
- **Styling** uses Tailwind utility classes (no separate CSS files needed)

---

## 🏗 Building for Production

### Create a Production Build

```bash
npm run build
```

This command:
- Bundles all assets with Vite
- Minifies JavaScript and CSS
- Generates optimized output in the `dist/` folder
- Prepares files for deployment

### Preview Production Build

Before deploying, test the production build locally:

```bash
npm run preview
```

### Clean Build Artifacts

To remove build artifacts and start fresh:

```bash
npm run clean
```

---

## 🧩 Components

### Core Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Navigation header with menu |
| `Hero` | Landing section with introduction |
| `About` | Professional background information |
| `Services` | Design services offered |
| `Portfolio` | Project showcase and case studies |
| `Skills` | Technical and creative competencies |
| `Timeline` | Career progression and milestones |
| `Testimonials` | Client feedback and reviews |
| `Contact` | Contact information and inquiry form |
| `Resume` | Professional resume display |
| `ResumeModal` | Modal for detailed resume view |
| `SearchModal` | Search functionality overlay |
| `Footer` | Site footer with links |
| `Background` | Animated background effects |
| `Cursor` | Custom cursor component |
| `AvatarLogo` | Profile/avatar display |

---

## ⚙️ Configuration

### Vite Configuration

Configured in `vite.config.ts`:
- React plugin for JSX support
- Tailwind CSS Vite plugin for optimized styling
- Path alias for clean imports (`@/` points to project root)
- HMR settings for development

### TypeScript Configuration

Configured in `tsconfig.json`:
- Strict mode enabled for type safety
- JSX support for React
- Module resolution for imports
- Source maps for debugging

### Tailwind CSS Configuration

Configured in `tailwind.config.ts`:
- Dark mode enabled by default
- Custom color palette for luxury theme
- Extended typography and spacing
- Plugin support

---

## 🚄 Performance

This portfolio is optimized for performance:

- **Code Splitting** - Vite automatically handles code splitting
- **Image Optimization** - Consider using modern image formats (WebP)
- **Lazy Loading** - Components load on demand
- **CSS Minification** - Tailwind purges unused styles in production
- **Build Size** - Production builds are highly optimized
- **Fast Refresh** - HMR provides instant feedback during development

### Performance Tips

- Use the `npm run preview` command to test production performance locally
- Monitor bundle size with `npm run build` output
- Optimize images before adding to assets
- Use Lighthouse Chrome DevTools for performance audits

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes and ensure type checking passes (`npm run lint`)
4. Commit your changes (`git commit -m 'Add AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Ensure all code is type-safe
- Use meaningful component and variable names
- Add comments for complex logic
- Keep components modular and reusable

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📞 Contact & Social

For inquiries or collaboration opportunities, visit the portfolio website or reach out through the contact section.

- **Portfolio:** [hetsh-codes-portfolio](https://hetsh-codes-portfolio.vercel.app)
- **Email:** Contact via the website form
- **LinkedIn:** Available on the portfolio
- **GitHub:** [@Hetsh-Code](https://github.com/Hetsh-Code)

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Google Gemini API](https://ai.google.dev) - AI integration
- [Lucide React](https://lucide.dev) - Icon library
- [Motion](https://motion.dev) - Animation library

---

**Last Updated:** July 2026

Happy coding! 🚀
