import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Section from "./Section";

const certificates = [
  { id: "1ymVYQ4hDmi8ldmixu_0FNABvKBtKzZ4i", title: "Hackathon Participation" },
  { id: "17g7mpO-b2biJrwK1QW-HvgkddiRaDkIi", title: "Red Hat" },
  { id: "11xZQVWWL47MP4qp_ZASq9K6UpMXBkHZl", title: "Web Design" },
  { id: "1axQljNmaab4SG_2UTM_IXfz470S5kwLp", title: "Linux" },
  { id: "1_HV0qwKrjdanUIt9vP5ILb25R8ug0O84", title: "GeeksforGeeks (GFG)" },
  { id: "1kGGmjrujdlRLZFU4BWc8ScZ-PVr99iUH", title: "Agentic AI" },
  { id: "1IbMt1sGETVk3NW65Pj8NQb2W_uddosVu", title: "#100DaysOfCode" },
  { id: "1Ng4mLt1-7U2XVeO1jgEd6wSWRnJtRtcG", title: "GitHub" },
];

const thumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
const view = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export default function Certificates() {
  return (
    <Section
      id="certificates"
      kicker="Credentials"
      title="Certificates & Achievements"
    >
      <p className="text-center text-muted-foreground max-w-2xl mx-auto -mt-6 mb-12">
        A collection of certifications and accomplishments that reflect my continuous learning journey and technical growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {certificates.map((c, i) => (
          <motion.a
            key={c.id}
            href={view(c.id)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group relative glass rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Glow border on hover */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "var(--gradient-primary)",
                filter: "blur(14px)",
                zIndex: -1,
              }}
            />

            <div className="relative aspect-[4/3] overflow-hidden bg-muted/30">
              <img
                src={thumb(c.id)}
                alt={c.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement?.classList.add("certificate-fallback");
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 [.certificate-fallback_&]:opacity-100">
                <Award size={56} className="text-primary/60" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 flex flex-col gap-3 flex-1">
              <h3 className="font-semibold text-sm">{c.title}</h3>
              <span
                className="mt-auto inline-flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-lg text-primary-foreground transition-transform duration-300 group-hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
              >
                <ExternalLink size={14} /> View Certificate
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
