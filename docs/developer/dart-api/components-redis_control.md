---
sidebar_position: 10
---

# components/redis_control.dart

File ini mendefinisikan widget stateful untuk mengontrol layanan Redis.

### Kelas `Rediscontrol`:
- Sebuah `StatefulWidget` yang membuat status untuk kartu kontrol Redis.

### Kelas `_RediscontrolState`:
- Kelas status untuk `Rediscontrol`.
- **Variabel Status**:
  - `status`: Boolean yang melacak status berjalan dari layanan Redis.
  - `_isManualChanging`: Sebuah flag untuk mencegah status diperbarui saat operasi mulai/berhenti sedang berlangsung.
  - `_statusTimer`: Sebuah `Timer` yang secara berkala memeriksa status layanan Redis.
  - `redisPath`: Path ke direktori instalasi Redis.
- **`_checkRedisStatus()`**:
  - Secara asinkron memeriksa apakah proses `redis-server.exe` berjalan menggunakan utilitas `checkProcess()`.
  - Ini memperbarui variabel status `status` yang sesuai.
- **`sendTerminal(String message)`**:
  - Fungsi pembantu untuk mengirim pesan log ke `Terminalcontext`.
- **`_triggerRedis(bool value)`**:
  - Fungsi ini dipanggil saat `Switch` pada `ServiceControlCard` diubah.
  - Jika `value` adalah `true`, ia memulai proses `redis-server.exe`.
  - Jika `value` adalah `false`, ia mematikan proses `redis-server.exe` menggunakan `killProcess()`.
  - Ini mengirim pesan log yang sesuai ke terminal.
  - Ini memperbarui status `status` dan menggunakan flag `_isManualChanging` untuk mencegah kondisi balapan.
- **`_launchRedisCli()`**:
  - Meluncurkan antarmuka baris perintah Redis (`redis-cli.exe`) di jendela terminal baru.
- **`initState()`**:
  - Menginisialisasi timer pemeriksaan status untuk berjalan setiap 2 detik.
- **`dispose()`**:
  - Membatalkan timer pemeriksaan status saat widget dibuang.
- **`build()`**:
  - Mengembalikan widget `ServiceControlCard` dengan properti yang sesuai untuk Redis:
    - `serviceName`: "Redis"
    - `statusText`: "Berjalan" atau "Berhenti"
    - `statusColor`: Hijau atau merah
    - `value`: `status` saat ini
    - `onChanged`: Fungsi `_triggerRedis`
    - `onLaunch`: Fungsi `_launchRedisCli` (hanya diaktifkan jika Redis berjalan)
    - `imageAsset`: "assets/redis.png"

Komponen ini merangkum semua logika untuk mengelola layanan Redis, mulai dari memeriksa statusnya hingga memulai dan menghentikannya, dan menyediakan antarmuka yang ramah pengguna untuk berinteraksi dengannya.