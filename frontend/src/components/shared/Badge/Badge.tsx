import React, { ReactNode } from "react";
import styles from "./Badge.module.scss";

const Badge = ({ children }: { children: ReactNode }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
