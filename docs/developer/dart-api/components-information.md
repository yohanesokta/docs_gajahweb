---
sidebar_position: 16
---

# components/information.dart

File ini mendefinisikan widget yang menampilkan informasi pencatatan dan output terminal kepada pengguna.

### Kelas `Information`:
- Sebuah `StatefulWidget` yang membuat status untuk tampilan informasi/terminal.

### Kelas `_InformationState`:
- Kelas status untuk `Information`.
- **Variabel Status**:
  - `_scrollController`: `ScrollController` untuk mengelola pengguliran tampilan log.
  - `_terminalContext`: Instans `Terminalcontext` untuk mengakses pesan log.
- **`_scrollToBottom()`**:
  - Fungsi yang secara otomatis menggulir tampilan log ke bawah setiap kali pesan baru ditambahkan.
- **`initState()`**:
  - Memanggil `_checkingUsedPort()` untuk memeriksa konflik port saat startup.
  - Menambahkan pendengar ke `_terminalContext` untuk memanggil `_scrollToBottom()` setiap kali pesan log berubah.
- **`dispose()`**:
  - Menghapus pendengar dari `_terminalContext` dan membuang `_scrollController`.
- **`_checkingUsedPort()`**:
  - Secara asinkron memeriksa apakah port Nginx dan MariaDB yang dikonfigurasi sudah digunakan.
  - Jika port sedang digunakan, ia menambahkan pesan peringatan ke `Terminalcontext`.
- **`build()`**:
  - UI adalah `Container` dengan `ListView.builder`.
  - Mendapatkan `Terminalcontext` dari `Provider`.
  - `ListView.builder` menampilkan pesan log dari `terminal.terminalContext`.
  - `_scrollController` dilampirkan ke `ListView` untuk mengaktifkan pengguliran otomatis.
  - Teks ditata dengan font monospace agar menyerupai terminal.

Widget ini menyediakan mekanisme umpan balik yang penting bagi pengguna, menunjukkan status berbagai operasi dan memperingatkan mereka tentang potensi masalah seperti konflik port.