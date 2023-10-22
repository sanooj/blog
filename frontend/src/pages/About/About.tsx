import React from "react";
import styles from "./About.module.scss";
/**
 * Renders the About component.
 *
 * @returns The About component.
 */
const About = () => {
  // Render the About component with the specified CSS class.
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
        and print media. I enjoy turning complex problems into simple, beautiful and intuitive
        designs.{" "}
      </p>
      <p>
        My job is to build your website so that it is functional and user-friendly but at the same
        time attractive. Moreover, I add personal touch to your product and make sure that is
        eye-catching and easy to use. My aim is to bring across your message and identity in the
        most creative way. I created web design for many famous brand companies.
      </p>
    </div>
  );
};

export default About;
