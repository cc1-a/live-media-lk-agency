#!/bin/bash
mkdir -p app/work/[slug] app/admin components

cat << 'INNER_EOF' > tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
INNER_EOF

cat << 'INNER_EOF' > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFBF00",
        background: "#000000",
      },
      animation: {
        'neon-flicker': 'neon-flicker 2s infinite alternate',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow:
              '-0.1rem -0.1rem 0.5rem #fff, 0.1rem 0.1rem 0.5rem #fff, 0 0 1rem #FFBF00, 0 0 2rem #FFBF00, 0 0 3rem #FFBF00, 0 0 4rem #FFBF00',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
            opacity: '0.8',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
INNER_EOF

cat << 'INNER_EOF' > postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
INNER_EOF

cat << 'INNER_EOF' > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
INNER_EOF

cat << 'INNER_EOF' > app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Media LK - Creative Agency",
  description: "Premium Photography, Videography, and Creative Shoots in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
INNER_EOF

cat << 'INNER_EOF' > app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-white;
  }
}
INNER_EOF

cat << 'INNER_EOF' > app/page.tsx
import CursorRingField from "@/components/CursorRingField";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Intro Scroll Wrapper */}
      <div className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center border-b border-white/10">
          <p className="text-gray-400">
            {/* TODO: Implement video-scrubbing laptop zoom animation using Framer Motion's useScroll here */}
            [Video Scrubbing Laptop Zoom Animation Placeholder]
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CursorRingField color="#FFBF00" />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter animate-neon-flicker">
            live media
          </h1>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Photography</h3>
            <p className="text-gray-400">Capturing moments with precision and artistry.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Videography</h3>
            <p className="text-gray-400">Cinematic storytelling that brings your vision to life.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Creative Shoots</h3>
            <p className="text-gray-400">Innovative concepts for brands and individuals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary">Client Stories</h2>
        </div>
        <TestimonialsSection />
      </section>
    </main>
  );
}
INNER_EOF

cat << 'INNER_EOF' > app/work/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Live Media LK",
  description: "Explore our portfolio of premium photography, videography, and creative shoots.",
};

export default function WorkPage() {
  // Dummy data for the grid
  const projects = [
    { id: '1', slug: 'campaign-alpha', title: 'Campaign Alpha', category: 'Creative Shoot' },
    { id: '2', slug: 'wedding-bliss', title: 'Wedding Bliss', category: 'Photography' },
    { id: '3', slug: 'corporate-promo', title: 'Corporate Promo', category: 'Videography' },
    { id: '4', slug: 'fashion-editorial', title: 'Fashion Editorial', category: 'Creative Shoot' },
  ];

  return (
    <main className="min-h-screen py-24 px-6 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl font-bold text-primary mb-4">Portfolio</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A showcase of our best work across photography, videography, and creative campaigns.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link href={`/work/${project.slug}`} key={project.id} className="group block">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden relative mb-4">
               {/* Thumbnail placeholder */}
               <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-500">[Image: {project.title}]</span>
               </div>
            </div>
            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
            <p className="text-gray-400">{project.category}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
INNER_EOF

cat << 'INNER_EOF' > app/work/[slug]/page.tsx
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

// Dynamically generate metadata for SEO based on the slug
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // In a real app, fetch project data by slug here.
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return {
    title: `${title} | Live Media LK`,
    description: `Detailed case study for ${title}, showcasing strategy and final campaign results.`,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <main className="min-h-screen py-24">
      {/* Featured Header Image */}
      <div className="w-full h-[60vh] bg-white/10 mb-16 flex items-center justify-center">
        <span className="text-gray-500 text-2xl">[Featured Hero Image]</span>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">{title}</h1>
          
          <div className="flex gap-4 border-b border-white/10 pb-8 mb-8">
            <div>
              <span className="block text-sm text-gray-500 mb-1">Client</span>
              <span className="font-semibold">Confidential</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500 mb-1">Service</span>
              <span className="font-semibold">Creative Campaign</span>
            </div>
          </div>
        </header>

        {/* Strategy Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Strategy</h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            <p>
              This section outlines the creative approach, planning phase, and the overarching strategy employed 
              to bring this project to life. It highlights the challenges faced and the innovative solutions 
              implemented by the Live Media LK team.
            </p>
          </div>
        </section>

        {/* Campaign Results Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Campaign Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[Result Image 1]</span>
             </div>
             <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">[Result Image 2]</span>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
INNER_EOF

cat << 'INNER_EOF' > app/admin/page.tsx
"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'testimonials'>('projects');

  // FORM 1: Projects
  const handleProjectSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // --- USER IMPLEMENTATION REQUIRED ---
    // 1. Extract data from formData (Title, Description, Strategy, Thumbnail, FeaturedImages)
    // 2. Upload files (Thumbnail, FeaturedImages) to Cloudinary via your custom API/backend functions.
    // 3. Push the complete project object (with Cloudinary URLs) to your database.
    // ------------------------------------
    
    console.log("Project form submitted. Please implement backend logic.");
    alert("Project form submitted (Check console)");
  };

  // FORM 2: Testimonials
  const handleTestimonialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // --- USER IMPLEMENTATION REQUIRED ---
    // 1. Extract data from formData (ClientName, Role, Quote, Avatar)
    // 2. Upload Avatar to Cloudinary.
    // 3. Push the testimonial data to your database.
    // ------------------------------------
    
    console.log("Testimonial form submitted. Please implement backend logic.");
    alert("Testimonial form submitted (Check console)");
  };

  return (
    <main className="min-h-screen bg-neutral-900 p-8">
      <div className="max-w-4xl mx-auto bg-black border border-white/10 rounded-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-primary mb-8">CMS Dashboard</h1>

        <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'projects' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            Manage Projects
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === 'testimonials' ? 'bg-primary text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            Manage Testimonials
          </button>
        </div>

        {activeTab === 'projects' && (
          <form onSubmit={handleProjectSubmit} className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">Add New Project</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Project Title</label>
              <input type="text" name="title" required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea name="description" rows={3} required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Strategy</label>
              <textarea name="strategy" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail Image</label>
              <input type="file" name="thumbnail" accept="image/*" required className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary/80" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Featured Images (Multiple)</label>
              <input type="file" name="featuredImages" accept="image/*" multiple required className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary/80" />
            </div>
            <button type="submit" className="w-full bg-primary text-black font-bold py-3 rounded-md hover:bg-primary/90 transition-colors">
              Save Project
            </button>
          </form>
        )}

        {activeTab === 'testimonials' && (
          <form onSubmit={handleTestimonialSubmit} className="space-y-6">
            <h2 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">Add New Testimonial</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Client Name</label>
              <input type="text" name="clientName" required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Role / Company</label>
              <input type="text" name="role" required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Quote</label>
              <textarea name="quote" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:border-primary"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Avatar Image</label>
              <input type="file" name="avatar" accept="image/*" required className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary/80" />
            </div>
            <button type="submit" className="w-full bg-primary text-black font-bold py-3 rounded-md hover:bg-primary/90 transition-colors">
              Save Testimonial
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
INNER_EOF

cat << 'INNER_EOF' > components/CursorRingField.tsx
"use client";

// PLACEHOLDER: Paste your WebGL background component code here.
// The user requested: A WebGL background component named CursorRingField.tsx (code provided previously).

type Props = {
  color?: string;
};

export default function CursorRingField({ color = "#FFBF00" }: Props) {
  return (
    <div 
      className="w-full h-full flex items-center justify-center opacity-20"
      style={{ backgroundColor: `${color}20` }}
    >
      <p className="text-sm font-mono">[CursorRingField WebGL Placeholder - Color: {color}]</p>
    </div>
  );
}
INNER_EOF

cat << 'INNER_EOF' > components/TestimonialsSection.tsx
"use client";

// PLACEHOLDER: Paste your smooth infinite scroll testimonials component code here.
// The user requested: A TestimonialsSection.tsx with a smooth infinite scroll (code provided previously).

export default function TestimonialsSection() {
  return (
    <div className="w-full py-12 flex items-center justify-center border-y border-white/5 bg-white/5 overflow-hidden">
      <div className="animate-pulse flex space-x-8 whitespace-nowrap">
        <p className="text-lg text-gray-400">[TestimonialsSection Infinite Scroll Placeholder]</p>
        <p className="text-lg text-gray-400">[TestimonialsSection Infinite Scroll Placeholder]</p>
      </div>
    </div>
  );
}
INNER_EOF


