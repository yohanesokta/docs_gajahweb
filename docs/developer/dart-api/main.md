---
sidebar_position: 1
---

# main.dart

Ini adalah titik masuk dari aplikasi Flutter.

### Fungsi `main()`:
- Menginisialisasi binding Flutter dan `window_manager`.
- Mengkonfigurasi `network_tools` untuk tugas-tugas terkait jaringan.
- Menyiapkan jendela aplikasi utama dengan ukuran, judul, dan opsi lain yang spesifik menggunakan `WindowOptions`.
- Memastikan jendela ditampilkan, difokuskan, dan dibuat dapat diubah ukurannya dan dapat dimaksimalkan.
- Membungkus widget root `MainApp` dengan `ChangeNotifierProvider` untuk membuat `Terminalcontext` tersedia di seluruh pohon widget.

### Kelas `MainApp`:
- Sebuah `StatelessWidget` yang mewakili root dari aplikasi.
- Ini mengkonfigurasi `MaterialApp` dengan:
  - Tema gelap (`ThemeMode.dark`).
  - Tema gelap kustom dengan warna spesifik untuk warna primer, latar belakang scaffold, bilah aplikasi, dan kartu.
  - Halaman beranda diatur ke `HomeApp`.
  - Generator rute (`onGenerateRoute`) yang menangani navigasi ke halaman `/about`, `/download`, dan `/settings` menggunakan transisi `SlideLeftRoute` kustom.

Intinya, file ini menyiapkan jendela utama, tema, dan navigasi aplikasi, serta meluncurkan layar beranda.