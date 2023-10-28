import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.empty}></div>
      <ul className={styles.nav}>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/resume' className={({ isActive }) => (isActive ? styles.active : "")}>
            Resume
          </NavLink>
        </li>
        {/* <li>
          <Link to='/blogs'>Blogs</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;
