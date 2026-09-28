"use client";

import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FontStyle = React.CSSProperties;

type TransitionValue = {
    type?: string;
    duration?: number;
    delay?: number;
    ease?: string | number[];
    staggerChildren?: number;
};

type StaggerFrom = "start" | "center" | "end" | "random";
type StartFrom = "top" | "bottom";
type TextTag =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "p"
    | "span"
    | "div"
    | "section";

type Props = {
    text?: string;
    font?: FontStyle;
    color?: string;

    startFrom?: StartFrom;
    staggerFrom?: StaggerFrom;

    tag?: TextTag;
    className?: string;

    transition?: TransitionValue;
};

const startYPercentMap: Record<StartFrom, number> = {
    top: -500,
    bottom: 500,
};

const mapEase = (ease: TransitionValue["ease"]): string => {
    if (typeof ease !== "string") return "power4.out";

    const easeMap: Record<string, string> = {
        linear: "none",
        easeIn: "power2.in",
        easeOut: "power4.out",
        easeInOut: "power2.inOut",
        circIn: "circ.in",
        circOut: "circ.out",
        circInOut: "circ.inOut",
        backIn: "back.in",
        backOut: "back.out(1.7)",
        backInOut: "back.inOut",
        anticipate: "back.out(1.7)",
    };

    return easeMap[ease] ?? ease;
};

function __OriginkitBase_SlotMachine({
    text = "Rolling Letters",
    font = {},
    color = "#ffffff",

    startFrom = "top",
    staggerFrom = "start",

    tag = "h1",
    className,

    transition = {
        type: "tween",
        duration: 0.6,
        delay: 0,
        ease: "easeOut",
        staggerChildren: 0.08,
    },
}: Props) {
    const containerRef = useRef<HTMLElement>(null);

    const playAnimation = useCallback(() => {
        if (!containerRef.current) return;

        const chars = containerRef.current.querySelectorAll(".char");

        gsap.killTweensOf(chars);

        gsap.set(chars, {
            clearProps: "transform",
            yPercent: startYPercentMap[startFrom], // ensure they start hidden
        });

        // Use ScrollTrigger so it waits until it's in view
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%", // Start when top of element hits 90% of screen
            onEnter: () => {
                gsap.to(chars, {
                    yPercent: 0,
                    duration: transition.duration ?? 0.6,
                    delay: transition.delay ?? 0,
                    stagger: {
                        each: transition.staggerChildren ?? 0.08,
                        from: staggerFrom,
                    },
                    ease: mapEase(transition.ease),
                });
            },
            once: true, // Only play once
        });
    }, [startFrom, staggerFrom, transition]);

    useEffect(() => {
        playAnimation();
    }, [text, playAnimation]);

    return React.createElement(
        tag,
        {
            ref: containerRef,
            style: {
                margin: 0,
                display: "block",
                overflow: "hidden",
                whiteSpace: "pre-wrap",
                color,
                ...font,
            },
            className
        },
        text.split("").map((char, index) => (
            <span
                key={index}
                className="char"
                style={{
                    display: "inline-block",
                }}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ))
    );
}

const __originkitPresetProps = {
  "text": "ROLLING LETTERS",
  "startFrom": "bottom",
  "staggerFrom": "center"
};

export default function SlotMachine(props: Props) {
  return <__OriginkitBase_SlotMachine {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}
