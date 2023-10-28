import * as Icon from "react-bootstrap-icons";

import useGetProfileDataQuery from "api/dataFetchingHooks/queries/useGetProfileDataQuery";
import styles from "./Aside.module.scss";
import Badge from "components/shared/Badge/Badge";
import AsideFallback from "components/FallbackLayout/AsideFallback";

const Aside = () => {
  const { data, isLoading } = useGetProfileDataQuery();

  return (
    <>
      {isLoading && <AsideFallback />}
      {data && (
        <aside className={styles.aside}>
          <picture>
            <source srcSet={`/src/assets/images/${data?.image}.webp`} type='image/webp' />
            <img src={`/src/assets/images/${data?.image}.png`} alt='Sanooj' />
          </picture>
          <h3 className={styles.name}>
            <span>{data.firstName}</span> {data.lastName}
          </h3>
          <Badge>{data.designation}</Badge>
          <div className={styles.social}>
            <a href={data.github} className={styles.github} target='_blank' rel='noreferrer'>
              <Icon.Github />
            </a>
            <a href={data.linkedin} className={styles.linkedin} target='_blank' rel='noreferrer'>
              <Icon.Linkedin />
            </a>
            {data.stackoverflow && (
              <a
                href={data.stackoverflow}
                className={styles["stack-overflow"]}
                target='_blank'
                rel='noreferrer'>
                <Icon.StackOverflow />
              </a>
            )}
          </div>
          <ul className={styles["contact-list"]}>
            <li>
              <Icon.Calendar3 /> {data.dateOfBirth}
            </li>
            <li>
              <Icon.GeoAlt /> {data.currentCity}
            </li>
            <li>
              <a href={`mailto:${data.email}`} rel='noreferrer'>
                <Icon.EnvelopeAt /> {data.email}
              </a>
            </li>
            <li>
              <a href={`tel:${data.phone}`} rel='noreferrer'>
                <Icon.Telephone /> {data.phone}
              </a>
            </li>
            {data.skype && (
              <li>
                <a href={`skype:${data.skype}`} rel='noreferrer'>
                  <Icon.Skype /> {data.skype}
                </a>
              </li>
            )}
          </ul>

          <a
            href={`${import.meta.env.VITE_API_PUBLIC_URL}/files/${data.cv}`}
            className={styles["download-cv"]}
            rel='noreferrer'
            title='Download CV'
            aria-label='Download CV'
            download>
            <Icon.Download /> Download CV
          </a>
        </aside>
      )}
    </>
  );
};

export default Aside;
