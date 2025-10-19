---
sidebar_position: 12
---

# components/part/settings.dart

File ini mendefinisikan halaman pengaturan aplikasi, di mana pengguna dapat mengonfigurasi port untuk berbagai layanan dan mengakses file konfigurasi penting.

### Kelas `Settings`:
- Sebuah `StatefulWidget` yang membuat status untuk halaman pengaturan.

### Kelas `_SettingsState`:
- Kelas status untuk `Settings`.
- **Variabel Status**:
  - `_nginxPort`, `_mariadbPort`, `_postgresqlPort`: `TextEditingController` untuk bidang input nomor port.
  - `_htdocsPath`: Path ke direktori `htdocs`.
  - `onEdits`: Boolean untuk melacak apakah ada pengaturan yang telah diubah.
  - `preferences`: Instans `SharedPreferences` untuk menyimpan dan mengambil pengaturan.
- **`_initializationVars()`**:
  - Menginisialisasi status dengan memuat nomor port yang disimpan dan path `htdocs` dari `SharedPreferences`.
- **`_applySettings()`**:
  - Fungsi ini dipanggil saat tombol "Terapkan" ditekan.
  - Membandingkan nomor port saat ini dengan yang disimpan.
  - Jika nomor port telah berubah, ia menjalankan skrip batch yang sesuai (`nginx-port.bat`, `mariadb-port.bat`, `postgres-port.bat`) untuk memperbarui file konfigurasi.
  - Menyimpan nomor port baru ke `SharedPreferences`.
  - Mengatur `onEdits` ke `false` setelah menerapkan pengaturan.
- **`_openFilesNotepad(String filePath)`**:
  - Membuka file konfigurasi yang ditentukan di Notepad.
- **`build()`**:
  - UI adalah `Scaffold` dengan `AppBar` dan `ListView`.
  - **`AppBar`**:
    - Menampilkan judul "Pengaturan".
    - Berisi tombol "Terapkan" yang hanya diaktifkan saat `onEdits` adalah `true`.
  - **`ListView`**:
    - **Bagian Port**:
      - Wadah yang dikelompokkan dengan bidang input untuk port Nginx, MariaDB, dan PostgreSQL.
    - **Bagian File Konfigurasi**:
      - Wadah yang dikelompokkan dengan tautan untuk membuka `php.ini`, `nginx.conf`, `my.ini`, dan `httpd.conf` di Notepad.
- **Widget Pembantu**:
  - `_buildSectionTitle()`: Widget pembantu untuk membuat judul bagian.
  - `_buildGroupedContainer()`: Widget pembantu untuk membuat gaya wadah yang dikelompokkan.
  - `_buildPortSetting()`: Widget pembantu untuk membuat baris pengaturan port.
  - `_buildFileLink()`: Widget pembantu untuk membuat baris tautan file.
  - `_buildDivider()`: Widget pembantu untuk membuat pembatas.

Halaman ini menyediakan lokasi terpusat bagi pengguna untuk menyesuaikan lingkungan pengembangan lokal mereka.