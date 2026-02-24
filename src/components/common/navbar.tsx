"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => setIsActive((v) => !v);
  const removeActive = () => setIsActive(false);

  const pathname = usePathname();
  if (pathname.startsWith("/projects")) return null;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary">
        <a href="#aboutMe" className={styles.brand} onClick={removeActive}>
          Yeira Putri Nandika
        </a>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
          aria-label={isActive ? "Close menu" : "Open menu"}
          aria-expanded={isActive}
          aria-controls="nav-menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>
    </header>
  );
}