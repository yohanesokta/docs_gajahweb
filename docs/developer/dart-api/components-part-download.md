---
sidebar_position: 18
---

# components/part/download.dart

File ini mendefinisikan halaman "Unduh Versi PHP", di mana pengguna dapat melihat dan mengunduh berbagai versi PHP.

### Kelas `Download`:
- Sebuah `StatefulWidget` yang membuat status untuk halaman unduh.

### Kelas `_DownloadState`:
- Kelas status untuk `Download`.
- **Variabel Status**:
  - `_scrollController`: `ScrollController` untuk daftar versi PHP.
  - `isStable`: Boolean yang menentukan apakah akan menampilkan versi PHP yang stabil atau arsip.
- **`_changePHPVersion(String name, String url, String type)`**:
  - Fungsi ini dipanggil saat pengguna mengklik tombol "ubah" untuk versi PHP.
  - Menjalankan skrip `php-change-v.bat` dengan nama, URL, dan jenis versi PHP yang dipilih.
  - Skrip ini menangani pengunduhan dan ekstraksi versi PHP baru.
- **`_loadStableStatus()`**:
  - Memuat status `isStable` dari `SharedPreferences`.
- **`_changeStable(bool status)`**:
  - Menyimpan status `isStable` ke `SharedPreferences` dan memperbarui status.
- **`initState()`**:
  - Memuat status `isStable` awal.
- **`build()`**:
  - UI adalah `Scaffold` dengan `AppBar` dan `FutureBuilder`.
  - **`AppBar`**:
    - Menampilkan judul "Unduh Versi PHP".
    - Berisi `Checkbox` "Stabil" untuk beralih antara versi stabil dan arsip.
  - **`FutureBuilder`**:
    - Memanggil fungsi `getDataVersion()` dari `model/php_version.dart` untuk mengambil daftar versi PHP berdasarkan flag `isStable`.
    - Menampilkan `CircularProgressIndicator` saat data sedang dimuat.
    - Jika data berhasil dimuat, ia menampilkan `ListView.builder` dengan daftar versi PHP.
    - Setiap item dalam daftar menunjukkan nama versi dan tombol "ubah" yang memanggil `_changePHPVersion()`.
    - Jika terjadi kesalahan saat memuat data, ia menampilkan pesan "Gagal Mengambil Data".

Halaman ini menyediakan antarmuka yang ramah pengguna untuk mengelola versi PHP, yang merupakan fitur utama dari Gajah Control Panel.