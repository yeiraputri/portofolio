"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const pathname = usePathname();

  if (pathname.startsWith("/projects")) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a
                href="#aboutMe"
                className={`
                  ${styles.navLink} 
                  hover:text-white
                  transition-colors 
                  duration-300
                `}
              >
                About
              </a>
            </li>
            <li onClick={removeActive}>
              <a
                href="#experience"
                className={`
                  ${styles.navLink} 
                  hover:text-white
                  transition-colors 
                  duration-300
                `}
              >
                Experience
              </a>
            </li>
            <li onClick={removeActive}>
              <a
                href="#projects"
                className={`
                  ${styles.navLink} 
                  hover:text-white
                  transition-colors 
                  duration-300
                `}
              >
                Projects
              </a>
            </li>
            <li onClick={removeActive}>
              <a
                href="#skills"
                className={`
                  ${styles.navLink} 
                  hover:text-white
                  transition-colors 
                  duration-300
                `}
              >
                Skills
              </a>
            </li>
          </ul>

          <div
            className={`
              ${styles.hamburger}
              ${isActive ? styles.active : ""}
            `}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
