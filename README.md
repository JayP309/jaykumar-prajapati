# Jay Prajapati — Mechanical Engineer Portfolio

> A personal portfolio built to showcase engineering projects, CAD models, fluid simulations (CFD), structural finite element analyses (FEA), and professional qualifications.

**Live stack:** React · Vite · Tailwind CSS · Framer Motion · GSAP · Lucide Icons

---

## ✨ Features

- **Interactive 3D Carousel** — drag-to-rotate featured projects gallery on the homepage
- **Liquid Glass Navbar** — frosted-glass navigation bar with theme controls
- **Light & Dark Themes** — custom CSS variable-based styling, defaulting to dark mode
- **Dedicated Project Gallery** — comprehensive engineering case studies with filter controls (Professional, Personal, Academic)
- **Dedicated Certifications Gallery** — grid of qualifications (Revit MEP, Lean Six Sigma, HVAC, IIoT, AutoCAD, etc.) with credential verification links

---

## 🗂️ Project Structure

```
src/
├── App.jsx                  # Root — page state routing + ambient blobs + theme controls
├── index.css                # Design tokens (dark/light), glass utility classes, button styles
├── components/
│   ├── Navbar.jsx           # Theme toggle + page navigation links
│   ├── Hero.jsx             # Animated name, photo card, resume download
│   ├── About.jsx            # Bio story + interactive credentials card
│   ├── Skills.jsx           # Tools metrics (ANSYS, SolidWorks, CREO, etc.)
│   ├── Experience.jsx       # Timeline of professional experience (Zachry, etc.)
│   ├── Projects.jsx         # 3D Rotating Carousel summary
│   ├── Contact.jsx          # Contact information
│   └── Footer.jsx           # Clean footer with back-to-top
└── pages/
    ├── ProjectsPage.jsx     # Detailed project cases (FEA, CFD, CAD, HAZOP)
    └── CertificationsPage.jsx # Gallery of professional certifications & verification links
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Projects Showcased

| # | Project | Category | Tools |
|---|---------|----------|-------|
| 01 | Fitness-for-Service Assessment | Professional | ANSYS, APDL, API 579 |
| 02 | SIFs for Non-Standard Piping | Professional | ANSYS, ASME B31.3/B31J |
| 03 | Bottom Flange Coke Drum Analysis | Professional | ANSYS Workbench, Thermal Transient |
| 04 | Catalyst Beds & Outlet Screens | Professional | ASME BPVC VIII, Limit Load FEA |
| 05 | Anchor Bolt Dynamic Analysis | Professional | Vibration Analysis, Dynamics |
| 06 | Aerodynamic Analysis of 3D Wing | Academic | ANSYS Fluent, Python, MATLAB |
| 07 | CFD Analysis of NACA 4412 Airfoil | Academic | ANSYS Fluent, Grid Convergence |
| 14 | Jet Noise Reduction (Chevron Nozzle) | Personal | ANSYS Fluent CFD, SolidWorks |
| 15 | Heat Transfer in Rectangular Channel | Personal | ANSYS Fluent, Flow Dynamics |

---

## 📄 License

Personal portfolio — all content belongs to **Jay Prajapati**.
