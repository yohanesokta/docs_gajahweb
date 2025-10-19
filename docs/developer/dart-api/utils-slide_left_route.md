---
sidebar_position: 3
---

# utils/slide_left_route.dart

File ini mendefinisikan `PageRouteBuilder` kustom untuk membuat animasi transisi halaman.

### Kelas `SlideLeftRoute`:
- Mewarisi `PageRouteBuilder` untuk membuat transisi rute kustom.
- Ketika halaman baru didorong menggunakan rute ini, ia menganimasikan halaman dengan menggesernya dari sisi kanan layar.
- **Konstruktor**: Menerima widget `halaman` sebagai parameter yang wajib diisi.
- **`transitionsBuilder`**:
  - Fungsi ini mendefinisikan animasi.
  - Menggunakan `SlideTransition` untuk menganimasikan `child` (halaman baru).
  - Transisi dimulai dengan halaman diposisikan di luar layar ke kanan (`Offset(2.0, 0.0)`) dan menganimasikannya ke posisi akhirnya di tengah layar (`Offset.zero`).
  - Menggunakan kurva `ease` untuk animasi yang mulus.

Kelas ini digunakan di `main.dart` untuk memberikan pengalaman navigasi yang konsisten dan menarik secara visual saat beralih di antara halaman-halaman yang berbeda dari aplikasi.