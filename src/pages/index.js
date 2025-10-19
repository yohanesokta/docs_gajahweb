import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroDescription}>
              Sebuah panel kontrol desktop modern berbasis Flutter untuk
              mengelola Nginx, PHP, MariaDB, PostgreSQL, dan Redis di lingkungan
              Windows.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Mulai Cepat 🚀
              </Link>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.githubButton,
                )}
                to="https://github.com/yohanesokta/WebServices-Gajah"
              >
                Lihat di GitHub
              </Link>
            </div>
            <div className={styles.heroBadges}>
              <img
                src="https://github.com/yohanesokta/WebServices-Gajah/actions/workflows/flutter-tests.yml/badge.svg"
                alt="Flutter Tests CI"
              />
              <img
                src="https://img.shields.io/badge/License-MIT-yellow.svg"
                alt="MIT License"
              />
              <img
                src="https://img.shields.io/badge/Platform-Windows-0078D6?logo=windows&logoColor=white"
                alt="Platform Windows"
              />
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.imageMockup}>
              <img
                src="https://raw.githubusercontent.com/yohanesokta/WebServices-Gajah/refs/heads/main/pages/example.jpg"
                alt="Gajah Webserver Demo"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Manajemen Web Stack Lokal Jadi Mudah`}
      description="Gajah Webserver adalah panel kontrol desktop modern berbasis Flutter untuk mengelola Nginx, PHP, MariaDB, PostgreSQL, dan Redis di lingkungan Windows."
    >
      <HomepageHeader />
    </Layout>
  );
}
