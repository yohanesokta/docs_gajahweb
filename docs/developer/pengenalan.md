---
sidebar_position: 1
---

# Pengenalan

Gajah Webserver adalah panel kontrol desktop modern berbasis Flutter untuk mengelola Nginx, PHP, MariaDB, PostgreSQL, and Redis di lingkungan Windows.

Bagi para pengembang yang bekerja di Windows, mengelola beberapa layanan web secara terpisah seringkali tidak praktis. Proses memulai/menghentikan layanan, mengubah versi PHP, atau sekadar melihat log memerlukan banyak intervensi manual melalui baris perintah atau skrip yang tersebar.

**Gajah Webserver** lahir untuk menyelesaikan masalah ini dengan menyediakan antarmuka pengguna grafis (GUI) tunggal yang intuitif dan terpusat, memungkinkan pengembang untuk fokus pada pengkodean, bukan pada administrasi lingkungan lokal.

### Fitur Utama

| Fitur | Deskripsi |
| :--- | :--- |
|**Kontrol Layanan** | Memulai/menghentikan Nginx, PHP-CGI, MariaDB, PostgreSQL, dan Redis dengan satu klik. Aplikasi akan secara otomatis mendeteksi status proses dan port yang digunakan. |
| **Pengalih Versi PHP** | Mengubah versi PHP secara dinamis. Unduh versi PHP (stabil atau arsip) langsung dari API, dan aplikasi akan menangani proses pengaturan path secara otomatis. |
|**Konfigurasi Cepat** | Mengubah port default untuk setiap layanan dan membuka file konfigurasi penting (`php.ini`, `nginx.conf`, `my.ini`) langsung dari menu Pengaturan. |
| **Terminal Terintegrasi** | Memantau log dari semua layanan secara realtime dalam satu tampilan terminal terintegrasi di dalam aplikasi. Tidak perlu membuka banyak jendela `cmd`. |
| **Mode Mulus XAMPP** | Fitur unik untuk mengganti direktori `htdocs` antara lingkungan Gajah Webserver (`C:\gajahweb\htdocs`) dan instalasi XAMPP yang ada (`C:\xampp\htdocs`). |
|**Akses CLI Cepat** | Pintasan disediakan untuk membuka *antarmuka baris perintah* (CLI) seperti `psql` dan `redis-cli` dengan konteks lingkungan yang sesuai. |