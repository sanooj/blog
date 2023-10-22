import React from "react";
import styles from "./FallbackLayout.module.scss";
import HeaderFallback from "./HeaderFallback";
import AsideFallback from "./AsideFallback";

const FallbackLayout = () => {
  return (
    <main className={styles.main}>
      <div className={styles["section-wrapper"]}>
        <HeaderFallback />
        <AsideFallback />
        <div className={styles.content}></div>
      </div>
    </main>
  );
};

export default FallbackLayout;
