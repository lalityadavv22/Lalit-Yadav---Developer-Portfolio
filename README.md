# Lalit Yadav — Full-Stack / Software Engineer & AI Portfolio

> A high-performance, dark-mode developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Node.js / Express**, **GSAP**, **Lenis**, and procedural **Web Audio & Canvas 2D** graphics.

[![React](https://img.shields.io/badge/React-19.0.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.14-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_4.21-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3.26-white?style=flat-square)](https://lenis.darkroom.engineering/)

---

## 📌 Table of Contents

1. [Executive Summary](#-executive-summary)
2. [Live Links & Contact](#-live-links--contact)
3. [Architecture & System Design](#-architecture--system-design)
4. [Complete Tech Stack Breakdown](#-complete-tech-stack-breakdown)
5. [Core Features & UI/UX Highlights](#-core-features--uiux-highlights)
6. [Featured Projects Showcase](#-featured-projects-showcase)
7. [Verified Credentials & Industry Experience](#-verified-credentials--industry-experience)
8. [Folder & File Structure](#-folder--file-structure)
9. [Local Development & Setup Guide](#-local-development--setup-guide)
10. [Production Build & Deployment](#-production-build--deployment)
11. [Interview Defense Guide (Q&A for Recruiters)](#-interview-defense-guide-qa-for-recruiters)

---

## 🌟 Executive Summary

This application is the personal engineering portfolio of **Lalit Yadav**, a Computer Science & Engineering undergraduate at **Gurugram University** (2023–2027) with practical experience in offensive security (C-DAC NOIDA / MeitY), predictive machine learning (AICTE × Shell × Edunet Foundation), and full-stack software development.

Rather than relying on generic website templates or heavy component libraries, this portfolio was handcrafted from scratch with an emphasis on **mathematical typography, 60fps micro-animations, zero-asset Web Audio synthesis, SVG displacement refraction filters, and full-stack API integration**.

---

## 🔗 Live Links & Contact

| Platform | Link / Details |
| :--- | :--- |
| **Portfolio Website** | Hosted on Cloud Run with SSL encryption |
| **GitHub** | [github.com/lalityadavv22](https://github.com/lalityadavv22) |
| **LinkedIn** | [linkedin.com/in/lalit-yadav](https://www.linkedin.com/in/lalit-yadav-823349327/) |
| **Email** | [lalityadavl420@gmail.com](mailto:lalityadavl420@gmail.com) |
| **Phone** | +91 7206724591 |
| **Location** | Gurugram, Haryana, India |

---

## 🏛 Architecture & System Design

```
+-------------------------------------------------------------------------+
|                              CLIENT (Browser)                           |
|                                                                         |
|  +--------------------+  +----------------------+  +-----------------+  |
|  |   Lenis Scroller   |  |   GSAP ScrollTrigger |  | Custom Cursor   |  |
|  +--------------------+  +----------------------+  +-----------------+  |
|                                                                         |
|  +--------------------+  +----------------------+  +-----------------+  |
|  | Silk Canvas Shader |  | SVG Glass Distortion |  | Web Audio Synth |  |
|  +--------------------+  +----------------------+  +-----------------+  |
|                                                                         |
|  +-------------------------------------------------------------------+  |
|  |       React 19 Components (Hero, About, Skills, Projects, Modal)  |  |
|  +-------------------------------------------------------------------+  |
+------------------------------------+------------------------------------+
                                     |
                          REST API (`/api/contact`)
                          JSON Payload (Name, Email, Msg)
                                     |
                                     v
+------------------------------------+------------------------------------+
|                         SERVER (Node.js / Express)                      |
|                                                                         |
|  +--------------------+  +----------------------+  +-----------------+  |
|  |   Input Validator  |  | In-Memory Message DB |  | Vite Middleware |  |
|  |  (Regex & Escapes) |  | (Audit & Logging)    |  |  (Dev / Prod)   |  |
|  +--------------------+  +----------------------+  +-----------------+  |
+-------------------------------------------------------------------------+
```

### Full-Stack Architecture Principles
1. **Separation of Concerns**: The frontend remains a clean, client-side single-page app (SPA) for rapid rendering, while backend operations (contact form sanitization, logging, server routing) are safely handled by Express on port 3000.
2. **Dual-Mode Serving**: In development, Express runs alongside Vite via `vite.middlewares` for instant hot-reload. In production, Vite pre-compiles static assets into `/dist` while Express serves static bundles and API endpoints seamlessly.
3. **No External Asset Bloat**: Audio interactions, canvas backgrounds, and glass refraction filters are all computed mathematically in real-time without downloading heavy MP3 files, video loops, or bulky raster textures.

---

## 🛠 Complete Tech Stack Breakdown

### Frontend Technologies
| Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- |
| **React** | `19.0.1` | Modern reactive UI framework utilizing functional hooks, declarative component states, and strict DOM rendering. |
| **TypeScript** | `~5.8.2` | Strong type safety across data models, project interfaces, component props, and API response structures. |
| **Tailwind CSS** | `v4.1.14` | Next-generation utility-first styling engine integrated natively through `@tailwindcss/vite` for minimal CSS bundle size. |
| **Lenis** | `1.3.26` | High-precision inertial smooth-scrolling engine for luxurious scroll momentum without breaking native keyboard navigation. |
| **GSAP & ScrollTrigger**| `3.15.0` | Industry-standard timeline animation library paired with GSAP ticker sync to keep Lenis and layout transforms in lockstep. |
| **Motion** | `12.23.24`| Declarative layout and presence animations for modal transitions and entering states. |
| **Lucide React** | `0.546.0` | Accessible, tree-shakeable SVG icon collection. |

### Backend & Tooling
| Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- |
| **Node.js & Express** | `4.21.2` | Lightweight, fast HTTP web server providing REST endpoints (`/api/contact`, `/api/health`). |
| **Vite** | `6.2.3` | Blazing-fast development server and production bundler. |
| **tsx** | `4.21.0` | Direct TypeScript execution environment for Node.js backend execution during local development. |
| **esbuild** | `0.25.0` | Fast bundler compiling `server.ts` into a standalone production CommonJS executable (`dist/server.cjs`). |

---

## 💎 Core Features & UI/UX Highlights

### 1. Procedural Silk Canvas Background (`SilkBackground.tsx`)
- Rendered via an HTML5 `<canvas>` element using a custom mathematical shader simulation.
- Combines Euler’s constant ($e \approx 2.71828$), sinusoidal wave functions, and pseudo-random noise to generate an organic, flowing silk effect in deep twilight tones (`#0a0a0a` to `#14141c`).
- Optimized with an internal downsampling pixel ratio ($0.3\times$) for zero-latency frame rates even on low-power devices.

### 2. Physical Glass Distortion Filter (`GlassFilter.tsx`)
- Uses native SVG `<filter>` with `<feTurbulence>` and `<feDisplacementMap>` to achieve authentic physical optical refraction.
- Applied selectively across glass cards and panels through the CSS filter selector `filter: url(#glass-distortion)`.

### 3. Procedural Web Audio Synthesizer (`src/utils/audio.ts`)
- Features a custom zero-dependency `SoundController` utilizing the browser's native **Web Audio API** (`AudioContext`, `OscillatorNode`, `GainNode`).
- **Hover Micro-Sound**: 40ms upward frequency ramp (440Hz $\to$ 580Hz) at 0.015 gain.
- **Click Sound**: 60ms downward punch (800Hz $\to$ 300Hz) at 0.03 gain.
- **Confirmation Chime**: Three-tone ascending harmonic chord (C5 523Hz $\to$ E5 659Hz $\to$ G5 784Hz).
- **Zero MP3/WAV downloads**: Zero network payload, zero audio lag, and full browser autoplay compliance.

### 4. Inertial Smooth Scrolling (`Lenis` + `GSAP`)
- Integrated with `Lenis` for natural inertial momentum.
- Synced directly to `gsap.ticker.add(updateTicker)` with `lagSmoothing(0)` to prevent frame skipping or jitter.

### 5. Interactive Magnetic Custom Cursor (`CustomCursor.tsx`)
- Tracks mouse coordinates with linear interpolation (`lerp`) for smooth trailing physics.
- Inspects elements for the `[data-cursor]` attribute (e.g., `data-cursor="Verify"`, `data-cursor="Explore"`), expanding dynamically to display contextual badge labels.
- Automatically disabled on touch screens (`pointer: coarse`) for mobile ergonomics.

### 6. Interactive Modals
- **Resume Modal (`ResumeModal.tsx`)**: Full interactive resume viewer with verified credentials, print command trigger (`window.print()`), and direct `.txt` file generation and download via Blob API.
- **Certificate Modal (`CertificateModal.tsx`)**: Official credential viewer with credential IDs, verified skills, and one-click copyable verification URLs.
- **System Architecture Spec Modal (`ProjectsSection.tsx`)**: Deep-dive case study view for each project with full architecture highlights, keyboard ESC listener, and scroll locks.

### 7. Direct Contact & Messaging System (`ContactSection.tsx`)
- Includes peer-floating label inputs, direct email copy with visual feedback, telephone links, and one-click WhatsApp quick-chat generation.
- Submits directly to the backend `/api/contact` route with client-side and server-side email validation.
- **Easter Egg**: Typing `hiredev` anywhere on the keyboard triggers an instant scroll to the contact form, accompanied by an emerald glowing border and an audio chime.

---

## 🚀 Featured Projects Showcase

### 1. CrickAI — AI Cricket Training System
- **Domain**: AI & Sports / Full-Stack Engineering
- **Stack**: Node.js, Firebase Firestore, Ollama Local LLM, JavaScript, Antigravity Framework
- **Key Features**:
  - Offline-first local LLM inference via Ollama delivering personalized technical feedback on stroke mechanics and bowling variations.
  - Real-time Firestore synchronization for drill logs and athlete biometric telemetry.
  - Interactive performance analytics dashboards monitoring strike rates, wagon-wheel trajectories, and line-and-length accuracy.

### 2. Money Transfer System
- **Domain**: FinTech & Systems Security
- **Stack**: Python, SQL Ledger, Node.js, RBAC Security, JWT Authentication
- **Key Features**:
  - Atomic SQL-backed ledger ensuring ACID compliance and eliminating transaction loss.
  - Role-Based Access Control (RBAC) isolating standard account holders from administrative audit logs.
  - Parameterized queries and cryptographic token signing guarding against SQL injection and session hijacking.

### 3. AI & Data Analytics Pipeline
- **Domain**: Data Engineering & Predictive Machine Learning
- **Program**: AICTE × Shell × Edunet Foundation (*Skills4Future*)
- **Stack**: Python, Scikit-Learn, Pandas, NumPy, Data Pipelines, Supervised ML
- **Key Features**:
  - Automated data ingestion, cleaning, normalization, and statistical feature engineering.
  - Supervised predictive models benchmarked on industry-relevant energy and sustainability datasets.
  - Repeatable batch evaluation scripts calculating accuracy, precision, recall, and ROC-AUC curves.

### 4. Vulnerability Assessment & Network Scanner
- **Domain**: Offensive Security & System Hardening
- **Internship**: C-DAC, NOIDA (*MeitY Cyber Gyan Project*)
- **Stack**: Linux Hardening, Network Scanning, Python, Threat Analysis, Security Audit
- **Key Features**:
  - Automated service enumeration and port scanning across simulated enterprise networks.
  - Scripted vulnerability assessment identifying misconfigurations, unpatched daemons, and potential exploit vectors.
  - Generation of structured audit reports with actionable remediation strategies for enterprise infrastructure defense.

---

## 📜 Verified Credentials & Industry Experience

### Professional Internships
1. **C-DAC, NOIDA · MeitY Cyber Gyan Project** *(Jun – Aug 2025)*
   - *Role*: Ethical Hacking & Penetration Testing Intern
   - *Deliverables*: Vulnerability assessments, network scanning, threat intelligence, and Linux security hardening.
2. **AICTE × Shell × Edunet Foundation** *(Jun – Jul 2025)*
   - *Role*: AI & Data Analytics Intern (*Skills4Future Program*)
   - *Deliverables*: Python data transformation pipelines, exploratory data analysis, and predictive model benchmarking.

### Verified Certifications
- **CS50x: Introduction to Computer Science** — *Harvard University* (Algorithms, Memory Management, C, Python, SQL, Data Structures)
- **Ethical Hacking & Penetration Testing** — *C-DAC, NOIDA / MeitY* (Vulnerability Scanning, Offensive Security, Network Hardening)
- **AI & Data Analytics** — *AICTE × Shell × Edunet Foundation* (Supervised ML, Scikit-Learn, Pandas, Pipelines)

---

## 📂 Folder & File Structure

```
├── .env.example              # Sample environment variables (GEMINI_API_KEY, APP_URL)
├── index.html                # HTML entry point with typography preconnects & SEO meta tags
├── metadata.json             # Applet metadata, frame permissions, and capabilities
├── package.json              # Project dependencies, scripts, and build pipeline
├── server.ts                 # Full-stack Node.js + Express backend & Vite middleware
├── tsconfig.json             # TypeScript compiler settings & alias mappings
├── vite.config.ts            # Vite configuration with Tailwind CSS v4 plugin
├── public/                   # Static assets & icons
└── src/
    ├── main.tsx              # Application mount point (React StrictMode)
    ├── App.tsx               # Root container, Lenis setup, and section layouts
    ├── index.css             # Tailwind v4 directives, custom font imports & glass utilities
    ├── components/
    │   ├── Navbar.tsx             # Floating glass navigation bar with scroll spy
    │   ├── HeroSection.tsx        # Hero banner, action CTAs, and social links
    │   ├── AboutSection.tsx       # Bio, educational record, and verified credentials
    │   ├── ExperienceAndSkills.tsx# Internships timeline & technical competencies bento
    │   ├── ProjectsSection.tsx    # Filterable project list & system architecture modal
    │   ├── ContactSection.tsx     # Direct message form, social cards & hiredev easter egg
    │   ├── ResumeModal.tsx        # In-browser resume viewer with Print & Download options
    │   ├── CertificateModal.tsx   # Verified credential inspector & copyable links
    │   ├── CustomCursor.tsx       # Lerp-smoothed magnetic cursor with dynamic labels
    │   ├── SilkBackground.tsx     # 2D Canvas procedural noise & sinusoidal shader
    │   ├── GlassFilter.tsx        # SVG displacement filter for authentic glass refraction
    │   └── FadeIn.tsx             # Scroll-triggered entrance animation wrapper
    └── utils/
        └── audio.ts               # Zero-dependency Web Audio API synthesizer
```

---

## 💻 Local Development & Setup Guide

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **bun** / **yarn** / **pnpm**

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lalityadavv22/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   *(Optional: Set `GEMINI_API_KEY` if running AI logic, or leave default for portfolio presentation)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000` to interact with the live application.

---

## 📦 Production Build & Deployment

To generate an optimized, production-ready build:

```bash
npm run build
```

This single command executes a two-stage build pipeline:
1. **Frontend Compilation**: `vite build` bundles the React 19 app, minifies CSS via Tailwind v4, and generates static assets inside the `dist/` directory.
2. **Backend Bundling**: `esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs` compiles the Express server into a standalone CommonJS bundle.

To start the production server:
```bash
npm start
```
The server will boot from `dist/server.cjs` and serve the optimized application on port `3000`.

---

## 🎯 Interview Defense Guide (Q&A for Recruiters)

When discussing this project during technical interviews, use these concise, engineering-focused talking points:

### Q1: Why did you build a custom Express server instead of deploying a static frontend?
> *"By implementing an Express backend alongside Vite, I established a clean full-stack architecture. The server acts as a secure API gateway that validates contact inquiries, isolates environment keys, and provides a health check endpoint (`/api/health`), preventing sensitive logic or API keys from ever leaking to the browser."*

### Q2: How does the procedural audio work without external audio files?
> *"Instead of loading static MP3 or WAV files—which cause network latency and memory overhead—I engineered a custom `SoundController` using the browser's native Web Audio API. When an element is hovered or clicked, an `OscillatorNode` generates a mathematical sine wave with an exponential gain decay curve. It weighs virtually 0 bytes and executes with zero latency."*

### Q3: How do you achieve the smooth scrolling and animation performance?
> *"The app combines Lenis for inertial physics with GSAP ScrollTrigger for element reveals. Instead of running separate requestAnimationFrame loops that cause micro-stutters, I unified them by passing Lenis's frame updates directly to GSAP's internal ticker with lag smoothing enabled, ensuring consistent 60fps performance."*

### Q4: What was the architectural rationale behind the Money Transfer System project?
> *"In the Money Transfer System, data integrity was paramount. I designed an atomic SQL ledger requiring double-entry balance verification. By wrapping balance updates in ACID-compliant transactions, we eliminate race conditions, double-spending, and transaction loss. I also integrated Role-Based Access Control (RBAC) to ensure administrative separation."*

### Q5: How does CrickAI utilize local LLMs?
> *"CrickAI uses Ollama for local LLM inference rather than relying purely on cloud-hosted models. This minimizes latency and cost, allowing athletes and coaches to receive immediate technical breakdowns of stroke mechanics and bowler action telemetry. The data is synchronized across devices in real-time using Firebase Firestore."*

---

## 📄 License & Credits

- **Author**: [Lalit Yadav](https://github.com/lalityadavv22)
- **License**: Apache-2.0
- Built with focus, discipline, and attention to detail.
