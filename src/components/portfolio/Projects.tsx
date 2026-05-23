import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    title: "Virtual Hackathon Platform (HackathonHub)",
    stack: ["MERN", "JWT", "REST APIs"],
    description:
      "Full-stack virtual hackathon platform enabling challenge hosting, team formation, submissions, and judging. JWT-based auth with Admin, Mentor, and Participant roles. Built for college deployment.",
    features: ["Auth & Authorization", "Team Formation", "Submissions", "Admin Dashboard", "Mentor Evaluation"],
    gradient: "from-purple-500/30 to-blue-500/30",
    emoji: "🚀",
  },
  {
    title: "Hostel Management System",
    stack: ["Java", "JDBC", "MySQL", "Swing", "MVC"],
    description:
      "Java-based hostel management system for student registration, room allocation, fee management, and record maintenance. Implements MVC architecture and role-based access control.",
    features: ["Student Management", "Fee Tracking", "Room Allocation", "Admin Controls"],
    gradient: "from-blue-500/30 to-cyan-500/30",
    emoji: "🏛️",
  },
  {
    title: "Smart Attendance System",
    stack: ["Flutter", "Node.js", "Firebase/MySQL", "QR", "GPS"],
    description:
      "Smart attendance system using secure QR scanning and GPS-based fake attendance detection with time-bound QR validation.",
    features: ["QR Attendance", "GPS Verification", "Secure Auth", "Attendance Analytics"],
    gradient: "from-pink-500/30 to-purple-500/30",
    emoji: "📲",
    ongoing: true,
  },
];

export default function Projects() {
  return (
    <Section id="projects" kicker="Selected work" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`glass rounded-2xl p-6 relative overflow-hidden group ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{p.emoji}</div>
                  <h3 className="font-display font-bold text-xl">{p.title}</h3>
                </div>
                {p.ongoing && (
                  <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-primary/20 text-primary uppercase tracking-wider whitespace-nowrap">
                    <Sparkles size={10} /> Ongoing
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/70 border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <ExternalLink size={12} /> Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-border hover:bg-secondary"
                >
                  <Github size={12} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
