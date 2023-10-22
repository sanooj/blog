import React from "react";

import styles from "./FallbackLayout.module.scss";

const AsideFallback = () => {
  return (
    <aside className={styles.aside}>
      ss
      {/* <picture>
        <source srcSet={photoWebp} type='image/webp' />
        <img src={photoJpg} alt='Sanooj' />
      </picture>
      <h3 className={styles.name}>
        <span>Sanooj</span> Hussain
      </h3>
      <Badge>React Developer</Badge>
      <div className={styles.social}>
        <a
          href='https://github.com/sanooj'
          className={styles.github}
          target='_blank'
          rel='noreferrer'>
          <Icon.Github />
        </a>
        <a
          href='https://www.linkedin.com/in/sanooj007/'
          className={styles.linkedin}
          target='_blank'
          rel='noreferrer'>
          <Icon.Linkedin />
        </a>
        <a
          href='https://stackoverflow.com/users/923394/sanooj'
          className={styles["stack-overflow"]}
          target='_blank'
          rel='noreferrer'>
          <Icon.StackOverflow />
        </a>
      </div>
      <ul className={styles["contact-list"]}>
        <li>
          <Icon.Calendar3 /> April 24, 1986
        </li>
        <li>
          <Icon.GeoAlt /> Vienna, Austria
        </li>
        <li>
          <a href='mailto:sanooj007@gmail.com'>
            <Icon.EnvelopeAt /> sanooj007@gmail.com
          </a>
        </li>
        <li>
          <a href='tel:+436706591633'>
            <Icon.Telephone /> +43 670 6591633
          </a>
        </li>
        <li>
          <a href='skype:sanooj_ah?chat'>
            <Icon.Skype /> sanooj_ah
          </a>
        </li>
      </ul>

      <a href='' className={styles["download-cv"]} download>
        <Icon.Download /> Download CV
      </a> */}
    </aside>
  );
};

export default AsideFallback;
