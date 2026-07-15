import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Briefcase, BookOpen, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const getExperienceYears = () => {
  const startDate = new Date('2025-05-01');
  const currentDate = new Date();
  const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  const totalYears = (diffMonths + 5) / 12;
  return `${totalYears.toFixed(1)}+`;
};

const expYears = getExperienceYears();

const stats = [
  { label: 'Years of Experience', value: expYears },
  { label: 'Engineering Projects', value: '15+' },
  { label: 'Degrees Earned', value: '2' },
  { label: 'EIT – APEGA', value: '✓' },
];

const cards = [
  { icon: Globe,    color: '#0079C1', bg: 'var(--accent-light)',   title: 'FEA & Mechanical Integrity',  body: (
    <><span style={{opacity:0.75, fontSize:'0.8rem'}}>Specialized in finite element analysis and mechanical integrity assessment for industrial pressure equipment:</span>
    <ul style={{marginTop:'8px', paddingLeft:'1.1em', lineHeight:'1.9', fontSize:'0.8rem', listStyleType:'disc'}}>
      <li>ANSYS Workbench & APDL</li>
      <li>API 579-1 / ASME Level 3 FFS</li>
      <li>ASME BPVC VIII, B31.3, B16.5, B31J</li>
      <li>Piping Stress & Vibration Analysis</li>
      <li>Root-Cause & Failure Analysis</li>
    </ul></>
  )},
  { icon: Briefcase, color: '#0079C1', bg: 'var(--accent-light)', title: 'Professional Experience', body: (
    <div style={{fontSize:'0.8rem', lineHeight:'1.75'}}>
      Engineering Specialist at Zachry Integrity Engineering Ltd. — delivering FEA analysis, FFS evaluations, and ASME-compliant piping calculations for major oil & gas refinery clients across Western Canada.
    </div>
  )},
  { icon: BookOpen, color: '#00A9E0', bg: 'var(--accent-2-light)', title: 'Education', body: (
    <>
      <div style={{marginBottom:'8px'}}>
        <div style={{fontWeight:600, fontSize:'0.78rem', color:'var(--text)'}}>Master of Mechanical & Manufacturing Engineering</div>
        <div style={{opacity:0.7, fontSize:'0.75rem'}}>Schulich School of Engineering, University of Calgary</div>
      </div>
      <div style={{marginBottom:'8px'}}>
        <div style={{fontWeight:600, fontSize:'0.78rem', color:'var(--text)'}}>Bachelor of Aeronautical Engineering</div>
        <div style={{opacity:0.7, fontSize:'0.75rem'}}>Gujarat Technological University</div>
      </div>
      <div style={{opacity:0.65, fontSize:'0.75rem', marginTop:'6px'}}>Focus: Mechanical Design, Engineering Analysis, Mechanical Integrity, Pressure Equipment Design, Stress Analysis.</div>
    </>
  )},
  { 
    icon: Users,    
    color: '#00A9E0', 
    bg: 'var(--accent-2-light)', 
    title: 'Certifications', 
    isClickable: true,
    target: 'certifications',
    body: (
      <div className="flex flex-col h-full justify-between">
        <ul style={{ paddingLeft: '1.1em', lineHeight: '1.8', fontSize: '0.8rem', listStyleType: 'disc' }}>
          <li>Revit MEP Design Professional</li>
          <li>HVAC Engineering 101 Mastery</li>
          <li>Advanced CREO Parametric modeling</li>
          <li>Lean Six Sigma Green Belt</li>
        </ul>
        <div style={{ marginTop: '16px' }}>
          <span 
            className="text-xs font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-2 transition-all duration-300"
            style={{ 
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #0079C1 0%, #00A9E0 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(0, 121, 193, 0.25)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 121, 193, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 121, 193, 0.25)';
            }}
          >
            <Award size={14} className="animate-pulse" />
            Explore All Certificates
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    )
  },
];

export default function About({ onNavigate }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { x: -56, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' } });

      gsap.fromTo(rightRef.current, { x: 56, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' } });

      gsap.fromTo(statsRef.current?.children ?? [],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.55, ease: 'power2.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 84%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container-tight">
        <div className="text-center mb-10 md:mb-12 px-2">
          <span className="eyebrow">About Me</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3" style={{ fontStyle: 'italic' }}>The Story So Far</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* Left — cards */}
          <div
            ref={leftRef}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            style={{ gridAutoRows: '1fr' }}
          >
            {cards.map(({ icon: Icon, color, bg, title, body, isClickable, target }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5, boxShadow: 'var(--glass-shadow-hover)' }}
                onClick={() => isClickable && onNavigate?.(target)}
                className={`card p-4 sm:p-5 flex flex-col gap-3 group ${isClickable ? 'cursor-pointer' : ''}`}
                style={{ height: '100%', transition: 'none' }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: 'var(--text)' }}>{title}</h3>
                  <div className="text-xs sm:text-sm leading-6" style={{ color: 'var(--text-2)' }}>{body}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — bio + stats */}
          <div ref={rightRef} className="flex-1 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-7" style={{ color: 'var(--text-2)' }}>
                I'm Jay Prajapati, a Mechanical Engineer in Training (EIT – APEGA) with a Master of Mechanical & Manufacturing Engineering from the Schulich School of Engineering, University of Calgary, and {expYears} years of oil and gas engineering experience.
              </p>
              <p className="text-sm sm:text-base leading-7" style={{ color: 'var(--text-2)' }}>
                My work focuses on FEA-based mechanical analysis, mechanical integrity assessment, piping stress engineering, and technical documentation across concurrent industrial client projects at Zachry Integrity Engineering Ltd. The approach has always been to dig into the mechanics of why equipment behaves the way it does under load — not just report findings, but understand the physics driving them.
              </p>
              <p className="text-sm sm:text-base leading-7" style={{ color: 'var(--text-2)' }}>
                I bring ANSYS, SolidWorks, Python, MATLAB, ASME and API code knowledge, ABSA AB-520 regulatory experience, a Lean Six Sigma Green Belt, and a track record of producing engineering deliverables that operations and integrity teams can act on.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4" style={{ gridAutoRows: '1fr' }}>
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, boxShadow: 'var(--glass-shadow-hover)' }}
                  className="card flex flex-col items-center justify-center text-center"
                  style={{ transition: 'none', minHeight: '90px', padding: '16px 12px' }}
                >
                  <p className="font-serif text-[1.8rem] sm:text-[2.1rem] leading-none text-grad mb-1" style={{ fontStyle: 'italic' }}>{s.value}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: 'var(--text-3)' }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
