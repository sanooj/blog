import styles from "./Aside.module.scss";
import photoJpg from "assets/images/pic.jpg";
import photoWebp from "assets/images/pic.webp";
import Badge from "components/shared/Badge/Badge";

const Aside = () => {
  return (
    <div className={styles.aside}>
      <picture>
        <source srcSet={photoWebp} type='image/webp' />
        <img src={photoJpg} alt='Sanooj' />
      </picture>
      <h3 className={styles.name}>
        <span>Sanooj</span> Hussain
      </h3>
      <Badge>React Developer</Badge>
    </div>
  );
};

export default Aside;
