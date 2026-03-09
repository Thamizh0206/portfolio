# Thamizhvendhan R - AI/ML Portfolio

A premium, highly interactive, and architecturally designed portfolio for a Machine Learning Engineer specializing in Generative AI, RAG Systems, and Neural Architectures. Built with high-end glassmorphism elements, smooth scroll-triggered animations, and a production-grade tech stack.

## 🚀 Vision & Identity

This portfolio is not just a showcase of projects; it's a statement of technical depth and architectural precision. It features:
- **Cinematic Hero**: A monumental center-stage identity with mouse-tracking radial glows.
- **Academic Evolution**: A structural gallery detailing educational milestones and certified expertise.
- **Glossy Tech Plaques**: Interactive certification cards with real-time validation pulses and industrial-grade indexing.
- **Bento Grid Showcase**: A modern layout for presenting high-impact AI/ML projects.
- **Professional Journey**: A systematic timeline of industry experience in ML and Cybersecurity.

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Animations**: Custom Framer-like hooks (Intersection Observer)
- **Icons**: Lucide React
- **Build Tool**: Vite 7
- **Architecture**: Single-page application with modular component structure

## 📂 Project Structure

- `src/config.ts`: The central nervous system of the site. All content and layout data are managed here.
- `src/sections`: Contains all main architectural blocks (`Hero`, `About`, `Services`, `Portfolio`, `Experience`, `Education`, `CTA`, `Footer`).
- `src/components`: Reusable UI elements (`Navigation`, `MagneticButton`, `ScrambleText`, `PageOverlay`).
- `src/hooks`: Custom logic for reveal triggers, scroll animations, and page load management.

## 🏁 Quick Start

To run the development server:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## 📄 Site Configuration

All content is driven by a single point of truth in `src/config.ts`. This allows for lightning-fast updates without touching the JSX/UI code.

Configurable objects:
- `navigationConfig`: Dynamic links and logo.
- `heroConfig`: Identity, roles, and resume links.
- `aboutConfig`: Professional bio and stats.
- `servicesConfig`: Technical skill categories and skill clouds.
- `portfolioConfig`: Project details, links, and featured tags.
- `experienceConfig`: Workplace history and achievements.
- `educationConfig`: Degree details and certification links.
- `footerConfig`: Social integration and contact metadata.

---
Built with pride by Thamizhvendhan R.
