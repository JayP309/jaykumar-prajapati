import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── Mini SVG thumbnails for mechanical engineering projects ──────────────────

const ThumbFFS = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <rect x="80" y="25" width="40" height="80" rx="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="1"/>
    <circle cx="100" cy="55" r="16" fill="rgba(239,68,68,0.4)" filter="blur(2px)"/>
    <text x="10" y="20" fill="#38bdf8" fontSize="6" fontFamily="monospace">API 579 FFS L3</text>
  </svg>
);

const ThumbSIF = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <line x1="20" y1="65" x2="180" y2="65" stroke="#0ea5e9" strokeWidth="3"/>
    <line x1="100" y1="15" x2="100" y2="115" stroke="#0ea5e9" strokeWidth="3"/>
    <circle cx="100" cy="65" r="10" fill="rgba(239,68,68,0.4)" filter="blur(1px)"/>
    <text x="10" y="20" fill="#10b981" fontSize="6" fontFamily="monospace">ASME B31J FEA</text>
  </svg>
);

const ThumbWing = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <path d="M 50 85 Q 100 40 150 85 Z" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" strokeWidth="1.5"/>
    <path d="M 20 65 Q 90 35 170 75" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3"/>
    <text x="10" y="20" fill="#38bdf8" fontSize="6" fontFamily="monospace">3D WING CFD</text>
  </svg>
);

const ThumbAirfoil = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <path d="M 40 75 C 60 45 120 40 160 75 C 120 85 60 90 40 75 Z" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5"/>
    <text x="10" y="20" fill="#10b981" fontSize="6" fontFamily="monospace">NACA 4412</text>
  </svg>
);

const ThumbHVAC = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <path d="M 30 40 L 120 40 L 120 90 L 170 90" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M 30 55 L 105 55 L 105 105 L 170 105" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round"/>
    <text x="10" y="20" fill="#38bdf8" fontSize="6" fontFamily="monospace">Revit MEP HVAC</text>
  </svg>
);

const ThumbShock = () => (
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" className="w-full h-full bg-slate-900">
    <rect width="200" height="130" fill="#0f172a" rx="4"/>
    <path d="M 100 20 Q 80 35 100 50 Q 120 65 100 80 Q 80 95 100 110" fill="none" stroke="#64748b" strokeWidth="4"/>
    <rect x="96" y="15" width="8" height="100" fill="#e2e8f0" opacity="0.8"/>
    <text x="10" y="20" fill="#818cf8" fontSize="6" fontFamily="monospace">PSD VIBRATION</text>
  </svg>
);

const PROJECTS = [
  {
    number: '06',
    title: 'Aerodynamic Analysis of 3D Wing',
    category: 'Academic',
    desc: 'Fluent 3D CFD modeling of wing flow streamlines and tip vortices validation.',
    color: '#2563eb',
    thumbUrl: import.meta.env.BASE_URL + 'assets/Picture1.png',
    isVideo: false
  },
  {
    number: '07',
    title: 'CFD Simulation of NACA 4412 Airfoil',
    category: 'Academic',
    desc: 'Airfoil drag polar optimization and mesh independence analysis under Fluent.',
    color: '#0d9488',
    thumbUrl: import.meta.env.BASE_URL + 'assets/media__1781900717132.jpg',
    isVideo: false
  },
  {
    number: '08',
    title: 'Energy-Efficient Commercial HVAC Design',
    category: 'Personal',
    desc: 'Building thermal loads, VAV system layout and BIM modeling in Revit MEP.',
    color: '#2563eb',
    thumbUrl: import.meta.env.BASE_URL + 'assets/media__1781900895658.jpg',
    isVideo: false
  },
  {
    number: '10',
    title: 'Random Vibration Shock Analysis',
    category: 'Personal',
    desc: 'ANSYS solid-element FEA shock absorber modeling under PSD random vibration frequency loads.',
    color: '#4f46e5',
    thumbUrl: import.meta.env.BASE_URL + 'assets/shock_new_1.png',
    isVideo: false
  },
  {
    number: '11',
    title: '3D CAD Model of 4-Cylinder Engine',
    category: 'Personal',
    desc: 'Designed a fully constrained, high-fidelity 4-cylinder combustion engine assembly in SolidWorks.',
    color: '#4f46e5',
    thumbUrl: import.meta.env.BASE_URL + 'assets/Assembly_Animation.mp4',
    isVideo: true
  },
  {
    number: '12',
    title: '3D CAD Model of Engine Blower',
    category: 'Personal',
    desc: 'Developed a 3D parametric engine blower housing and impeller blade assembly using CREO Parametric.',
    color: '#0891b2',
    thumbUrl: import.meta.env.BASE_URL + 'assets/Engine_Blower.mp4',
    isVideo: true
  },
  {
    number: '13',
    title: '3D CAD Model of Bench Vise Assembly',
    category: 'Personal',
    desc: 'Designed a precision mechanical bench vise clamping assembly inside AutoCAD.',
    color: '#475569',
    thumbUrl: import.meta.env.BASE_URL + 'assets/Screenshot 2025-02-07 120959.png',
    isVideo: false
  },
  {
    number: '16',
    title: 'Gantry Crane Structural FEA',
    category: 'Personal',
    desc: 'Bending stress and deflection assessment of a gantry crane structure in SolidWorks under vertical loads.',
    color: '#0284c7',
    thumbUrl: import.meta.env.BASE_URL + 'assets/media__1783618616876.png',
    isVideo: false
  }
];

const borderCSS = `
@keyframes border-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.carousel-container {
  --tz: 250px;
  --card-w: 260px;
  --card-ml: -130px;
  --card-h: 380px;
}
@media (min-width: 640px) {
  .carousel-container {
    --tz: 320px;
    --card-w: 300px;
    --card-ml: -150px;
    --card-h: 400px;
  }
}
@media (min-width: 1024px) {
  .carousel-container {
    --tz: 400px;
    --card-w: 340px;
    --card-ml: -170px;
    --card-h: 420px;
  }
}
`;

function ProjectCarouselCard({ p, index, onNavigate, hoverRef, rotationY }) {
  const angle = index * (360 / PROJECTS.length);
  const counterRotation = useTransform(rotationY, (r) => -(r + angle));

  return (
    <div
      className="absolute top-0 left-1/2"
      style={{
        transform: `rotateY(${angle}deg) translateZ(var(--tz))`,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onClick={() => onNavigate?.('projects', p.number)}
        whileHover={{ y: -10, scale: 1.04 }}
        className="group relative cursor-pointer"
        style={{
          width: 'var(--card-w)',
          marginLeft: 'var(--card-ml)',
          height: 'var(--card-h)',
          rotateY: counterRotation,
          transformStyle: 'preserve-3d',
          padding: '2px',
        }}
      >
        {/* Rotating metallic glow border */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden z-0">
          <div
            className="absolute opacity-30 group-hover:opacity-100"
            style={{
              inset: '-60%', width: '220%', height: '220%',
              background: `conic-gradient(from 0deg, transparent 0%, transparent 50%, ${p.color}cc 65%, #fff 72%, ${p.color}cc 79%, transparent 90%, transparent 100%)`,
              animation: 'border-spin 6s linear infinite', transition: 'opacity 0.5s ease',
            }}
          />
        </div>

        {/* Inner card surface */}
        <div className="relative z-10 w-full h-full rounded-[26px] overflow-hidden flex flex-col"
          style={{
            background: 'rgba(255,255,255,0.04)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            backdropFilter: 'blur(24px) saturate(160%)',
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.30)`,
            border: '1px solid rgba(0,121,193,0.18)',
          }}
        >
          {/* Thumbnail side (Top) */}
          <div className="relative shrink-0 w-full h-[45%] overflow-hidden p-3 sm:p-4 bg-white" style={{ borderBottom: '1px solid rgba(0,121,193,0.15)' }}>
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-105 bg-white flex items-center justify-center">
               {p.isVideo ? (
                 <video
                   src={p.thumbUrl}
                   muted
                   autoPlay
                   loop
                   playsInline
                   className="w-full h-full object-contain"
                 />
               ) : (
                 <img
                   src={p.thumbUrl}
                   alt={p.title}
                   className="w-full h-full object-contain"
                 />
               )}
            </div>
          </div>

          {/* Content side (Bottom) */}
          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold leading-tight mb-2 line-clamp-2" style={{ color: 'var(--text)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              {p.title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed opacity-75 line-clamp-3 mb-2" style={{ color: 'var(--text-2)' }}>
              {p.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects({ onNavigate }) {
  const sectionRef = useRef(null);
  const hoverRef = useRef(false);
  const rotationY = useMotionValue(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotationY = useRef(0);

  useEffect(() => {
    // Inject custom CSS
    if (!document.getElementById('border-spin-css')) {
      const style = document.createElement('style');
      style.id = 'border-spin-css';
      style.textContent = borderCSS;
      document.head.appendChild(style);
    }
    
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useAnimationFrame((t, delta) => {
    if (!hoverRef.current && !isDragging.current) {
      rotationY.set(rotationY.get() - (delta * 0.012));
    }
  });

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    startRotationY.current = rotationY.get();
    isDragging.current = false;
  };

  const handlePointerMove = (e) => {
    if (startX.current === 0) return;
    const diffX = e.clientX - startX.current;

    // Check threshold (5px) before triggering drag state
    if (!isDragging.current && Math.abs(diffX) > 5) {
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      // Reset starting variables to prevent visual jump
      startX.current = e.clientX;
      startRotationY.current = rotationY.get();
    }

    if (isDragging.current) {
      const currentDiff = e.clientX - startX.current;
      rotationY.set(startRotationY.current + currentDiff * 0.15);
    }
  };

  const handlePointerUp = (e) => {
    startX.current = 0;
    if (isDragging.current) {
      isDragging.current = false;
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="section carousel-container" style={{ paddingBottom: '96px', overflow: 'hidden' }}>
      <div className="container-tight" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-28 md:mb-40 px-2 relative z-10">
          <span className="eyebrow">Portfolio</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 mb-3 leading-tight" style={{ fontStyle: 'italic' }}>
            Featured Work
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-xl mx-auto" style={{ color: 'var(--text-3)' }}>
            Explore specialized engineering projects categorized across industrial, academic, and personal milestones.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div 
          className="relative w-full mx-auto cursor-grab active:cursor-grabbing select-none" 
          style={{ perspective: '1200px', height: 'calc(var(--card-h) + 40px)', marginBottom: '160px' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <motion.div
            className="w-full h-full relative"
            style={{ rotateY: rotationY, transformStyle: 'preserve-3d' }}
          >
            {PROJECTS.map((p, i) => (
              <ProjectCarouselCard key={p.title} p={p} index={i} onNavigate={onNavigate} hoverRef={hoverRef} rotationY={rotationY} />
            ))}
          </motion.div>
        </div>

        <div className="text-center relative z-10" style={{ marginTop: '20px' }}>
          <p className="text-lg sm:text-xl font-medium mb-4" style={{ color: 'var(--text-3)' }}>
            Explore the complete portfolio of my mechanical design & simulation projects
          </p>
          <motion.button onClick={() => onNavigate?.('projects')}
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            className="btn-primary gap-2 mx-auto">
            View Full Project Gallery <ArrowUpRight size={15} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
