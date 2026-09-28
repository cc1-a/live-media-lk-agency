"use client"

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Live Media LK took our brand's vision and made it a cinematic reality. Absolutely phenomenal work.",
    image: "https://i.pravatar.cc/150?u=12",
    name: "Sarah Jenkins",
    role: "Marketing Director",
  },
  {
    text: "The best photography and videography team in Sri Lanka. They capture emotions perfectly.",
    image: "https://i.pravatar.cc/150?u=22",
    name: "David Chen",
    role: "CEO",
  },
  {
    text: "Professional, creative, and extremely talented. They delivered beyond our expectations.",
    image: "https://i.pravatar.cc/150?u=33",
    name: "Michael Roberts",
    role: "Event Organizer",
  },
  {
    text: "From the initial concept to the final edit, the entire process was seamless and inspiring.",
    image: "https://i.pravatar.cc/150?u=44",
    name: "Emily Watson",
    role: "Creative Lead",
  },
  {
    text: "Their strategic campaigns and visually stunning content have transformed our brand's reach completely.",
    image: "https://i.pravatar.cc/150?u=55",
    name: "Jessica Martinez",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://i.pravatar.cc/150?u=66",
    name: "James Anderson",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a visually arresting design and positive customer feedback.",
    image: "https://i.pravatar.cc/150?u=77",
    name: "Daniel Lee",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, truly understanding our visual identity.",
    image: "https://i.pravatar.cc/150?u=88",
    name: "Sophia Turner",
    role: "Sales Manager",
  },
  {
    text: "Using their strategy, our online presence and conversions significantly improved. True professionals.",
    image: "https://i.pravatar.cc/150?u=99",
    name: "William Harris",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
        <ul
        style={{ '--marquee-duration': `${props.duration || 10}s` } as React.CSSProperties}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0 animate-marquee"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(255, 191, 0, 0.12), 0 10px 10px -5px rgba(255, 191, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-10 rounded-3xl border border-primary/20 shadow-lg shadow-black/20 max-w-sm w-[350px] bg-neutral-900 transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-gray-300 leading-relaxed font-normal m-0 transition-colors duration-300">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/60 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-white transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-primary/80 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-12 relative overflow-hidden w-full"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="w-full z-10"
      >
        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden px-4"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}
