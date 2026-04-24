import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (el) => {
  if (!el) return;
  gsap.from(el, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    onComplete: () => {
      gsap.set(el, { opacity: 1, y: 0 });
    },
  });
};

export const stagger = (els) => {
  if (!els || els.length === 0) return;

  // Ensure all elements are visible before animation starts
  gsap.set(els, { opacity: 1, y: 0 });

  gsap.from(els, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: els[0],
      start: "top 85%",
    },
    onComplete: () => {
      gsap.set(els, { opacity: 1, y: 0 });
    },
  });
};
