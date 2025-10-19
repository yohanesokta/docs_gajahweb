---
sidebar_position: 14
---

# components/mariadb_control.dart

File ini mendefinisikan widget stateful untuk mengontrol server basis data MariaDB.

### Kelas `Mariadbcontrol`:
- Sebuah `StatefulWidget` yang membuat status untuk kartu kontrol MariaDB.

### Kelas `_MariadbcontrolState`:
- Kelas status untuk `Mariadbcontrol`.
- **Variabel Status**:
  - `status`: Boolean yang melacak status berjalan dari layanan MariaDB.
  - `_isManualChanging`: Sebuah flag untuk mencegah status diperbarui saat operasi mulai/berhenti sedang berlangsung.
  - `_statusTimer`: Sebuah `Timer` yang secara berkala memeriksa status layanan MariaDB.
  - `_dialogShown`: Sebuah flag untuk memastikan bahwa dialog peringatan hanya ditampilkan sekali.
- **`sendTerminal(String message)`**:
  - Fungsi pembantu untuk mengirim pesan log ke `Terminalcontext`.
- **`_triggerMariaDB(bool value)`**:
  - Fungsi ini dipanggil saat `Switch` pada `ServiceControlCard` diubah.
  - Jika `value` adalah `true`, ia memulai proses `mysqld.exe`.
  - Jika `value` adalah `false`, ia mematikan proses `mysqld.exe`.
  - Ini mengirim pesan log yang sesuai ke terminal.
- **`_checkMariadbStatus()`**:
  - Ini adalah fungsi pemeriksaan status yang lebih kompleks.
  - Memeriksa apakah proses `mysqld.exe` berjalan.
  - Memeriksa apakah port MariaDB yang dikonfigurasi sedang digunakan.
  - Menangani berbagai skenario:
    - Jika port digunakan oleh proses lain, ia menampilkan dialog peringatan.
    - Jika proses `mysqld.exe` berjalan tetapi tidak pada port yang dikonfigurasi, ia menampilkan peringatan dan mematikan proses tersebut.
    - Mengatur ulang flag `_dialogShown` saat situasi teratasi.
  - Ini memperbarui variabel status `status` berdasarkan status proses.
- **`_launchPhpMyAdmin()`**:
  - Meluncurkan browser web default ke antarmuka phpMyAdmin.
- **`initState()`**:
  - Menginisialisasi timer pemeriksaan status untuk berjalan setiap 2 detik.
- **`dispose()`**:
  - Membatalkan timer pemeriksaan status saat widget dibuang.
- **`build()`**:
  - Mengembalikan widget `ServiceControlCard` dengan properti yang sesuai untuk MariaDB:
    - `serviceName`: "MariaDB"
    - `statusText`: "Berjalan" atau "Berhenti"
    - `statusColor`: Hijau atau merah
    - `value`: `status` saat ini
    - `onChanged`: Fungsi `_triggerMariaDB`
    - `onLaunch`: Fungsi `_launchPhpMyAdmin` (hanya diaktifkan jika MariaDB berjalan)
    - `imageAsset`: "assets/mariadb.png"

Komponen ini menyediakan kontrol yang kuat atas layanan MariaDB, termasuk deteksi konflik dan pemberitahuan pengguna.