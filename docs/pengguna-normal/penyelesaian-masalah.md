---
sidebar_position: 5
---

# Penyelesaian Masalah

Berikut adalah beberapa masalah umum yang mungkin Anda hadapi dan cara menyelesaikannya.

### Layanan Tidak Dapat Dimulai

Jika salah satu layanan (misalnya, Nginx, MariaDB) tidak dapat dimulai, coba langkah-langkah berikut:

1.  **Periksa Konflik Port**:
    - Buka panel terminal di Gajah Webserver.
    - Cari pesan yang menunjukkan bahwa port sudah digunakan (misalnya, "port 80 already in use").
    - Jika ada konflik port, buka halaman "Pengaturan" dan ubah port untuk layanan yang bermasalah.
    - Atau, hentikan aplikasi lain yang menggunakan port tersebut.

2.  **Periksa Log Terminal**:
    - Panel terminal seringkali memberikan pesan kesalahan yang spesifik. Cari pesan kesalahan yang dapat membantu Anda mengidentifikasi masalahnya.

3.  **Jalankan sebagai Administrator**:
    - Coba jalankan Gajah Webserver sebagai administrator. Klik kanan pada file `.exe` dan pilih "Run as administrator".

### Kesalahan Saat Mengunduh Versi PHP

Jika Anda mengalami kesalahan saat mengunduh versi PHP baru:

1.  **Periksa Koneksi Internet Anda**: Pastikan Anda terhubung ke internet.
2.  **Coba Lagi**: Terkadang, unduhan bisa gagal karena masalah jaringan sementara. Coba unduh lagi nanti.

### Tampilan Aplikasi Tidak Benar

Jika antarmuka pengguna tidak ditampilkan dengan benar:

1.  **Restart Aplikasi**: Tutup dan buka kembali Gajah Webserver.
2.  **Pastikan Prasyarat Terpenuhi**: Pastikan Anda telah menginstal semua prasyarat yang diperlukan, terutama **Visual C++ Redistributable**, seperti yang disebutkan di halaman [Pra-Instalasi](./pra-installasi.md).

Jika Anda masih mengalami masalah, jangan ragu untuk membuat [isu baru](https://github.com/yohanesokta/WebServices-Gajah/issues) di repositori GitHub kami.
