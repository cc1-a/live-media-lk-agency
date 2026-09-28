"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import SlotMachine from "./SlotMachine"

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [scrollStarted, setScrollStarted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const frameCount = 96

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Preload images
  useEffect(() => {
    if (isMobile) {
      setIsLoading(false)
      return // Don't preload all 96 frames on mobile
    }

    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = `/assets/frames/frame_${i.toString().padStart(4, '0')}.webp`
      img.decode().then(() => {
        loadedCount++
        if (loadedCount === frameCount) {
          setImages(loadedImages)
          setIsLoading(false)
        }
      }).catch(() => {
        // Fallback if decode fails
        loadedCount++
        if (loadedCount === frameCount) {
          setImages(loadedImages)
          setIsLoading(false)
        }
      })
      loadedImages.push(img)
    }
  }, [isMobile])

  // Canvas drawing function
  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0 || isMobile) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    // Ensure index is within bounds
    const safeIndex = Math.min(Math.max(index, 0), images.length - 1)
    const img = images[safeIndex]
    if (!img) return
    
    // Scale image to cover the canvas (like object-fit: cover)
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
    const w = img.width * scale
    const h = img.height * scale
    const x = (canvas.width - w) / 2
    const y = (canvas.height - h) / 2

    // Draw the current frame directly
    ctx.drawImage(img, x, y, w, h)
  }

  // Handle canvas sizing on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && !isMobile) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        renderFrame(0) // Render the initial frame whenever resized
      }
    }
    
    // Check if images are ready before first draw
    if (!isLoading && !isMobile) {
      handleResize()
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isLoading, images, isMobile])

  // Framer Motion Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress (0 to 1) to frame index (0 to 95)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1])
  
  const rafRef = useRef<number | null>(null)
  const lastIndexRef = useRef(-1)

  useMotionValueEvent(frameIndex, "change", (latest) => {
    // Only render and trigger if we're done loading, and not on mobile
    if (isLoading || isMobile) return;
    
    const nextIndex = Math.round(latest);
    if (nextIndex === lastIndexRef.current) return;
    lastIndexRef.current = nextIndex;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      renderFrame(nextIndex);
    });
    
    // Trigger scroll states and audio on first substantive scroll
    if (latest > 1 && !scrollStarted) {
      setScrollStarted(true)
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e))
      }
    } else if (latest <= 1 && scrollStarted) {
      setScrollStarted(false)
    }
  })

  if (isMobile) {
    return (
      <div className="relative w-full h-[100svh] bg-black flex flex-col items-center justify-center overflow-hidden">
        <img 
          src="/assets/frames/frame_0001.webp" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />
        
        <div className="relative z-20 flex flex-col items-center text-center px-6 gap-8">
          <SlotMachine 
            text="Full-Funnel Visual Storytelling & Growth Agency."
            tag="h1"
            className="text-4xl font-bold tracking-tight text-white drop-shadow-xl"
            startFrom="bottom"
            staggerFrom="center"
            transition={{ duration: 0.8, staggerChildren: 0.04 }}
          />
          <a 
            href="#contact"
            className="bg-primary text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_40px_rgba(255,191,0,0.4)] block hover:bg-white transition-colors"
          >
            Book Call
          </a>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full bg-black ${isLoading ? "h-screen overflow-hidden" : "h-[400vh]"}`}
    >
      <audio ref={audioRef} src="/assets/welcome.mp3" preload="auto" />
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm tracking-widest uppercase animate-pulse">
            Loading Experience...
          </div>
        ) : (
          <>
            {/* The Image Sequence (Canvas) */}
            <canvas 
              ref={canvasRef} 
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" 
            />
            
            {/* Overlay gradient for better text/button readability if needed */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

            {/* SEO Hero Text (SlotMachine) */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 z-20 transition-opacity duration-700 ${scrollStarted ? 'opacity-0' : 'opacity-100'}`}>
              <SlotMachine 
                text="Full-Funnel Visual Storytelling & Growth Agency."
                tag="h1"
                className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl drop-shadow-xl"
                startFrom="bottom"
                staggerFrom="center"
                transition={{ duration: 0.8, staggerChildren: 0.04 }}
              />
            </div>

            {/* Floating Action Button - Animates from top to bottom on scroll */}
            <motion.a 
              href="#contact"
              animate={{ y: scrollStarted ? "calc(100vh - 8rem)" : "3rem" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed right-8 md:right-12 top-0 z-50 pointer-events-auto bg-primary text-black px-6 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors rounded-full shadow-[0_0_40px_rgba(255,191,0,0.4)] block"
            >
              Book Call
            </motion.a>
          </>
        )}
      </div>
    </div>
  )
}
