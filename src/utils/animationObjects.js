export const menuSlide = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const linkVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

export const navButtonVariants = {
  initial: {
    x: "-150%",
  },
  animate: {
    x: "0%",
    transition: {
      duration: 0.3,
      delay: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "-150%",
  },
};
