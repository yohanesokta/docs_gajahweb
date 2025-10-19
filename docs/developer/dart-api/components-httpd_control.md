---
sidebar_position: 15
---

# components/httpd_control.dart

File ini mendefinisikan widget stateful untuk mengontrol Server HTTP Apache (httpd).

### Kelas `HttpdControl`:
- Sebuah `StatefulWidget` yang membuat status untuk kartu kontrol Apache.

### Kelas `_HttpdControlState`:
- Kelas status untuk `HttpdControl`.
- **Variabel Status**:
  - `status`: Boolean yang melacak status berjalan dari layanan Apache.
  - `_isManualChanging`: Sebuah flag untuk mencegah status diperbarui saat operasi mulai/berhenti sedang berlangsung.
  - `_statusTimer`: Sebuah `Timer` yang secara berkala memeriksa status layanan Apache.
- **`sendTerminal(String message)`**:
  - Fungsi pembantu untuk mengirim pesan log ke `Terminalcontext`.
- **`_checkHttpdStatus()`**:
  - Secara asinkron memeriksa apakah proses `httpd.exe` berjalan menggunakan utilitas `checkProcess()`.
  - Ini memperbarui variabel status `status` yang sesuai.
- **`_startHttpd(bool value)`**:
  - Fungsi ini dipanggil saat `Switch` pada `ServiceControlCard` diubah.
  - Jika `value` adalah `true` (mulai), ia memulai proses `httpd.exe` dengan file konfigurasi yang sesuai.
  - Jika `value` adalah `false` (berhenti), ia mematikan proses `httpd.exe`.
  - Ini mengirim pesan log yang sesuai ke terminal.
  - Ini memperbarui status `status` dan menggunakan flag `_isManualChanging` untuk mencegah kondisi balapan.
- **`_launchUrl()`**:
  - Meluncurkan browser web default ke `http://localhost` dengan port Apache yang dikonfigurasi.
- **`initState()`**:
  - Menginisialisasi timer pemeriksaan status untuk berjalan setiap 2 detik.
- **`dispose()`**:
  - Membatalkan timer pemeriksaan status saat widget dibuang.
- **`build()`**:
  - Mengembalikan widget `ServiceControlCard` dengan properti yang sesuai untuk Apache:
    - `serviceName`: "Apache"
    - `statusText`: "Berjalan" atau "Berhenti"
    - `statusColor`: Hijau atau merah
    - `value`: `status` saat ini
    - `onChanged`: Fungsi `_startHttpd`
    - `onLaunch`: Fungsi `_launchUrl` (hanya diaktifkan jika Apache berjalan)
    - `imageAsset`: "assets/httpd.png"

Komponen ini menyediakan solusi lengkap untuk mengelola server web Apache.