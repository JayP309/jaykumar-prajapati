import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── FONT & UTILS ─────────────────────────────────────────────────────────────
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
  
  .project-card-title {
    color: #0f172a !important;
    transition: color 0.2s ease-in-out;
  }
  .project-card-title.has-link:hover {
    color: #0ea5e9 !important;
  }
`;

// ─── SVG ILLUSTRATIONS FOR MECHANICAL/FEA/CFD PROJECTS ───────────────────────

// 1. Professional: FFS Assessment (Pressure Vessel / Coker)
const FFSIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <defs>
      <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e293b"/>
        <stop offset="50%" stopColor="#334155"/>
        <stop offset="100%" stopColor="#0f172a"/>
      </linearGradient>
      <radialGradient id="stressHeat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
        <stop offset="60%" stopColor="#eab308" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
      </radialGradient>
    </defs>
    {/* Grid Background */}
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />
      ))}
    </g>
    {/* Vessel Shell */}
    <rect x="230" y="60" width="80" height="200" rx="40" fill="url(#vesselGrad)" stroke="#475569" strokeWidth="2"/>
    <rect x="230" y="100" width="80" height="120" fill="url(#vesselGrad)" stroke="none"/>
    <line x1="230" y1="100" x2="310" y2="100" stroke="#475569" strokeWidth="1" strokeDasharray="2 2"/>
    <line x1="230" y1="220" x2="310" y2="220" stroke="#475569" strokeWidth="1" strokeDasharray="2 2"/>
    
    {/* Flanges & Nozzles */}
    <rect x="210" y="130" width="20" height="12" fill="#475569" rx="1"/>
    <rect x="310" y="170" width="20" height="12" fill="#475569" rx="1"/>
    
    {/* FEA Stress Contour Overlay (Distortion / Damage zone) */}
    <circle cx="270" cy="140" r="35" fill="url(#stressHeat)" />
    <path d="M 240 135 Q 270 160 300 135" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2"/>
    
    {/* Labels / Dimensions */}
    <text x="340" y="145" fill="#ef4444" fontSize="10" fontFamily="monospace">API 579 Level 3 FFS</text>
    <text x="340" y="160" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Max Distortion Zone</text>
    <text x="110" y="138" fill="#38bdf8" fontSize="9" fontFamily="monospace">Coker Drum Shell</text>
    <line x1="190" y1="135" x2="225" y2="135" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#arrow)"/>
    
    {/* Tech HUD */}
    <rect x="20" y="20" width="160" height="45" rx="4" fill="rgba(15,23,42,0.8)" stroke="#1e293b"/>
    <text x="30" y="35" fill="#38bdf8" fontSize="9" fontFamily="monospace">ANSYS Mechanical APDL</text>
    <text x="30" y="50" fill="#34d399" fontSize="8" fontFamily="monospace">STATUS: STRUCTURALLY SAFE</text>
  </svg>
);

// 2. Professional: SIFs (Stress Intensification Factors - Piping)
const SIFsIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Jacketed Pipe Cross Concept */}
    {/* Outer jacket */}
    <rect x="120" y="140" width="300" height="60" fill="none" stroke="#64748b" strokeWidth="3" rx="4"/>
    <rect x="240" y="60" width="60" height="220" fill="none" stroke="#64748b" strokeWidth="3" rx="4"/>
    
    {/* Inner core process pipe */}
    <line x1="100" y1="170" x2="440" y2="170" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round"/>
    <line x1="270" y1="40" x2="270" y2="300" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round"/>

    {/* Stress Concentration Hotspots (Intersection) */}
    <circle cx="240" cy="140" r="16" fill="rgba(239, 68, 68, 0.4)" filter="blur(2px)"/>
    <circle cx="300" cy="140" r="16" fill="rgba(239, 68, 68, 0.4)" filter="blur(2px)"/>
    <circle cx="240" cy="200" r="16" fill="rgba(239, 68, 68, 0.4)" filter="blur(2px)"/>
    <circle cx="300" cy="200" r="16" fill="rgba(239, 68, 68, 0.4)" filter="blur(2px)"/>

    {/* FEA Mesh Indicator overlay */}
    <path d="M 230 130 L 250 130 L 250 150 L 230 150 Z M 220 120 L 230 130 M 250 130 L 260 120" stroke="#10b981" strokeWidth="0.8" opacity="0.6"/>

    <text x="340" y="100" fill="#f43f5e" fontSize="10" fontFamily="monospace">B31.3 Stress Concentration</text>
    <text x="340" y="115" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Non-standard Jacketed Cross</text>
    <text x="35" y="300" fill="#10b981" fontSize="9" fontFamily="monospace">ASME B31J FEA Calibration Model</text>
  </svg>
);

// 3. Professional: Coke Drum Bottom Flange
const FlangeIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Bottom Flange Section View */}
    <path d="M 150 100 L 150 180 L 180 220 L 360 220 L 390 180 L 390 100" fill="none" stroke="#475569" strokeWidth="3"/>
    
    {/* Clamping Flange Rings */}
    <rect x="130" y="180" width="50" height="25" fill="#334155" stroke="#64748b" strokeWidth="1.5"/>
    <rect x="360" y="180" width="50" height="25" fill="#334155" stroke="#64748b" strokeWidth="1.5"/>
    
    {/* Bolting system */}
    <line x1="155" y1="170" x2="155" y2="215" stroke="#e2e8f0" strokeWidth="4"/>
    <line x1="385" y1="170" x2="385" y2="215" stroke="#e2e8f0" strokeWidth="4"/>

    {/* Thermal transient fatigue overlay */}
    <path d="M 180 220 Q 270 235 360 220" stroke="#f59e0b" strokeWidth="3" fill="none" strokeDasharray="3 3"/>
    <circle cx="270" cy="225" r="25" fill="rgba(239,68,68,0.35)" filter="blur(4px)"/>

    <text x="270" y="70" textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="monospace">THERMAL TRANSIENT STRESS</text>
    <text x="270" y="85" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Coke Drum Cyclic Startup Loading</text>
    <text x="35" y="305" fill="#38bdf8" fontSize="9" fontFamily="monospace">API 579 Elastic-Plastic Analysis</text>
  </svg>
);

// 4. Professional: Differential Pressure Catalyst Screens
const CatalystIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Reactor Catalyst Bed Layout */}
    <rect x="180" y="50" width="180" height="240" fill="none" stroke="#475569" strokeWidth="2" rx="10"/>
    
    {/* Screens & Beds */}
    <rect x="182" y="130" width="176" height="15" fill="rgba(148,163,184,0.2)" stroke="#64748b" strokeWidth="1" strokeDasharray="4 2"/>
    <rect x="182" y="210" width="176" height="15" fill="rgba(148,163,184,0.2)" stroke="#64748b" strokeWidth="1" strokeDasharray="4 2"/>
    
    {/* Flows */}
    <path d="M 270 20 L 270 45" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)"/>
    <path d="M 270 280 L 270 305" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow)"/>

    {/* Delta P Curves */}
    <path d="M 200 90 Q 230 115 270 120 T 340 90" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
    <text x="270" y="105" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">Pressure Gradient: dP</text>

    <text x="35" y="90" fill="#38bdf8" fontSize="9" fontFamily="monospace">Inlet Flow</text>
    <text x="35" y="250" fill="#ef4444" fontSize="9" fontFamily="monospace">Outlet Screen Loading</text>
    <text x="375" y="140" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Catalyst Grid Support</text>
  </svg>
);

// 5. Professional: Anchor Bolt Dynamic Analysis
const AnchorBoltIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Foundation & Bolt */}
    <rect x="120" y="200" width="300" height="90" fill="#334155" stroke="#475569" strokeWidth="2" rx="4"/>
    <rect x="220" y="80" width="100" height="120" fill="#1e293b" stroke="#64748b" strokeWidth="2"/>
    
    {/* Anchor bolt inside sleeve */}
    <rect x="260" y="120" width="20" height="150" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1.5"/>
    <circle cx="270" cy="110" r="14" fill="#64748b"/>
    <rect x="250" y="112" width="40" height="10" fill="#475569" rx="1"/>

    {/* Vibration sine wave overlay */}
    <path d="M 140 100 Q 170 60 200 100 T 260 100 T 320 100" stroke="#f43f5e" strokeWidth="2" fill="none" opacity="0.8"/>
    
    <text x="330" y="95" fill="#f43f5e" fontSize="9" fontFamily="monospace">Resonant Freq: 24.5 Hz</text>
    <text x="330" y="110" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Structural Fatigue Risk</text>
    <text x="35" y="310" fill="#38bdf8" fontSize="9" fontFamily="monospace">Foundation Dynamic Analysis</text>
  </svg>
);

// 6. College: Aerodynamic 3D Wing
const WingIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* 3D Isometric Wing Profile */}
    <path d="M 120 190 Q 220 110 320 190 Z" fill="rgba(14,165,233,0.15)" stroke="#0ea5e9" strokeWidth="2.5"/>
    <path d="M 320 190 L 400 130 Q 320 70 220 130 L 120 190 Z" fill="rgba(14,165,233,0.08)" stroke="#38bdf8" strokeWidth="1" opacity="0.6"/>

    {/* Streamline wind flows */}
    <path d="M 40 160 Q 150 90 320 140 T 480 180" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 5"/>
    <path d="M 40 220 Q 150 200 320 200 T 480 210" fill="none" stroke="#10b981" strokeWidth="1.5"/>

    {/* Vortices at tip */}
    <path d="M 400 130 C 430 110 440 80 410 80 C 390 80 380 110 400 130" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
    <text x="420" y="70" fill="#ef4444" fontSize="9" fontFamily="monospace">Tip Vortex</text>

    <text x="35" y="50" fill="#38bdf8" fontSize="10" fontFamily="monospace">ANSYS Fluent 3D CFD</text>
    <text x="35" y="310" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Prandtl Lifting Line Theory validation</text>
  </svg>
);

// 7. College: NACA 4412 Airfoil
const AirfoilIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Airfoil shape */}
    <path d="M 100 180 C 130 120 280 110 440 180 C 280 200 130 210 100 180 Z" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2.5"/>

    {/* C-mesh grid lines */}
    <path d="M 70 180 A 30 30 0 0 1 130 180" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8"/>
    <path d="M 50 180 A 50 50 0 0 1 150 180" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="0.8"/>
    <line x1="100" y1="180" x2="440" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>

    {/* Velocity vectors */}
    {[[60,140],[180,110],[300,120],[400,145]].map(([x,y], i)=>(
      <path key={i} d={`M ${x} ${y} L ${x+25} ${y-3}`} stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    ))}

    <text x="40" y="300" fill="#10b981" fontSize="9" fontFamily="monospace">NACA 4412 Meshing: 120k Nodes</text>
    <text x="40" y="315" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">Grid Independence Index &lt; 0.5%</text>
  </svg>
);

// 8. Personal: HVAC Revit System
const HVACIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Office Floor boundary */}
    <rect x="80" y="60" width="380" height="220" fill="none" stroke="#475569" strokeWidth="2" rx="4"/>
    
    {/* Duct routing Supply (Blue) and Return (Red) */}
    <path d="M 90 90 L 360 90 L 360 200 L 440 200" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinejoin="round"/>
    <path d="M 90 120 L 330 120 L 330 230 L 440 230" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinejoin="round"/>

    {/* VAV Box Diffusers */}
    {[[160,90],[260,90],[360,150]].map(([x,y], i)=>(
      <g key={i}>
        <rect x={x-10} y={y-10} width="20" height="20" fill="#64748b" stroke="#cbd5e1" strokeWidth="1"/>
        <line x1={x-10} y1={y-10} x2={x+10} y2={y+10} stroke="#94a3b8" strokeWidth="0.8"/>
        <line x1={x+10} y1={y-10} x2={x-10} y2={y+10} stroke="#94a3b8" strokeWidth="0.8"/>
      </g>
    ))}

    <text x="95" y="45" fill="#38bdf8" fontSize="10" fontFamily="monospace">Revit MEP Coordinated Layout</text>
    <text x="35" y="310" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">ASHRAE 90.1 / Multi-Zone VAV Routing</text>
  </svg>
);

// 9. Personal: HAZOP Flow loops
const HAZOPIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* P&ID process flow logic */}
    <rect x="80" y="110" width="110" height="120" fill="none" stroke="#475569" strokeWidth="2" rx="4"/>
    <rect x="350" y="110" width="110" height="120" fill="none" stroke="#475569" strokeWidth="2" rx="4"/>
    
    {/* Connecting Piping */}
    <path d="M 190 170 L 350 170" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrow)"/>
    
    {/* Control Valve and bypass */}
    <rect x="250" y="155" width="30" height="30" fill="#334155" stroke="#cbd5e1" strokeWidth="1"/>
    <line x1="250" y1="155" x2="280" y2="185" stroke="#ef4444" strokeWidth="1.5"/>
    <line x1="280" y1="155" x2="250" y2="185" stroke="#ef4444" strokeWidth="1.5"/>

    {/* Hazard Node Indicator */}
    <circle cx="265" cy="170" r="28" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4"/>
    <text x="265" y="135" textAnchor="middle" fill="#f43f5e" fontSize="9" fontFamily="monospace">NODE 1: RECOVERY LINES</text>

    <text x="35" y="70" fill="#10b981" fontSize="10" fontFamily="monospace">HAZOP Process Safeguards</text>
    <text x="35" y="310" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Sulphur Recovery Unit · Deviation Analysis</text>
  </svg>
);

// 10. Personal: Shock Absorber FEA
const ShockIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Spring Coils */}
    <path d="M 270 60 Q 230 85 270 110 Q 310 135 270 160 Q 230 185 270 210 Q 310 235 270 260" fill="none" stroke="#64748b" strokeWidth="8" strokeLinecap="round"/>
    
    {/* Inner Dampener Shaft */}
    <rect x="262" y="50" width="16" height="240" fill="#e2e8f0" stroke="#475569" strokeWidth="1"/>

    {/* PSD Acceleration response plot overlay */}
    <path d="M 40 280 L 100 240 L 120 270 L 140 180 L 160 280" fill="none" stroke="#f43f5e" strokeWidth="1.5"/>
    <text x="40" y="160" fill="#f43f5e" fontSize="8" fontFamily="monospace">PSD: g²/Hz</text>

    <text x="330" y="70" fill="#38bdf8" fontSize="10" fontFamily="monospace">ANSYS Workbench</text>
    <text x="330" y="85" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif">Random Vibration</text>
    <text x="330" y="100" fill="#eab308" fontSize="8" fontFamily="monospace">Range: 5–50 Hz</text>
  </svg>
);

// 11. Personal: Engine / CAD assemblies
const CADIllustration = () => (
  <svg viewBox="0 0 540 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-950">
    <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
      {Array.from({ length: 18 }).map((_, i) => <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="340" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="0" y1={i * 30} x2="540" y2={i * 30} />)}
    </g>
    {/* Piston & Crank assembly representation */}
    <circle cx="270" cy="220" r="50" fill="none" stroke="#475569" strokeWidth="2"/>
    <rect x="255" y="70" width="30" height="60" fill="#334155" stroke="#64748b" strokeWidth="2" rx="2"/>
    <line x1="270" y1="130" x2="270" y2="185" stroke="#cbd5e1" strokeWidth="4"/>
    <circle cx="270" cy="185" r="8" fill="#e2e8f0"/>

    <text x="350" y="80" fill="#38bdf8" fontSize="10" fontFamily="monospace">SolidWorks CAD</text>
    <text x="350" y="95" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Full Assembly Constraints</text>
    <text x="350" y="110" fill="#10b981" fontSize="8" fontFamily="monospace">GD&T Engineering Drawings</text>
  </svg>
);

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
const projects = [
  {
    number: "01",
    title: "Fitness-for-Service Assessment of Refinery Pressure Equipment",
    subtitle: "Mechanical Integrity · API 579-1 Level 3 FFS",
    category: "Professional Projects",
    color: "#0284c7",
    accent: "#0369a1",
    description: "Developed detailed 3D geometric models of refinery pressure vessels (including a Vacuum Tower and Coker Main Fractionator) and performed finite element analysis (FEA) simulations for Fitness-for-Service (FFS). Integrated inspection data, including measured wall thickness profiles and calculated corrosion rates, to evaluate local thin areas and structural margins.",
    outcome: "Successfully ran elastic-plastic FEA simulations under operating conditions, demonstrating structural code compliance in accordance with API 579-1 / ASME FFS-1 requirements. Compiled and submitted a comprehensive engineering assessment report for regulatory and client engineering review to justify continued safe operation.",
    challenge: "Modeling cyclic temperature profiles and resolving geometric scan distortions to accurately calculate local stress intensities.",
    impact: "Established structural integrity verification enabling continued safe operation and avoiding costly unscheduled shutdowns.",
    tools: ["ANSYS Mechanical", "APDL", "API 579-1", "ASME Section VIII", "Fitness-for-Service"],
    Illustration: FFSIllustration,
    stats: [{ val: "Level 3", label: "FFS Class" }, { val: "2", label: "Refinery Vessels" }, { val: "ASME VIII", label: "Design Code" }],
  },
  {
    number: "02",
    title: "Stress Intensification Factors (SIFs) for Non-Standard Piping Components",
    subtitle: "Piping Stress Analysis · Custom Finite Element Analysis",
    category: "Professional Projects",
    color: "#0f766e",
    accent: "#115e59",
    description: "Conducted Finite Element Analysis (FEA) to determine Stress Intensification Factors (SIFs) and flexibility factors for two jacketed pipe cross configurations. This special engineering assessment was required because SIF values for these specific jacketed cross geometries are not defined or presented in the standard ASME B31J tables.",
    outcome: "Calculated precise fatigue-based stress intensification factors using custom-developed ANSYS models. Generated design specification and calculation reports that were accepted by client engineering teams and registered in compliance with ABSA AB-520 regulatory requirements.",
    challenge: "Modeling the complex mechanical interactions and load-sharing behaviour between the inner core process pipe and the outer jacket shell at the overlapping intersections.",
    impact: "Provided validated engineering inputs that allowed the design team to complete piping stress analysis without overly conservative piping redesigns.",
    tools: ["ANSYS APDL", "ASME B31.3", "ASME B31J", "ABSA AB-520", "Finite Element Method"],
    Illustration: SIFsIllustration,
    stats: [{ val: "B31J", label: "Evaluation Code" }, { val: "AB-520", label: "ABSA Reg" }, { val: "FEA", label: "Methodology" }],
  },
  {
    number: "03",
    title: "Bottom Flange Design & Mechanical Analysis of a Coke Drum",
    subtitle: "Cyclic Load Assessment · Thermal Transient FEA",
    category: "Professional Projects",
    color: "#d97706",
    accent: "#b45309",
    description: "Evaluated the thermal and mechanical behavior of a coke drum bottom flange and nozzle assembly subjected to cyclic startup and quench temperatures. Processed field thermography inspection data to establish realistic boundary conditions and performed a thickness sensitivity study evaluating 5-inch, 6-inch, and 7-inch flange geometries under transient thermal stresses.",
    outcome: "Identified the optimal flange thickness that minimizes peak transient stress indices while maintaining pressure boundary integrity. Documented the FEA results and engineering calculations in a formal technical report submitted for capital project and maintenance review.",
    challenge: "Simulating localized thermal shock temperature distributions during water quenching and capturing non-linear gasket seating stress behaviors.",
    impact: "Guided critical long-term capital repair planning, preventing potential flange leaks or bolting failures due to low-cycle fatigue.",
    tools: ["ANSYS Workbench", "ASME BPVC Div 2", "Thermal Transient", "Fatigue Analysis", "Thermography Input"],
    Illustration: FlangeIllustration,
    stats: [{ val: "Cyclic", label: "Load Type" }, { val: "5-7 in", label: "Sensitivity Range" }, { val: "API 579", label: "Assess Std" }],
  },
  {
    number: "04",
    title: "Differential Pressure Assessment of Catalyst Beds & Outlet Screens",
    subtitle: "Process Equipment · Mechanical Design Optimization",
    category: "Professional Projects",
    color: "#65a30d",
    accent: "#4d7c0f",
    description: "Performed a mechanical integrity assessment and Finite Element-based Limit Load Analysis for reactor internal components, focusing on the catalyst support beds and the outlet collector (specifically the 'elephant stool') design under extreme differential pressure (dP) operating loads.",
    outcome: "Determined the safe allowable operating limits and maximum load capacity for the catalyst beds and elephant stool. Developed engineering recommendations to prevent mechanical collapse during process upsets.",
    challenge: "Modeling complex pressure drop distributions across porous media and structural support geometries under transient flow conditions.",
    impact: "Safeguarded the reactor internals from structural failure, avoiding catalyst migration and process contamination.",
    tools: ["Mechanical Design", "ASME BPVC VIII", "Limit Load FEA", "Stress Verification"],
    Illustration: CatalystIllustration,
    stats: [{ val: "Limit Load", label: "Analysis Type" }, { val: "ASME VIII", label: "Reference" }, { val: "Elephant Stool", label: "Component" }],
  },
  {
    number: "05",
    title: "Anchor Bolt Dynamic & Resonance Analysis",
    subtitle: "Vibration Engineering · Structural Reliability",
    category: "Professional Projects",
    color: "#dc2626",
    accent: "#b91c1c",
    description: "Conducted vibration and structural resonance evaluations for anchor bolt connection systems on critical rotating machinery foundations. Analyzed field-measured vibration velocity data to assess dynamic loading conditions and long-term fatigue risk under operating frequencies.",
    outcome: "Calculated dynamic stress amplitudes and identified modal resonance conditions relative to machine speed. Delivered reliability evaluations and torque tightening guidelines to prevent looseness or fatigue failures.",
    challenge: "Processing complex transient frequency spectra and correlating foundation velocity data with local bolt pretension stresses.",
    impact: "Prevented anchor bolt failures, ensuring structural stability and minimizing equipment downtime.",
    tools: ["Vibration Analysis", "Velocity Data", "Modal Analysis", "Structural Dynamics"],
    Illustration: AnchorBoltIllustration,
    stats: [{ val: "Velocity", label: "Analysis Input" }, { val: "Modal", label: "FEA Mode" }, { val: "Dynamic", label: "Fatigue Class" }],
  },
  {
    number: "06",
    title: "Aerodynamic Analysis of Finite Span 3D Wing Performance",
    subtitle: "Aerospace Engineering · Computational Fluid Dynamics",
    category: "Academic Projects",
    color: "#2563eb",
    accent: "#1d4ed8",
    description: "Executed complete 3D CFD analysis and mesh convergence validation of a finite wing assembly to evaluate Lift/Drag distributions, using Fluent solvers and Python/MATLAB scripts for post-processing.",
    outcome: "Successfully validated CFD lift curves against classical Prandtl Lifting Line theory with excellent agreement.",
    challenge: "Capturing wingtip trailing vortices and boundary layer separation accurately.",
    impact: "Demonstrated advanced aerospace grid independence methodology and computational aerodynamic modeling.",
    tools: ["ANSYS Fluent", "Python", "MATLAB", "3D CFD", "Mesh Grid Study"],
    Illustration: WingIllustration,
    stats: [{ val: "3D CFD", label: "Simulation" }, { val: "Prandtl", label: "Theory Val" }, { val: "Lift/Drag", label: "Core Output" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_aerodynamics-cfd-finitespanwing-activity-7300952489443434497-08Zf",
    images: [
      import.meta.env.BASE_URL + 'assets/Picture1.png',
      import.meta.env.BASE_URL + 'assets/Picture2.png',
      import.meta.env.BASE_URL + 'assets/Picture3.png',
      import.meta.env.BASE_URL + 'assets/Picture4.png',
      import.meta.env.BASE_URL + 'assets/Picture5.png',
      import.meta.env.BASE_URL + 'assets/Picture6.png',
      import.meta.env.BASE_URL + 'assets/Picture7.png',
      import.meta.env.BASE_URL + 'assets/Picture8.png',
      import.meta.env.BASE_URL + 'assets/Picture9.png'
    ]
  },
  {
    number: "07",
    title: "CFD Analysis of NACA 4412 Airfoil",
    subtitle: "Fluid Mechanics · Grid Independence Study",
    category: "Academic Projects",
    color: "#0d9488",
    accent: "#0f766e",
    description: "Conducted systematic aerodynamic fluid simulations on a NACA 4412 cambered airfoil inside a virtual wind tunnel, running adaptive refinement grids to assess drag and stall angles.",
    outcome: "Obtained grid-independent lift coefficient data confirming drag rise boundaries across varying angles of attack.",
    challenge: "Calibrating turbulence models (SST k-omega vs Sp-Al) near trans-sonic flow speed transition.",
    impact: "Produced highly accurate aerodynamic performance datasets validating NACA experimental wind tunnel baselines.",
    tools: ["ANSYS Fluent", "Turbulence Modeling", "Grid Convergence", "Aerodynamic Lift"],
    Illustration: AirfoilIllustration,
    stats: [{ val: "NACA 4412", label: "Profile" }, { val: "SST k-w", label: "Turbulence" }, { val: "120K+", label: "Mesh Nodes" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_cfd-aerodynamics-engineering-activity-7301811668550856706-MpND",
    images: [
      import.meta.env.BASE_URL + 'assets/media__1781900717132.jpg',
      import.meta.env.BASE_URL + 'assets/media__1781898814659.png'
    ]
  },
  {
    number: "08",
    title: "Energy-Efficient HVAC System Design for Commercial Spaces",
    subtitle: "Building Services · Revit MEP Layout",
    category: "Personal Projects",
    color: "#2563eb",
    accent: "#1d4ed8",
    description: "Designed a multi-zone HVAC system layout in Revit MEP for multi-storey office and retail buildings. Performed full building heating and cooling load estimations following ASHRAE 90.1 standard procedures.",
    outcome: "Produced coordinated 3D CAD model layouts detailing duct paths, VAV diffusers, and primary mechanical chiller/boiler system connections.",
    challenge: "Optimizing duct routing configurations to avoid structural interference in tight ceiling spaces.",
    impact: "Established a design yielding a simulated 15% reduction in yearly electrical fan energy consumption.",
    tools: ["Revit MEP", "HVAC Design", "ASHRAE 90.1", "Thermal Load Calc", "BIM Coordination"],
    Illustration: HVACIllustration,
    stats: [{ val: "Revit MEP", label: "Software" }, { val: "ASHRAE", label: "Standard" }, { val: "15%", label: "Energy Saved" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_hvacdesign-mechanicalengineering-learningjourney-ugcPost-7308550562596237315-Dxny",
    images: [
      import.meta.env.BASE_URL + 'assets/media__1781900895658.jpg',
      import.meta.env.BASE_URL + 'assets/media__1781900895650.jpg'
    ]
  },
  {
    number: "09",
    title: "HAZOP Analysis of Sulphur Recovery Unit",
    subtitle: "Process Safety · Risk Assessment & Hazard Mitigation",
    category: "Personal Projects",
    color: "#b91c1c",
    accent: "#991b1b",
    description: "Conducted systematic process hazard identification (HAZOP) for a refinery Sulphur Recovery Unit, defining potential process deviation guide-words, integrity risks, and design safeguards.",
    outcome: "Compiled a comprehensive risk matrix and HAZOP report providing safety barrier adjustments and interlock control recommendations.",
    challenge: "Evaluating complex multi-phase piping loops and identifying worst-case toxic gas release scenarios.",
    impact: "Enhanced overall operational safety loops by specifying additional alarm instrumentation points.",
    tools: ["HAZOP Method", "Process Safety", "P&ID Reading", "Risk Assessment"],
    Illustration: HAZOPIllustration,
    stats: [{ val: "SRU", label: "Unit Evaluated" }, { val: "HAZOP", label: "Framework" }, { val: "SIL-2", label: "Safety Level" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_processsafety-hazop-projectmanagement-activity-7324636037656326144-dBnA",
  },
  {
    number: "10",
    title: "Random Vibrational Analysis of a Shock Absorber",
    subtitle: "Structural FEA · Power Spectral Density (PSD) Loading",
    category: "Personal Projects",
    color: "#4f46e5",
    accent: "#3730a3",
    description: "Built a 3D solid-element FEA model of a heavy-duty shock absorber assembly in ANSYS, applying random Power Spectral Density (PSD) acceleration profiles across 5–50 Hz.",
    outcome: "Mapped von Mises stress distributions and directional displacement spectra to isolate structural fatigue vulnerability points.",
    challenge: "Achieving grid stability and accuracy at localized spring-to-shaft contact joints.",
    impact: "Proved dynamic stiffness values and isolated stress concentrations to guide component design improvements.",
    tools: ["ANSYS FEA", "Random Vibration", "PSD Loading", "Fatigue Analysis"],
    Illustration: ShockIllustration,
    stats: [{ val: "5-50 Hz", label: "PSD Range" }, { val: "von Mises", label: "Stress Metric" }, { val: "ANSYS", label: "Platform" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_random-vibrational-analysis-jay-prajapati-activity-7473476786862047232-W8oJ",
    images: [
      import.meta.env.BASE_URL + 'assets/shock_new_1.png',
      import.meta.env.BASE_URL + 'assets/shock_new_2.png',
      import.meta.env.BASE_URL + 'assets/shock_new_3.png',
      import.meta.env.BASE_URL + 'assets/shock_new_4.png',
      import.meta.env.BASE_URL + 'assets/shock_new_5.png'
    ]
  },
  {
    number: "11",
    title: "3D CAD Model of a 4-Cylinder Engine Assembly",
    subtitle: "Parametric CAD modeling & Assembly Kinematics · SolidWorks",
    category: "Personal Projects",
    color: "#4f46e5",
    accent: "#3730a3",
    description: "Designed a fully constrained, high-fidelity 4-cylinder combustion engine assembly in SolidWorks. Set up detailed mate constraints (coincident, concentric, width, and gear relationships) to enable complete mechanical kinematic cycles of the pistons, connecting rods, and crankshaft.",
    outcome: "Completed detailed 3D CAD modeling, motion simulation animation, and manufacturing-ready 2D technical drawings annotated with ANSI standard Geometric Dimensioning and Tolerancing (GD&T) specifications.",
    challenge: "Defining complex kinematic gear and linkage constraints to model accurate valve timing and piston stroke limits without collision.",
    impact: "Established a production-quality parametric modeling workflow demonstrating part interference checks and dynamic assembly motion verification.",
    tools: ["SolidWorks", "Parametric Modeling", "CAD Kinematics", "GD&T Annotation", "Assembly Mates"],
    Illustration: CADIllustration,
    stats: [{ val: "SolidWorks", label: "CAD System" }, { val: "Dynamic", label: "Mates" }, { val: "GD&T", label: "Standard" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_solidworks-engineeringdesign-mechanicalengineering-activity-7302416331335733250-yL2l",
    videoUrl: import.meta.env.BASE_URL + 'assets/Assembly_Animation.mp4'
  },
  {
    number: "12",
    title: "3D CAD Model of Engine Blower",
    subtitle: "Parametric Airfoil Modeling & Performance Optimization · CREO",
    category: "Personal Projects",
    color: "#0891b2",
    accent: "#0e7490",
    description: "Developed a 3D parametric engine blower housing and impeller blade assembly using CREO Parametric, utilizing advanced lofting, sweep, and pattern features to define the complex aerodynamic blade shapes.",
    outcome: "Achieved a design optimization workflow demonstrating a simulated 15% increase in blower flow efficiency through parameter-driven modifications to impeller pitch angles and casing profiles.",
    challenge: "Modeling continuous-curvature transition surfaces between the blower inlet nozzle and the spiral discharge casing.",
    impact: "Showcased advanced parameter-driven part family configuration and aerodynamic casing geometry definition in CREO.",
    tools: ["CREO Parametric", "Impeller Design", "Surface Lofting", "Flow Optimization", "CAD Parameters"],
    Illustration: CADIllustration,
    stats: [{ val: "CREO", label: "CAD System" }, { val: "15%", label: "Flow Gain" }, { val: "Parametric", label: "Modeling" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_creo-mechanicaldesign-engineblower-activity-7303508858855899136-XrA0",
    videoUrl: import.meta.env.BASE_URL + 'assets/Engine_Blower.mp4'
  },
  {
    number: "13",
    title: "3D CAD Model of Bench Vise Assembly",
    subtitle: "Precision Assembly & Tolerancing · AutoCAD",
    category: "Personal Projects",
    color: "#475569",
    accent: "#334155",
    description: "Designed a precision mechanical bench vise clamping assembly inside AutoCAD. Modeled all individual components (base plate, sliding jaw, screw bar, handle, collar, and key) and grouped them using strict block alignments.",
    outcome: "Created production-ready 2D layouts and sectional drawings containing full dimensioning, bill of materials (BOM), and tolerance fits.",
    challenge: "Defining appropriate clearance fits and slide tolerances between the base frame guides and the moving jaw casting.",
    impact: "Built a complete blueprint-ready drafting package matching standard industrial assembly fits and configurations.",
    tools: ["AutoCAD 3D", "2D Drafting", "Clearance Fits", "BOM Creation", "Component Block"],
    Illustration: CADIllustration,
    stats: [{ val: "AutoCAD", label: "CAD System" }, { val: "Fits", label: "Tolerance Class" }, { val: "BOM", label: "Doc Spec" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_autocad-3dmodeling-mechanicalengineering-activity-7296754704766681088-dPDm",
    images: [
      import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120959.png',
      import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120232.png',
      import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120730.png',
      import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120749.png',
      import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120805.png'
    ]
  },
  {
    number: "14",
    title: "Jet Noise Reduction Analysis using a Chevron Nozzle",
    subtitle: "Acoustics & Aeroacoustics · ANSYS Fluent CFD",
    category: "Personal Projects",
    color: "#2563eb",
    accent: "#1d4ed8",
    description: "Conducted aeroacoustic simulations analyzing jet noise reduction using a chevron nozzle design. The geometric profile of the nozzle, including the sawtooth chevron serrations, was modeled in SolidWorks, and fluid-acoustic interactions were simulated using ANSYS Fluent.",
    outcome: "Evaluated Acoustic Power Level (dB) distributions and turbulent kinetic energy fields. Validated how the chevron shape induces mixing layers that dissipate energy, successfully reducing peak jet engine noise emissions.",
    challenge: "Resolving high-frequency sound wave propagation patterns and capturing fine-scale shear layer turbulence structures at the nozzle exit boundary.",
    impact: "Provided validated numerical models for acoustic design optimization, supporting aircraft environmental noise compliance standards.",
    tools: ["ANSYS Fluent", "CFD Acoustics", "SolidWorks", "Aeroacoustics", "Chevron Nozzle"],
    Illustration: WingIllustration,
    stats: [{ val: "Fluent", label: "Acoustic Solver" }, { val: "SolidWorks", label: "CAD System" }, { val: "dB", label: "Noise Metric" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_cfd-acoustics-jetnoise-activity-7314003365615542273-X1GT",
    images: [
      import.meta.env.BASE_URL + 'assets/chevron_nozzle_jet_noise.jpg'
    ]
  },
  {
    number: "15",
    title: "Heat Transfer & Flow Dynamics in a Rectangular Channel",
    subtitle: "ANSYS CFD Analysis · Thermal Convection & Flow Gradients",
    category: "Personal Projects",
    color: "#0d9488",
    accent: "#0f766e",
    description: "Investigated heat transfer mechanisms and water fluid dynamics inside a rectangular channel design using ANSYS CFD simulation models. Analyzed the flow behavior and heat distribution along the channel boundaries maintained at a constant 310 K temperature.",
    outcome: "Generated precise visual distributions mapping fluid velocity profiles, pressure drops, and heat dissipation gradients. Plotted temperature variations along the length of the channel confirming boundary layer convection mechanics.",
    challenge: "Defining accurate thermal boundary conditions at the inlet boundary and optimizing mesh grids to resolve thin boundary layers near the channel walls.",
    impact: "Established detailed visual fluid-thermal mapping to support thermal exchanger casing design optimizations.",
    tools: ["ANSYS Fluent", "CFD", "Heat Transfer", "Flow Dynamics", "Thermal Simulation"],
    Illustration: AirfoilIllustration,
    stats: [{ val: "Fluent", label: "Solver Engine" }, { val: "310 K", label: "Wall Temp" }, { val: "CFD", label: "Methodology" }],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_cfd-heattransfer-engineering-activity-7291233894811549696-VFuH",
    images: [
      import.meta.env.BASE_URL + 'assets/channel_heat_transfer_1.jpg',
      import.meta.env.BASE_URL + 'assets/channel_heat_transfer_2.jpg'
    ]
  },
  {
    number: "16",
    title: "Structural Stress & Boundary Condition Analysis of a Gantry Crane",
    subtitle: "Finite Element Analysis · Boundary Condition & Deflection Study",
    category: "Personal Projects",
    color: "#0284c7",
    accent: "#0369a1",
    description: "Performed a structural Finite Element Analysis (FEA) of a gantry crane structure to evaluate bending stresses and deflections under vertical load. Modeled the cross-beam using a W18×60 section and the supporting frame using HSS 80×80×5 members in SolidWorks. Evaluated boundary conditions using a pin-roller support configuration, allowing the frame to expand and deform naturally under loading rather than introducing artificial rigidity.",
    outcome: "Calculated a maximum bending stress of 86.81 MPa, resulting in a Factor of Safety of 2.88 against ASTM A36 steel yield strength. Determined a maximum vertical deflection of 6.84 mm at mid-span, which complies with standard serviceability limits (e.g. L/600).",
    challenge: "Determining the most realistic support configurations and boundary conditions to prevent artificial stress concentrations while allowing natural structural deformation.",
    impact: "Demonstrated the critical role of boundary conditions in structural modeling, providing a realistic stress distribution for design verification.",
    tools: ["SolidWorks FEA", "Structural Mechanics", "Boundary Conditions", "Stress Analysis", "Deflection Assessment"],
    Illustration: CatalystIllustration,
    stats: [
      { val: "86.81 MPa", label: "Max Bending Stress" },
      { val: "2.88", label: "Factor of Safety" },
      { val: "6.84 mm", label: "Mid-span Deflection" }
    ],
    linkedinUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_mechanicalengineering-finiteelementanalysis-activity-7481037256577912833-8sKD",
    images: [
      import.meta.env.BASE_URL + 'assets/media__1783618616876.png',
      import.meta.env.BASE_URL + 'assets/media__1783618616882.png',
      import.meta.env.BASE_URL + 'assets/media__1783618616887.png'
    ]
  }
];

// ─── TECH BADGE ──────────────────────────────────────────────────────────────
const TechBadge = ({ label, color }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
    style={{ fontFamily: "'DM Mono', monospace", color, borderColor: `${color}40`, backgroundColor: `${color}0f` }}>
    {label}
  </span>
);

// ─── STAT CHIP ───────────────────────────────────────────────────────────────
const StatChip = ({ val, label, color }) => (
  <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80">
    <span className="text-xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color }}>{val}</span>
    <span className="text-xs text-slate-500 mt-0.5 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
  </div>
);

// ─── PROJECT CARD ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, initialProjectNum }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;
  const { number, title, subtitle, category, color, accent, description, outcome, challenge, impact, tools, Illustration, stats, linkedinUrl, images, videoUrl } = project;

  useEffect(() => {
    if (initialProjectNum === number) {
      setExpanded(true);
      const timer = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [initialProjectNum, number]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden border border-white/60 shadow-lg backdrop-blur-sm"
      style={{
        background: 'rgba(255,255,255,0.52)',
        boxShadow: `0 8px 40px ${color}10, 0 2px 12px rgba(0,0,0,0.04)`,
      }}
    >


      <div className={`grid ${isEven ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}>
        {/* Illustration side */}
        <div className={`${isEven ? "order-1" : "order-2 md:order-2"} p-4 md:p-6`}>
          <div 
            onClick={() => linkedinUrl && window.open(linkedinUrl, '_blank')}
            className={`relative group rounded-2xl overflow-hidden shadow-md border border-white/70 aspect-[540/340] flex items-center justify-center ${
              linkedinUrl ? "cursor-pointer" : ""
            } ${
              videoUrl || (images && images.length > 0) ? "bg-white p-2.5" : "bg-slate-950"
            }`}
          >
            {videoUrl ? (
              <video
                src={videoUrl}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            ) : images && images.length > 0 ? (
              <img
                src={images[activeImageIdx]}
                alt={title}
                className="w-full h-full object-contain"
              />
            ) : (
              <Illustration />
            )}
            
            {linkedinUrl && (
              <div className="absolute top-2 right-2 bg-sky-600/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Open Post ↗
              </div>
            )}
          </div>
          
          {images && images.length > 1 && (
            <div className="flex gap-2 mt-2 overflow-x-auto py-1 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-12 h-8 rounded border overflow-hidden transition-all shrink-0 ${
                    activeImageIdx === idx ? "border-sky-500 scale-105" : "border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
          
          <div className="flex gap-2 mt-4 flex-wrap justify-center sm:justify-start">
            {stats.map(s => <StatChip key={s.label} val={s.val} label={s.label} color={color} />)}
          </div>
        </div>

        {/* Content side */}
        <div className={`${isEven ? "order-2" : "order-1 md:order-1"} p-6 md:p-8 flex flex-col justify-between`}>
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ fontFamily: "'DM Mono', monospace", color: accent, backgroundColor: `${color}18` }}>
                {category}
              </span>
            </div>

            <h2 
              onClick={() => linkedinUrl && window.open(linkedinUrl, '_blank')}
              className={`text-2xl md:text-3xl leading-tight mb-1 project-card-title ${
                linkedinUrl ? "has-link cursor-pointer" : ""
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600 }}
            >
              {title}
            </h2>
            <p className="text-xs mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color }}>{subtitle}</p>
            <div className="w-12 h-0.5 mb-5 rounded-full" style={{ backgroundColor: color }} />

            <p className="text-sm leading-relaxed text-slate-600 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {description}
            </p>

            <div className="rounded-xl p-4 mb-4 border-l-4 text-sm"
              style={{ borderColor: color, backgroundColor: `${color}08`, fontFamily: "'DM Sans', sans-serif", color: "#334155" }}>
              <span className="font-semibold block mb-1" style={{ color: accent }}>→ Key Outcome</span>
              {outcome}
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl p-3 bg-white/60 border border-white/80">
                      <span className="text-xs font-semibold block mb-1" style={{ color: accent, fontFamily: "'DM Mono', monospace" }}>CHALLENGE</span>
                      <p className="text-xs text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>{challenge}</p>
                    </div>
                    <div className="rounded-xl p-3 bg-white/60 border border-white/80">
                      <span className="text-xs font-semibold block mb-1" style={{ color: accent, fontFamily: "'DM Mono', monospace" }}>IMPACT</span>
                      <p className="text-xs text-slate-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>{impact}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {tools.map(t => <TechBadge key={t} label={t} color={color} />)}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <motion.button onClick={() => setExpanded(!expanded)}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
                style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: color, boxShadow: `0 4px 16px ${color}30` }}>
                {expanded ? "Show Less" : "View Details"}
                <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>↓</motion.span>
              </motion.button>
              
              {linkedinUrl && (
                <motion.a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-slate-300 hover:bg-slate-50 transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "#0072b1" }}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Check it out on LinkedIn
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function ProjectsPage({ onBack, initialProjectNum }) {
  const [selectedTab, setSelectedTab] = useState("All");

  const categories = ["All", "Professional Projects", "Academic Projects", "Personal Projects"];

  const filteredProjects = selectedTab === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <style>{fontStyle}</style>

      <div
        className="min-h-screen w-full relative pb-24"
        style={{
          background: "linear-gradient(150deg, #f0f7ff 0%, #fafcff 40%, #ffffff 70%, #f7f9fc 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        </div>

        {/* ── HEADER ── */}
        <header className="relative z-10 px-5 md:px-10 pt-6 pb-4 flex items-center justify-between"
          style={{ backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
          <motion.button onClick={onBack}
            whileHover={{ scale: 1.05, x: -3 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 bg-white/75 backdrop-blur-sm text-slate-600 hover:bg-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </motion.button>
          <div className="text-xs tracking-widest uppercase font-medium text-sky-700" style={{ fontFamily: "'DM Mono', monospace" }}>
            Jay Prajapati · EIT Portfolio
          </div>
        </header>

        {/* ── HERO ── */}
        <section className="relative z-10 px-5 md:px-10 py-16 text-center">
          <p className="text-[10px] tracking-[0.28em] uppercase mb-4 font-semibold text-sky-700" style={{ fontFamily: "'DM Mono', monospace" }}>
            Engineering Portfolio
          </p>
          <h1 className="leading-tight mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 600, color: "#0f172a", fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            Mechanical Design & <span className="text-sky-600">Integrity Analysis</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 text-sm sm:text-base leading-relaxed mb-10">
            A comprehensive gallery of professional integrity assessments, aerospace fluid simulations, HVAC designs, and detailed structural finite element models.
          </p>

          {/* ── CATEGORY FILTER TABS ── */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto bg-white/40 p-1.5 rounded-2xl border border-slate-200/80 backdrop-blur-sm">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedTab === tab 
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/25" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {tab.replace(" Projects", "")}
              </button>
            ))}
          </div>
        </section>

        {/* ── PROJECTS LIST ── */}
        <section className="relative z-10 px-4 md:px-8 lg:px-10 max-w-6xl mx-auto space-y-8 mt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.number + project.title} project={project} index={index} initialProjectNum={initialProjectNum} />
            ))}
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
