import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import about from "../pages/about/about.js";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
      </ul>
    </nav>
  );
}