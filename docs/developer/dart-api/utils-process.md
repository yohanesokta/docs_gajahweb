---
sidebar_position: 6
---

# utils/process.dart

File ini menyediakan sekumpulan fungsi utilitas untuk berinteraksi dengan proses sistem dan port jaringan.

### Fungsi `checkProcess(String nameProcess)`:
- Secara asinkron memeriksa apakah proses dengan nama yang diberikan saat ini berjalan di sistem.
- Menggunakan perintah `tasklist` di Windows untuk mendapatkan daftar proses yang berjalan.
- Mengembalikan `true` jika proses ditemukan, dan `false` jika sebaliknya.

### Fungsi `startProgram(String path, List<String> arguments)`:
- Secara asinkron memulai program di `path` yang diberikan dengan `arguments` yang ditentukan.
- Menggunakan `Process.start` dengan `ProcessStartMode.detached` untuk meluncurkan program sebagai proses terpisah, memungkinkannya berjalan secara independen dari aplikasi utama.

### Fungsi `killProcess(String nameProcess)`:
- Secara asinkron menghentikan proses dengan nama yang diberikan.
- Menggunakan perintah `taskkill.exe` di Windows dengan flag `/F` (paksa) dan `/IM` (nama gambar).
- Mengembalikan `true` jika perintah berhasil dieksekusi, dan `false` jika sebaliknya.

### Fungsi `isPortAvailable(String port)`:
- Secara asinkron memeriksa apakah `port` jaringan yang diberikan tersedia.
- Mencoba untuk mengikat `ServerSocket` ke port yang ditentukan.
- Jika pengikatan berhasil, itu berarti port tersedia, dan fungsi mengembalikan `true`.
- Jika terjadi `SocketException`, itu berarti port sudah digunakan, dan fungsi mengembalikan `false`.

Fungsi-fungsi ini penting untuk fungsionalitas inti Gajah Control Panel, yang memungkinkannya mengelola siklus hidup layanan web dan memeriksa statusnya.