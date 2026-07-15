import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'CAD & Other Softwares',
    color: '#0079c1',
    skills: [
      { name: 'ANSYS Workbench & APDL', pct: 95 },
      { name: 'SolidWorks', pct: 88 },
      { name: 'PTC CREO', pct: 85 },
      { name: 'AutoCAD', pct: 85 },
      { name: 'CFD / ANSYS Fluent', pct: 85 },
      { name: 'Revit MEP', pct: 82 },
      { name: 'ABAQUS', pct: 80 },
      { name: 'Bluebeam Revu', pct: 80 },
    ]
  },
  {
    title: 'Codes & Standards',
    color: '#7c3aed',
    skills: [
      { name: 'ASME Sec VIII Div 2', pct: 90 },
      { name: 'ASME B31.3', pct: 90 },
      { name: 'API 579-1 FFS', pct: 90 },
      { name: 'ASME B31J', pct: 88 },
      { name: 'ASME B16.5', pct: 88 },
      { name: 'ASME FFS-1 Fitness-for-Service', pct: 88 },
      { name: 'ASME Sec II Part D', pct: 85 },
      { name: 'ASME PCC-1 Appendix O', pct: 83 },
    ]
  },
  {
    title: 'Programming & Data Analysis',
    color: '#10b981',
    skills: [
      { name: 'EXCEL VBA', pct: 90 },
      { name: 'Python', pct: 82 },
      { name: 'MATLAB', pct: 82 },
      { name: 'Power Query', pct: 80 },
    ]
  }
];

export default function Skills() {
  let skillCounter = 0;

  return (
    <section id="skills" className="section">
      <div className="container-tight">
        <div className="text-center mb-10 md:mb-12 px-2">
          <span className="eyebrow">Toolkit</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3" style={{ fontStyle: 'italic' }}>Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: catIdx * 0.1, ease: "easeOut" }}
              className="card p-6 sm:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <h3 className="text-base sm:text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
                  {category.title}
                </h3>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const currentIdx = skillCounter++;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-2)' }}>
                          {skill.name}
                        </span>
                        <span className="text-[10px] sm:text-xs tabular-nums font-semibold" style={{ color: 'var(--text-3)' }}>
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: currentIdx * 0.03 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}99)`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
