import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import styles from "./Layout.module.scss";
import Aside from "components/Aside/Aside";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Layout = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={"...loading"}>
        <main className={styles.main}>
          <div className={styles["section-wrapper"]}>
            <Header />
            <Aside />
            <div className={styles.content}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
