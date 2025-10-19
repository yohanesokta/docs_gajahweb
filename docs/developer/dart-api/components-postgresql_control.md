---
sidebar_position: 11
---

# components/postgresql_control.dart

File ini mendefinisikan widget stateful untuk mengontrol layanan PostgreSQL.

### Kelas `Postgresqlcontrol`:
- Sebuah `StatefulWidget` yang membuat status untuk kartu kontrol PostgreSQL.

### Kelas `_PostgresqlcontrolState`:
- Kelas status untuk `Postgresqlcontrol`.
- **Variabel Status**:
  - `status`: Boolean yang melacak status berjalan dari layanan PostgreSQL.
  - `_isManualChanging`: Sebuah flag untuk mencegah status diperbarui saat operasi mulai/berhenti sedang berlangsung.
  - `_statusTimer`: Sebuah `Timer` yang secara berkala memeriksa status layanan PostgreSQL.
  - `postgresPath`: Path ke direktori biner PostgreSQL.
- **`_checkPostgresStatus()`**:
  - Secara asinkron memeriksa apakah proses `postgres.exe` berjalan menggunakan utilitas `checkProcess()`.
  - Ini memperbarui variabel status `status` yang sesuai.
- **`sendTerminal(String message)`**:
  - Fungsi pembantu untuk mengirim pesan log ke `Terminalcontext`.
- **`_triggerPostgres(bool value)`**:
  - Fungsi ini dipanggil saat `Switch` pada `ServiceControlCard` diubah.
  - Jika `value` adalah `true`, ia memulai proses `postgres.exe` dengan direktori data yang sesuai.
  - Jika `value` adalah `false`, ia mematikan proses `postgres.exe` menggunakan `killProcess()`.
  - Ini mengirim pesan log yang sesuai ke terminal.
  - Ini memperbarui status `status` dan menggunakan flag `_isManualChanging` untuk mencegah kondisi balapan.
- **`_launchPsql()`**:
  - Meluncurkan terminal interaktif PostgreSQL (`psql.exe`) di jendela terminal baru.
- **`initState()`**:
  - Menginisialisasi timer pemeriksaan status untuk berjalan setiap 2 detik.
- **`dispose()`**:
  - Membatalkan timer pemeriksaan status saat widget dibuang.
- **`build()`**:
  - Mengembalikan widget `ServiceControlCard` dengan properti yang sesuai untuk PostgreSQL:
    - `serviceName`: "PostgreSQL"
    - `statusText`: "Berjalan" atau "Berhenti"
    - `statusColor`: Hijau atau merah
    - `value`: `status` saat ini
    - `onChanged`: Fungsi `_triggerPostgres`
    - `onLaunch`: Fungsi `_launchPsql` (hanya diaktifkan jika PostgreSQL berjalan)
    - `imageAsset`: "assets/postgre.png"

Komponen ini merangkum semua logika untuk mengelola layanan PostgreSQL, menyediakan antarmuka yang konsisten dan ramah pengguna untuk memulai, menghentikan, dan berinteraksi dengannya.