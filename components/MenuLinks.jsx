import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/MenuLinks.module.css';

const currentMotions = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const linksMotions = {
  hidden: {
    x: 130,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
];

const MenuLinks = ({ open, toggleMenu }) => {
  const router = useRouter();

  const currentLink = () => {
    if (router.pathname.includes('projects')) return 'Projects';

    return links.find((l) => l.path === router.pathname)
      ? links.find((l) => l.path === router.pathname).name
      : 'No Page';
  };

  return (
    <div className={styles.links}>
      <AnimatePresence>
        {!open && (
          <motion.div
            key="currentRoute"
            className={styles.current}
            variants={currentMotions}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {currentLink()}
          </motion.div>
        )}

        {open && (
          <motion.ul
            className={styles.nav}
            variants={currentMotions}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {links.map((link) => (
              <motion.li
                key={link.path}
                className={`${
                  router.pathname === link.path ? styles.active : ''
                }`}
                variants={linksMotions}
                onClick={() => toggleMenu()}
              >
                <Link href={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuLinks;
