import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Fade in up animation (for scroll reveal)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Stagger container animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

// Pop animation
export const popAnimation: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (custom = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  })
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};
