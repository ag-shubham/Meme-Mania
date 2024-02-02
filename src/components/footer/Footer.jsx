import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 MemeMania by <Link href='https://github.com/ag-shubham'>Shubham Agarwal 🐱‍💻</Link></p>
    </footer>
  );
};

export default Footer;
