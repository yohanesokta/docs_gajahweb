---
sidebar_position: 3
---

# Skrip Pengaturan: `setup.bat`

Skrip `setup.bat` mengotomatiskan pengunduhan dan konfigurasi awal dari tumpukan web lokal yang diperlukan oleh Gajah Webserver. Ini menyediakan pengaturan sekali klik untuk mendapatkan lingkungan pengembangan lokal yang lengkap dan telah dikonfigurasi sebelumnya, siap digunakan dengan aplikasi Gajah Webserver, tanpa memerlukan pengunduhan atau konfigurasi manual.

## Langkah-langkah Utama

Skrip melakukan langkah-langkah utama berikut:

1.  **Pembuatan Direktori**: Membuat struktur direktori utama di bawah `C:\gajahweb`, termasuk subfolder untuk dokumen web (`htdocs`), file sementara (`tmp`), dan data variabel (`var`).

2.  **Ekstraksi Konfigurasi**: Mengekstrak file `config.zip`, yang berisi file konfigurasi yang telah ditentukan sebelumnya untuk layanan seperti Nginx (`nginx.conf`), PHP (`php.ini`), dan phpMyAdmin.

3.  **Pengunduhan Layanan**: Secara berurutan mengunduh dan mengekstrak biner untuk layanan berikut dari rilis GitHub:
    *   Nginx (server web)
    *   PHP (bahasa skrip)
    *   MariaDB (server basis data)
    *   phpMyAdmin (alat admin basis data)
    *   Redis (penyimpanan data dalam memori)
    *   HeidiSQL (klien basis data)
    *   PostgreSQL (server basis data)
    *   Apache (server web)

4.  **Konfigurasi Awal**:
    *   Memindahkan layanan yang diunduh ke direktori masing-masing di dalam `C:\gajahweb`.
    *   Mengganti file konfigurasi default Nginx dan PHP dengan yang diekstrak dari `config.zip`.
    *   Menginisialisasi direktori data MariaDB menggunakan `mariadb-install-db.exe`.
    *   Menyiapkan phpMyAdmin dan `index.php` default untuk root web.

5.  **Pembersihan**: Setelah semua pengunduhan dan pengaturan selesai, ia menghapus file `.zip` sementara dan direktori `config` dan `tmp` yang diekstrak untuk menjaga kebersihan instalasi.

6.  **Pencatatan**: Membuat file `install.log`, mencatat versi perangkat lunak yang diinstal.