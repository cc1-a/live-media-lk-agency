"use client"

import { motion } from 'framer-motion'
import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import CursorRingField from './CursorRingField'

interface StatProps {
  value: string
  label: string
  icon: React.ReactNode
}

interface ActionProps {
  text: string
  onClick: () => void
  variant?: ButtonProps['variant']
  className?: string
}

interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  actions: ActionProps[]
  stats: StatProps[]
  images: string[]
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const HeroSection = ({ title, subtitle, actions, stats, className }: HeroSectionProps) => {
  return (
    <section className={cn('relative w-full min-h-screen overflow-hidden bg-background py-12 sm:py-24 flex items-center justify-center', className)}>
      <CursorRingField 
        background="#000000"
        colors={["#FFBF00", "#FFD700", "#B8860B"]} 
      />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Flickering Text - We use Tailwind custom animation defined in config */}
          <motion.h1
            className="text-6xl md:text-8xl font-black uppercase tracking-widest text-primary animate-neon-flicker"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p className="mt-8 max-w-2xl text-xl text-neutral-300" variants={itemVariants}>
            {subtitle}
          </motion.p>
          
          <motion.div className="mt-10 flex flex-wrap justify-center gap-6" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={action.className}>
                {action.text}
              </Button>
            ))}
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div className="mt-16 flex flex-wrap justify-center gap-12" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm font-medium text-neutral-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
