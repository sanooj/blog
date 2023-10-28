import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.empty}></div>
      <ul className={styles.nav}>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
