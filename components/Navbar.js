import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_wrapp}>
      <b
        onClick={() => router.push("/")}
      >
        team<div></div>
      </b>
      <div className={styles.menu} style={{cursor:'pointer'}}>
          <span onClick={() => router.push("/")}>
            Product
          </span>
          <span
            onClick={() => router.push("/services")}>
            Services
          </span>
          <span onClick={() => router.push("/contact")}>
            Contact
          </span>
          <span onClick={() => router.push("/login")}>
            Log in
          </span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;