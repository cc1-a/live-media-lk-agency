"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  {
    title: "Visual Production",
    desc: "Commercial photography, brand videography, and creative shoots tailored for high-end conversions.",
    link: "/services/visual-production"
  },
  {
    title: "Content Strategy",
    desc: "Brand content strategy, social media planning, and visual identity mapping across all touchpoints.",
    link: "/services/content-strategy"
  },
  {
    title: "Campaign Launch",
    desc: "Digital campaign launches, post-launch advertising, and strategic media buying for maximum ROI.",
    link: "/services/campaign-launch"
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ExpertiseCards() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {SERVICES.map((service, index) => (
        <motion.div key={index} variants={cardVariants} className="bg-white/5 border border-primary/20 p-8 rounded-xl backdrop-blur-sm hover:border-primary/50 transition-colors group">
          <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
          <p className="text-gray-400 mb-8">{service.desc}</p>
          <Link href={service.link} className="inline-block border border-primary text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
            Learn More
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
