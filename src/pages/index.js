import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
function HomepageHeader() {
  window.location.href = "/"; 
  const { siteConfig } = useDocusaurusContext();
  return (
    <></>
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
