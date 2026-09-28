"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const INTRO_EASE = "cubic-bezier(0.25,1,0.5,1)";
const IMAGE_ENTRY_Y_PERCENT = 500;
const TEXT_ROTATE_X_START = 90;
const TEXT_TRANSFORM_PERSPECTIVE = 1000;
const IMAGE_Z_INDEX_DURATION = 0.1;
const IMAGE_Z_INDEX_STAGGER = 0.2;
const TEXT_STAGGER = 0.08;
const STACK_SCALE_STEP = 0.15;
const STACK_Y_PERCENT_STEP = 20;
const SPREAD_Y_PERCENT_STEP = 110;

import Link from 'next/link';

const PROJECTS = [
  { src: "/assets/work/creative_agency_work_1_1790581291706.jpg", alt: "Cyberpunk commercial photography campaign for Neonix", slug: "neonix-campaign" },
  { src: "/assets/work/creative_agency_work_2_1790581318477.jpg", alt: "Cinematic car videography for Aston Martin", slug: "aston-martin-video" },
  { src: "/assets/work/creative_agency_work_3_1790581336529.jpg", alt: "High fashion editorial photoshoot for Vogue", slug: "vogue-editorial" },
  { src: "/assets/work/creative_agency_work_4_1790581354982.jpg", alt: "Luxury product photography for Lumiere Paris", slug: "lumiere-product" },
];

export default function PastProjectsAnimation() {
  const rootRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const text1Ref = useRef<HTMLParagraphElement | null>(null);
  const text2Ref = useRef<HTMLParagraphElement | null>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const imageElements = imagesRef.current.filter(Boolean);

      const text1 = SplitText.create(text1Ref.current, { type: "words" });
      const text2 = SplitText.create(text2Ref.current, { type: "words" });
      const descriptionText = SplitText.create(descriptionTextRef.current, { type: "words,lines" });

      const animatedTextTargets = [text1.words, text2.words, descriptionText.lines];

      gsap.set(animatedTextTargets, {
        rotateX: TEXT_ROTATE_X_START,
        opacity: 0,
        transformPerspective: TEXT_TRANSFORM_PERSPECTIVE,
        transformOrigin: "50% 100%",
        willChange: "transform",
      });

      gsap.set(imageElements, { opacity: 0 });
      gsap.set(descriptionTextRef.current, { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "center 75%", // trigger when the center of the section reaches 75% of the viewport height
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(
        ".imgs-wrapper",
        { yPercent: IMAGE_ENTRY_Y_PERCENT, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, ease: INTRO_EASE }
      );

      tl.set([text1Ref.current, text2Ref.current], { opacity: 1 }, "<");

      tl.to(imageElements, { opacity: 1, duration: 0.5, ease: INTRO_EASE }, "<");

      tl.to(animatedTextTargets, {
        rotateX: 0,
        opacity: 1,
        stagger: TEXT_STAGGER,
        ease: INTRO_EASE,
      }, "<+0.5");

      imageElements.forEach((imageElement, index) => {
        tl.to(
          imageElement,
          { zIndex: index, duration: IMAGE_Z_INDEX_DURATION, ease: INTRO_EASE },
          index * IMAGE_Z_INDEX_STAGGER
        );
      });

      tl.to(imageElements, {
        scale: (index: number) => 1 + index * STACK_SCALE_STEP,
        yPercent: (index: number) => -(index * STACK_Y_PERCENT_STEP),
        duration: 1,
        stagger: { each: 0.01, from: "end" },
        ease: "power3.inOut",
      }, "<");

      tl.to(imageElements, {
        scale: 1,
        yPercent: (index: number, _target: unknown, elements: unknown[]) => {
          const totalImages = elements.length;
          if (totalImages === 1) return 0;
          const totalSpread = SPREAD_Y_PERCENT_STEP * (totalImages - 1);
          return -totalSpread / 2 + index * SPREAD_Y_PERCENT_STEP;
        },
        duration: 1,
        stagger: { each: 0.01, from: "end" },
        ease: "power3.inOut",
      }, "+=0.2");

      // Stop here! Don't fade out.

      return () => {
        text1.revert();
        text2.revert();
        descriptionText.revert();
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative z-10 flex min-h-[150vh] w-full items-center justify-center px-[2.5vw] text-white max-[1025px]:px-[5vw] max-md:px-[6vw]"
    >
      <div className="flex w-full items-center justify-between max-[1025px]:flex-col max-[1025px]:justify-center max-[1025px]:gap-[33vh] max-md:gap-[70vw]">
        <p
          ref={text1Ref}
          className="opacity-0 max-[1025px]:text-[2.8vw] max-md:text-[5vw] font-bold tracking-[0.2em]"
        >
          FEATURED
        </p>

        <div
          className="imgs-wrapper relative max-[1025px]:z-50"
          style={{
            width: `clamp(8rem, 16vw, 24rem)`,
            height: `clamp(5rem, 10vw, 15rem)`,
          }}
        >
          {PROJECTS.map((project, index) => (
            <Link
              href={`/work/${project.slug}`}
              key={`${project.src}-${index}`}
              ref={(element) => {
                if (element) imagesRef.current[index] = element;
              }}
              className="absolute top-0 left-0 size-full overflow-hidden rounded-xl opacity-0 shadow-2xl border border-primary/20 block hover:border-primary/60 transition-colors"
            >
              <img
                src={project.src}
                className="h-full w-full object-cover"
                alt={project.alt}
              />
            </Link>
          ))}
        </div>

        <p
          ref={text2Ref}
          className="opacity-0 max-[1025px]:text-[2.8vw] max-md:text-[4vw] font-bold tracking-[0.2em]"
        >
          CAMPAIGNS
        </p>
      </div>

      <p
        ref={descriptionTextRef}
        className="absolute bottom-[10vh] left-1/2 w-[40vw] -translate-x-1/2 text-center leading-[1.1] text-gray-400 opacity-0 max-[1025px]:w-[68vw] max-[1025px]:text-[2.4vw] max-md:w-[90%] max-md:text-[3.5vw]"
      >
        A curated selection of our most successful launches, showcasing uncompromising visual fidelity and strategic execution.
      </p>
    </section>
  );
}
