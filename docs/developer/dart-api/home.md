---
sidebar_position: 2
---

# home.dart

File ini mendefinisikan layar utama aplikasi Gajah Control Panel.

### Kelas `HomeApp`:
- Sebuah `StatefulWidget` yang membuat status untuk layar beranda.

### Kelas `_HomeAppState`:
- Kelas status untuk `HomeApp`.
- Mengelola visibilitas tampilan terminal (`_isTerminalVisible`).
- Di `initState()`, ia memanggil `getConfig()` untuk memuat konfigurasi aplikasi.

### Tata Letak UI:
- Tata letak utama adalah `Scaffold` dengan `AppBar`, `body`, `bottomSheet`, dan `bottomNavigationBar`.
- **`AppBar`**:
  - Menampilkan judul "Control Panel".
  - Berisi tombol aksi untuk:
    - Mengunduh versi PHP (`/download`).
    - Memeriksa pembaruan (menampilkan dialog dan dapat meluncurkan halaman rilis GitHub).
    - Menavigasi ke halaman pengaturan (`/settings`).
- **`body`**:
  - Sebuah `SingleChildScrollView` yang berisi konten utama.
  - **Bagian Layanan**:
    - Menampilkan judul "Layanan".
    - Sebuah `GridView` yang secara dinamis mengatur widget kontrol layanan (`HttpdControl`, `Nginxcontrol`, `Mariadbcontrol`, `Postgresqlcontrol`, `Rediscontrol`) dalam grid yang responsif.
  - **Bagian Utilitas**:
    - Menampilkan judul "Utilitas".
    - Termasuk widget `Xamppsameless` untuk integrasi XAMPP.
    - Menyediakan `_UtilityButton` untuk meluncurkan HeidiSQL dan membuka folder `htdocs`.
- **`bottomSheet`**:
  - Secara kondisional menampilkan widget `Information` (tampilan terminal) jika `_isTerminalVisible` benar.
- **`bottomNavigationBar`**:
  - Sebuah `BottomAppBar` yang menunjukkan versi build aplikasi.
  - Tombol "Tentang" yang menavigasi ke halaman `/about`.
  - Tombol sakelar untuk menampilkan atau menyembunyikan tampilan terminal (widget `Information`).

### Kelas `_UtilityButton`:
- Sebuah `StatelessWidget` pembantu untuk membuat tombol yang konsisten untuk bagian "Utilitas".
- Dibutuhkan label, ikon, dan fungsi panggilan balik.

Singkatnya, `home.dart` bertanggung jawab atas antarmuka pengguna utama aplikasi, menyediakan akses ke kontrol layanan, utilitas, dan navigasi ke bagian lain dari aplikasi.