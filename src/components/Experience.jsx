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
    color: '#0079C1',
    intro: 'Zachry Integrity Engineering provides specialized mechanical integrity and engineering assessment services for refinery and petrochemical assets across North America. In my role, I support engineering evaluations of pressure equipment and piping systems, helping clients make technically sound decisions related to equipment integrity, repair planning, and continued operation.',
    points: [
      'Supported API 579-1 Level 3 Fitness-for-Service (FFS) assessments for refinery assets, including vacuum towers, coke drums, fractionators, nozzles, cyclic piping systems, and non-standard piping configurations.',
      'Performed static, dynamic, and fatigue finite element analyses using ANSYS Workbench and APDL to evaluate structural response, localized stresses, deformation, and fatigue-sensitive regions.',
      'Developed finite element models to evaluate non-standard jacketed pipe cross configurations and support Stress Intensification Factor (SIF) assessments using ASME B31.3 and ASME B31J principles where standard values were unavailable.',
      'Reviewed client drawings, equipment records, inspection findings, and thermography data to prepare engineering calculations, technical reports, and mechanical integrity assessments.',
      'Collaborated with multidisciplinary engineering teams and client personnel to deliver technically sound recommendations supporting equipment reliability, repair planning, and continued operation.'
    ],
  },
  {
    role: 'Propulsion System Design Intern',
    org: 'Prime Toolings',
    period: 'Sep 2024 – Jan 2025',
    location: 'Remote',
    color: '#ea580c',
    intro: 'Prime Toolings specializes in the design and manufacturing of precision tooling and engineering solutions for aerospace and industrial applications. During my internship, I supported propulsion-system design activities involving CAD modelling, engineering analysis, and simulation-driven design improvements.',
    points: [
      'Designed and refined propulsion-system components and layouts using CAD tools, considering aerodynamic performance, structural requirements, and manufacturability.',
      'Conducted CFD simulations to evaluate airflow behaviour and compare design iterations, supporting engineering decisions throughout the development process.',
      'Supported turbine blade and propulsion component development by evaluating geometry, material selection, and structural performance.',
      'Prepared engineering models, technical documentation, and simulation results to support design reviews and project discussions.',
      'Collaborated with engineers throughout the design process to deliver assigned project work within established timelines.'
    ],
  },
  {
    role: 'Assistant Manager',
    org: 'Circle K',
    period: 'Feb 2023 – Present',
    location: 'Calgary, AB',
    color: '#dc2626',
    intro: 'Circle K is one of North America\'s largest convenience retail chains, serving millions of customers through a network of company-owned and franchised stores. As an Assistant Manager, I supported daily store operations while leading a team in a fast-paced customer-focused environment.',
    points: [
      'Supervised day-to-day store operations, ensuring high standards of customer service, inventory management, cash handling, and operational efficiency.',
      'Led, trained, and supported a team of employees by coordinating work schedules, delegating responsibilities, and maintaining a collaborative work environment.',
      'Developed an Excel VBA-based inventory tracking system that improved inventory visibility and contributed to a reduction in stock shortages.',
      'Helped improve operational performance by supporting initiatives that contributed to increased sales, enhanced workplace safety, and more efficient inventory management.',
      'Strengthened leadership, communication, problem-solving, and decision-making skills while balancing operational priorities in a high-volume retail environment.'
    ],
  },
  {
    role: 'Aerospace Vehicle Design Project Trainee',
    org: 'Brahmastra Aerospace',
    period: 'Nov 2022 – Jan 2023',
    location: 'Bengaluru, India (Remote)',
    color: '#4f46e5',
    intro: 'Brahmastra Aerospace provided project-based exposure to aerospace vehicle design, CAD modelling, and computational fluid dynamics. During this training experience, I worked on aircraft and propulsion-related design concepts using CATIA V5 and CFD tools.',
    points: [
      'Designed an aircraft wing with internal support structures using CATIA V5, considering aerodynamic geometry and structural arrangement.',
      'Performed CFD analyses at multiple angles of attack to study airflow behaviour and evaluate aerodynamic performance.',
      'Developed a simplified rocket model and conducted simulations to examine stability, airflow, and thrust-related characteristics.',
      'Modelled a jet-engine turbine blade using CAD techniques, considering aerodynamic form and component geometry.',
      'Documented design assumptions, simulation observations, and project findings as part of the technical training activities.'
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
                      <div className="flex items-start gap-3.5 mb-3.5">
                        {/* Org Initial Badge */}
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-base shadow-sm"
                          style={{ 
                            background: `linear-gradient(135deg, ${exp.color}dd, ${exp.color})`,
                            border: '1px solid rgba(255,255,255,0.15)'
                          }}
                        >
                          {exp.org.charAt(0)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                            <div>
                              <h3 className="font-semibold text-sm sm:text-base leading-snug" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                              <p className="text-xs sm:text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>{exp.org}</p>
                            </div>
                            <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full glass font-medium shrink-0 self-start sm:self-auto mt-1 sm:mt-0" style={{ color: 'var(--text-3)' }}>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-3.5">
                        <MapPin size={11} style={{ color: 'var(--text-4)' }} />
                        <span className="text-[10px] sm:text-xs" style={{ color: 'var(--text-4)' }}>{exp.location}</span>
                      </div>
                      
                      {exp.intro && (
                        <p className="text-xs sm:text-sm leading-6 mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic', color: 'var(--text-2)', opacity: 0.9 }}>
                          {exp.intro}
                        </p>
                      )}

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
