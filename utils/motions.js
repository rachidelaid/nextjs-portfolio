const exit = {
  opacity: 0,
  scale: 0.8,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
};

export const fadeInDown = {
  hidden: {
    y: -100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit,
};

export const fadeInRight = {
  hidden: {
    x: -100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit,
};

export const fadeInLeft = {
  hidden: {
    x: 100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit,
};

export const fadeInUp = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit,
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit,
}

export const contactMotions = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}
