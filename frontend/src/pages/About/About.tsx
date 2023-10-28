import styles from "./About.module.scss";
import useGetProfileDataQuery from "api/dataFetchingHooks/queries/useGetProfileDataQuery";
/**
 * Renders the About component.
 *
 * @returns The About component.
 */
const About = () => {
  const { data, isLoading } = useGetProfileDataQuery();
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <>
        {isLoading && <div>Loading...</div>}
        <div
          className={styles["about-container"]}
          dangerouslySetInnerHTML={{ __html: data?.about }}></div>
      </>
    </div>
  );
};

export default About;
