---
sidebar_position: 13
---

# components/nginx_control.dart

File ini mendefinisikan widget stateful untuk mengontrol server web Nginx.

### Kelas `Nginxcontrol`:
- Sebuah `StatefulWidget` yang membuat status untuk kartu kontrol Nginx.

### Kelas `_NginxcontrolState`:
- Kelas status untuk `Nginxcontrol`.
- **Variabel Status**:
  - `status`: Boolean yang melacak status berjalan dari layanan Nginx.
  - `_isManualChanging`: Sebuah flag untuk mencegah status diperbarui saat operasi mulai/berhenti sedang berlangsung.
  - `_statusTimer`: Sebuah `Timer` yang secara berkala memeriksa status layanan Nginx.
- **`sendTerminal(String message)`**:
  - Fungsi pembantu untuk mengirim pesan log ke `Terminalcontext`.
- **`_checkNginxStatus()`**:
  - Secara asinkron memeriksa apakah proses `nginx.exe` berjalan menggunakan utilitas `checkProcess()`.
  - Ini memperbarui variabel status `status` yang sesuai.
- **`_startNginx(bool value)`**:
  - Fungsi ini dipanggil saat `Switch` pada `ServiceControlCard` diubah.
  - Jika `value` adalah `true` (mulai), ia memulai `nginx.exe` dan `php-cgi.exe`.
  - Jika `value` adalah `false` (berhenti), ia menghentikan `nginx.exe` dan mematikan proses `nginx.exe` dan `php-cgi.exe`.
  - Ini mengirim pesan log yang sesuai ke terminal.
  - Ini memperbarui status `status` dan menggunakan flag `_isManualChanging` untuk mencegah kondisi balapan.
- **`_launchUrl()`**:
  - Meluncurkan browser web default ke `http://localhost` dengan port Nginx yang dikonfigurasi.
- **`initState()`**:
  - Menginisialisasi timer pemeriksaan status untuk berjalan setiap 2 detik.
- **`dispose()`**:
  - Membatalkan timer pemeriksaan status saat widget dibuang.
- **`build()`**:
  - Mengembalikan widget `ServiceControlCard` dengan properti yang sesuai untuk Nginx:
    - `serviceName`: "Nginx"
    - `statusText`: "Berjalan" atau "Berhenti"
    - `statusColor`: Hijau atau merah
    - `value`: `status` saat ini
    - `onChanged`: Fungsi `_startNginx`
    - `onLaunch`: Fungsi `_launchUrl` (hanya diaktifkan jika Nginx berjalan)
    - `imageAsset`: "assets/nginx.png"

Komponen ini menyediakan solusi lengkap untuk mengelola server web Nginx dan proses PHP-CGI terkait.