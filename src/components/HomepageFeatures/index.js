// src/pages/index.jsx
import React, { useEffect } from "react";
import Head from "@docusaurus/Head";

export default function Home() {
  useEffect(() => {
    // === Reveal animation observer ===
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealElements.forEach((el) => observer.observe(el));

    // === Cursor glow ===
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Head>
        <title>
          Gajah Webserver - Server Lokal Super Cepat untuk Developer Modern
        </title>
        <meta
          name="description"
          content="Gajah Webserver adalah server lokal untuk Windows dengan Nginx, Multi-PHP, MariaDB, Redis, dan integrasi Flutter. Ringan, cepat, dan open-source."
        />
        <meta
          property="og:image"
          content="https://www.gajahweb.tech/example.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="twitter:image"
          content="https://www.gajahweb.tech/example.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="Gajah Webserver, web server Windows, server lokal, Nginx, PHP, MariaDB, Redis, Flutter, alternatif XAMPP, Laragon"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Gajah Webserver",
            "operatingSystem": "Windows 10, Windows 11",
            "applicationCategory": "DeveloperTool",
            "description": "Gajah Webserver adalah server lokal untuk Windows dengan Nginx, Multi-PHP, MariaDB, Redis, dan Flutter. Ringan, cepat, dan open-source.",
            "softwareVersion": "2.0",
            "license": "https://opensource.org/licenses/MIT",
            "downloadUrl": "https://github.com/yohanesokta/WebServices-Gajah/releases/download/v2.0/gajah-web-setup.exe",
            "author": { "@type": "Person", "name": "Yohanes Oktanio" }
          }
        `}</script>
      </Head>

      {/* === HERO SECTION === */}
      <header className="hero">
        <div className="container reveal">
          <img
            src="./assets/Gajah Web.png"
            alt="Logo Gajah Webserver"
            width="180"
            style={{ marginBottom: "1.5rem" }}
          />
          <h1>Gajah Webserver</h1>
          <p>
            Server lokal super cepat untuk developer modern. Setup Nginx,
            Multi-PHP, MariaDB, dan Redis dengan satu klik. Ringan, bertenaga,
            dan siap untuk proyek masa depan Anda.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/yohanesokta/WebServices-Gajah/releases/download/v2.0/gajahweb-setup.exe"
              className="btn btn-primary"
            >
              Unduh Versi Terbaru
            </a>
            <a
              href="https://github.com/yohanesokta/WebServices-Gajah"
              className="btn btn-secondary"
            >
              Lihat di GitHub
            </a>
          </div>
        </div>
      </header>

      {/* === FEATURES SECTION === */}
      <main>
        <section id="features" className="container">
          <h2 className="section-title reveal">Tumpukan Teknologi Modern</h2>
          <div className="features-grid">
            {/* === Feature Card 1 === */}
            <div className="feature-card reveal">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.25a2.25 2.25 0 0 1-1.07 1.9l-7.5 4.6a2.25 2.25 0 0 1-2.36 0l-7.5-4.6a2.25 2.25 0 0 1-1.07-1.9V6.75"
                />
              </svg>
              <h3>Nginx Super Cepat</h3>
              <p>
                Ditenagai oleh Nginx, web server asinkronus yang dikenal ringan
                dan efisien. Menangani ribuan koneksi dengan performa luar
                biasa.
              </p>
            </div>

            {/* === Feature Card 2 === */}
            <div className="feature-card reveal">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <h3>Multi-PHP Fleksibel</h3>
              <p>
                Ganti versi PHP kapan pun Anda mau — dari 8.3 ke 7.4 atau bahkan
                5.6. Cocok untuk <strong>maintenance</strong> proyek lama dan
                uji kompatibilitas berbagai framework.
              </p>
            </div>

            {/* === Feature Card 3 === */}
            <div className="feature-card reveal">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75"
                />
              </svg>
              <h3>MariaDB & Redis</h3>
              <p>
                Gunakan MariaDB yang sepenuhnya kompatibel MySQL, ditambah Redis
                untuk caching dan session management super cepat. Ideal untuk
                proyek berskala besar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer>
        <div className="container reveal">
          <p>&copy; 2025 Gajah Webserver. Dirilis di bawah MIT License.</p>
          <p>
            <a href="https://github.com/yohanesokta/WebServices-Gajah">
              Dokumentasi
            </a>{" "}
            •{" "}
            <a href="https://github.com/yohanesokta/WebServices-Gajah/issues">
              Laporkan Bug
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
