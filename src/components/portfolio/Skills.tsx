import { motion } from "framer-motion";
import Section from "./Section";

const categories = [
  {
    name: "Languages",
    skills: [
      { name: "Java (DSA)", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    name: "CS Fundamentals",
    skills: [
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "REST APIs", level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" kicker="What I work with" title="Skills & Tech">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 group relative overflow-hidden"
          >
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
              style={{ background: "var(--gradient-glow)" }}
            />
            <h3 className="font-display font-bold text-lg mb-4 gradient-text">{cat.name}</h3>
            <div className="space-y-3">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
