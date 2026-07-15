import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: "Process Improvement Foundations",
    issuer: "LinkedIn Learning",
    desc: "Completed professional training covering business process improvement, analyzing operational workflows, identifying process bottlenecks, and applying quality optimization frameworks.",
    credentialUrl: "https://www.linkedin.com/learning/certificates/7d2f3ba14333b50e4d9793a47dc750f56f2ed1d3cd54cc527a1f060d30a320dc?trk=share_certificate",
    date: "Jul 2026",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  },
  {
    title: "Revit for Mechanical and Plumbing Design Professional",
    issuer: "LinkedIn Learning Authorized Provider",
    desc: "Completed professional Revit MEP training covering HVAC, plumbing, and mechanical system modelling, BIM coordination, and engineering drawing production for commercial building projects.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_revit-mechanicalelectricalandplumbing-share-7291622910157328387-vy8h/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Feb 2025",
    color: "#0079C1",
    bg: "var(--accent-light)"
  },
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Continuous Improvement Certification",
    desc: "Completed structured continuous improvement, KPI development, performance monitoring, and data-driven problem solving methodology training.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_certificate-of-completion-activity-7300948954760851456-I_79?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Feb 2025",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  },
  {
    title: "Reading HVAC, Plumbing and other Drawings & Schematics",
    issuer: "Drawing Interpretation Certification",
    desc: "Completed formal P&ID, HVAC, plumbing, and engineering drawing interpretation training.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_certificate-activity-7318779620894416897-09O0?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Mar 2025",
    color: "#0079C1",
    bg: "var(--accent-light)"
  },
  {
    title: "Mechanical Engineering Mastery Series: HVAC Engineering 101",
    issuer: "Udemy",
    desc: "Completed HVAC engineering fundamentals including thermal load calculations, equipment selection, duct and hydronic system design, and energy efficiency considerations.",
    credentialUrl: "https://www.udemy.com/certificate/UC-7c1c67c5-3627-49de-a4a0-8bfb26a648a9/",
    date: "Jan 2025",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  },
  {
    title: "Advanced CREO Parametric Training for Product Design and Development",
    issuer: "CREO Modeling Academy",
    desc: "Completed advanced parametric modelling, assembly design, GD&T documentation, and manufacturing drawing production training.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_creo-certificate-activity-7303119578220371969-AqJD?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Feb 2025",
    color: "#0079C1",
    bg: "var(--accent-light)"
  },
  {
    title: "Industrial Innovation through IIOT",
    issuer: "Mastering Up",
    desc: "Completed specialized training covering Industrial Internet of Things (IIoT), exploring industrial innovation, smart connected system architectures, and smart manufacturing integration.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_certificate-iiot-activity-7328141768636432386-HbRX?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "May 2025",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  },
  {
    title: "Reading HVAC Drawings and Blueprints",
    issuer: "SkillCat Accreditation Program (IACET Provider)",
    desc: "Successfully completed interactive course training on HVAC trade prints, schematic parsing, and blueprint interpretation standards.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_reading-hvac-drawings-and-blueprints-activity-7320156133556371456-fMJK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Apr 2025",
    color: "#0079C1",
    bg: "var(--accent-light)"
  },
  {
    title: "The Science of Effective Communication: Decoding Human Interaction",
    issuer: "Mastering Up",
    desc: "Completed professional development course covering critical communication frameworks, presentation delivery, decoding interpersonal dynamics, and soft skills leadership training.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_the-science-of-effective-communication-activity-7315065329318014976-reAg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Apr 2025",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  },
  {
    title: "Introduction to Commercial Systems",
    issuer: "SkillCat Accreditation Program (IACET Provider)",
    desc: "Completed interactive course training covering commercial systems installation, operation, and maintenance guidelines under accredited trade standards.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_introduction-to-commercial-systems-activity-7305475773417631744-22GN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Nov 2024",
    color: "#0079C1",
    bg: "var(--accent-light)"
  },
  {
    title: "AutoCAD: 3D Modeling for Mechanical Designs",
    issuer: "LinkedIn Learning",
    desc: "Completed professional course covering advanced 3D mechanical part modeling, parametric sketching, assembly design operations, and 3D drawing setups in AutoCAD.",
    credentialUrl: "https://www.linkedin.com/posts/jaykumar-prajapati_certificate-of-completion-activity-7304735154567069696-9l30?utm_source=share&utm_medium=member_desktop&rcm=ACoAACTudPwBarslMoaDRLUtsgPBCNBE1dj2h5o",
    date: "Mar 2025",
    color: "#00A9E0",
    bg: "var(--accent-2-light)"
  }
];

export default function CertificationsPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--bg)' }} className="min-h-screen text-slate-100 font-sans relative overflow-hidden pb-20">
      {/* Background Ambience */}
      <div aria-hidden className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '-10%', right: '10%',
          width: '50vw', height: '50vw', borderRadius: '50%', filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(0,169,224,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-10%',
          width: '55vw', height: '55vw', borderRadius: '50%', filter: 'blur(120px)',
          background: 'radial-gradient(circle, rgba(0,121,193,0.12) 0%, transparent 70%)',
        }} />
      </div>

      <div className="container-tight relative z-10 pt-24 px-4 sm:px-6">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
            style={{ color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </motion.button>
          
          <div className="text-right sm:text-left">
            <span className="eyebrow block">Qualifications</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight" style={{ fontStyle: 'italic', color: 'var(--text)' }}>
              Certifications & Credentials
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed mb-10" style={{ color: 'var(--text-2)' }}>
          Professional development courses, software mastery programs, and industry certifications completed to validate expertise in Revit MEP, Lean Six Sigma methodologies, HVAC systems, P&ID drawing interpretation, and advanced CREO Parametric modeling.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: 'var(--glass-shadow-hover)' }}
              className="card p-6 flex flex-col justify-between gap-4 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(24px) saturate(140%)',
                WebkitBackdropFilter: 'blur(24px) saturate(140%)',
                border: '1px solid rgba(0,121,193,0.15)',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s, box-shadow 0.4s'
              }}
            >
              {/* Card top details */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: cert.bg }}>
                    <Award size={20} style={{ color: cert.color }} />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold leading-snug" style={{ color: 'var(--text)' }}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--accent)' }}>
                    <ShieldCheck size={13} />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mt-2 opacity-80" style={{ color: 'var(--text-2)' }}>
                  {cert.desc}
                </p>
              </div>

              {/* Card CTA Link */}
              <div className="mt-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors group"
                  style={{ color: 'var(--accent)' }}
                >
                  Verify Credential 
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
