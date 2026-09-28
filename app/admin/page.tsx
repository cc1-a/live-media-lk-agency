"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [projectData, setProjectData] = useState({ title: '', description: '', services: '' });
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [featuredImages, setFeaturedImages] = useState<File[]>([]);

  // ==========================================
  // BACKEND LOGIC - LEFT BLANK FOR YOU TO CODE
  // ==========================================

  const handleCloudinaryUpload = async (file: File, type: 'thumbnail' | 'featured') => {
    // TODO: Implement Cloudinary API upload logic here
    // 1. Fetch Cloudinary upload signature/credentials
    // 2. Post file to Cloudinary endpoint
    // 3. Return the secure_url
    return ""; 
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Firebase database logic here
    // 1. Await handleCloudinaryUpload for the thumbnail
    // 2. Await handleCloudinaryUpload for all featuredImages
    // 3. Construct project object
    // 4. Push to Firebase Firestore/Realtime DB
    // 5. Handle success/error state and reset form
    console.log("Project submitted. Database logic pending.");
  };

  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Firebase database logic here
    // 1. Upload client avatar to Cloudinary
    // 2. Push testimonial text, name, and role to Firebase
    console.log("Testimonial submitted. Database logic pending.");
  };

  // ==========================================
  // UI RENDER
  // ==========================================

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl min-h-screen text-white bg-transparent">
      <h1 className="text-4xl font-bold mb-10 text-primary">Agency CMS</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Add Project Form */}
        <section className="bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>
          <form onSubmit={handleAddProject} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Project Title</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md bg-transparent border-neutral-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition" 
                value={projectData.title}
                onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Description & Strategy</label>
              <textarea 
                className="w-full p-2 border rounded-md h-32 bg-transparent border-neutral-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition"
                value={projectData.description}
                onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Thumbnail Image (Grid)</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition cursor-pointer" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Featured Images (Project Page)</label>
              <input 
                type="file" 
                accept="image/*"
                multiple
                onChange={(e) => setFeaturedImages(Array.from(e.target.files || []))}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition cursor-pointer" 
              />
            </div>

            <Button type="submit" className="mt-4 w-full bg-primary text-black hover:bg-primary/90 font-bold">Publish Project</Button>
          </form>
        </section>

        {/* Add Testimonial Form */}
        <section className="bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-800 h-fit">
          <h2 className="text-2xl font-semibold mb-6">Add Testimonial</h2>
          <form onSubmit={handleAddTestimonial} className="flex flex-col gap-5">
             <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Client Name</label>
              <input type="text" className="w-full p-2 border rounded-md bg-transparent border-neutral-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition" required />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Role / Company</label>
              <input type="text" className="w-full p-2 border rounded-md bg-transparent border-neutral-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Quote</label>
              <textarea className="w-full p-2 border rounded-md h-24 bg-transparent border-neutral-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-neutral-400">Client Avatar</label>
              <input type="file" accept="image/*" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition cursor-pointer" required />
            </div>

            <Button type="submit" className="mt-4 w-full bg-primary text-black hover:bg-primary/90 font-bold">Add Testimonial</Button>
          </form>
        </section>
      </div>
    </div>
  );
}
