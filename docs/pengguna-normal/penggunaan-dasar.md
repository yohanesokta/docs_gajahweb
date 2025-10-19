---
sidebar_position: 4
---

# Penggunaan Dasar

Setelah Anda menginstal Gajah Webserver, Anda dapat mulai mengelola layanan web Anda dengan mudah.

### Memulai dan Menghentikan Layanan

Di layar utama, Anda akan melihat kartu untuk setiap layanan yang tersedia (Nginx, MariaDB, dll.). Untuk memulai atau menghentikan layanan, cukup klik tombol sakelar di kartu yang sesuai.

- **Hijau** berarti layanan sedang berjalan.
- **Merah** berarti layanan berhenti.

### Mengubah Versi PHP

1.  Buka halaman "Unduh Versi PHP" dari menu di bilah aplikasi.
2.  Pilih apakah Anda ingin melihat versi "Stabil" atau "Arsip" dengan mencentang kotak di bagian atas.
3.  Temukan versi PHP yang Anda inginkan dalam daftar dan klik tombol "ubah".
4.  Gajah Webserver akan secara otomatis mengunduh, mengekstrak, dan mengonfigurasi versi PHP yang baru.

### Mengakses File Konfigurasi

1.  Buka halaman "Pengaturan" dari menu di bilah aplikasi.
2.  Di bawah bagian "File Konfigurasi", Anda akan menemukan tautan ke file-file penting seperti `php.ini`, `nginx.conf`, dan `my.ini`.
3.  Klik pada file yang ingin Anda edit, dan itu akan terbuka di editor teks default Anda.

### Menggunakan Terminal

1.  Di bagian bawah aplikasi, klik ikon terminal untuk menampilkan atau menyembunyikan panel terminal.
2.  Panel terminal akan menampilkan log real-time dari semua layanan Anda, membantu Anda memantau aktivitas dan men-debug masalah.

### Beralih ke Mode Mulus XAMPP

1.  Di layar utama, temukan widget "Mode Mulus XAMPP".
2.  Pilih "XAMPP" untuk mengalihkan direktori root web Anda ke instalasi XAMPP Anda.
3.  Pilih "GajahWeb" untuk kembali ke direktori default.
4.  Nginx akan secara otomatis di-restart untuk menerapkan perubahan.
