import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Engineering Specialist',
    org: 'Zachry Integrity Engineering Ltd.',
    period: 'May 2025 – Present',
    location: 'Calgary, AB',
    points: [
      'Performed FEA-based mechanical analysis and integrity assessments for pressure equipment and piping systems using ANSYS Workbench and APDL, evaluating structural behaviour, damage mechanisms, and failure risk under operating and transient loading conditions.',
      'Conducted API 579-1/ASME Level 3 Fitness-for-Service evaluations on refinery pressure vessels including a Vacuum Tower and Coker Main Fractionator, analysing post-WOL distortion, operating loads, and equipment geometry to support repair and continued operation decisions.',
      'Developed engineering design specifications and ASME B31.3-compliant calculations for piping components and pressure equipment, applying ASME BPVC VIII, B16.5, B31J, PCC-1, and ABSA AB-520 codes to produce calculation packages accepted by client engineering teams.',
      'Performed root-cause analysis and failure mode investigations for pressure equipment and cyclically loaded piping, integrating thermography inspection data and operating history to diagnose damage mechanisms and develop corrective action recommendations.',
      'Coordinated technical deliverables across multi-discipline internal teams and client field personnel, managing concurrent project schedules and ensuring engineering outputs accurately reflected field conditions and operational constraints.',
    ],
  },
  {
    role: 'Propulsion System Design Intern',
    org: 'Prime Toolings',
    period: 'Sep 2024 – Jan 2025',
    location: 'Remote',
    points: [
      'Designed propulsion system components and optimized layouts achieving a 20% improvement in aerodynamic efficiency and 15% improvement in structural integrity using CAD and simulation tools.',
      'Conducted 30+ detailed simulations to analyze engine component aerodynamics, improving airflow performance by 15% and identifying key design improvements.',
      'Led turbine blade design using advanced propulsion alloys, reducing component weight by 10% and increasing durability by 25%.',
      'Coordinated with a team of 5 engineers to deliver complex projects within strict timelines and in compliance with industry standards.',
    ],
  },
  {
    role: 'Assistant Manager',
    org: 'Circle K',
    period: 'Feb 2023 – Present',
    location: 'Calgary, AB',
    points: [
      'Managed daily operations and a team of 8 staff, achieving a 14% sales increase, 20% reduction in safety incidents, and 15% decrease in stockouts through structured procedures, staff training, and an Excel VBA inventory management system.',
    ],
  },
  {
    role: 'Aerospace Vehicle Design Project Trainee',
    org: 'Brahmastra Aerospace',
    period: 'Nov 2022 – Jan 2023',
    location: 'Bengaluru, India (Remote)',
    points: [
      'Designed an aircraft wing with internal support structures using CATIA V5, optimizing overall structural performance.',
      'Performed CFD analysis at varying angles of attack (2-6 degrees) to optimize aerodynamic efficiency.',
      'Developed a simplified rocket model and conducted in-depth CFD simulations, improving stability and thrust performance.',
      'Engineered a jet engine turbine blade using advanced CAD techniques to enhance aerodynamic reliability.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 83%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container-tight">
        <div className="text-center mb-10 md:mb-12 px-2">
          <span className="eyebrow">Work History</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3" style={{ fontStyle: 'italic' }}>Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,122,111,0.3) 20%, rgba(13,122,111,0.3) 80%, transparent)' }} />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={exp.role}
                  ref={el => (itemRefs.current[i] = el)}
                  className={`relative flex flex-col md:flex-row ${isLeft ? '' : 'md:flex-row-reverse'} gap-0`}
                >
                  {/* Card */}
                  <div className={`md:w-[calc(50%-28px)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: 'var(--glass-shadow-hover)' }}
                      className="card p-5 sm:p-6"
                      style={{ transition: 'none' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                          <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--accent)' }}>{exp.org}</p>
                        </div>
                        <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full glass font-medium shrink-0" style={{ color: 'var(--text-3)' }}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-3">
                        <MapPin size={11} style={{ color: 'var(--text-4)' }} />
                        <span className="text-[10px] sm:text-xs" style={{ color: 'var(--text-4)' }}>{exp.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt, pi) => (
                          <li key={pi} className="flex gap-2 text-xs sm:text-sm leading-6" style={{ color: 'var(--text-2)' }}>
                            <span className="flex-shrink-0 w-1 h-1 mt-2.5 rounded-full" style={{ background: 'var(--accent)' }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Dot on line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full border-2 border-white z-10"
                    style={{ background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(13,122,111,0.15)' }} />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-28px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
