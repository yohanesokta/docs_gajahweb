---
sidebar_position: 9
---

# components/service_control_card.dart

File ini mendefinisikan komponen UI yang dapat digunakan kembali untuk menampilkan dan mengontrol satu layanan (misalnya, Nginx, MariaDB).

### Kelas `ServiceControlCard`:
- Sebuah `StatelessWidget` yang membuat UI berbasis kartu untuk sebuah layanan.
- **Properti**:
  - `serviceName`: Nama layanan.
  - `statusText`: Status layanan saat ini (misalnya, "Berjalan", "Berhenti").
  - `statusColor`: Warna indikator status.
  - `value`: Boolean yang mewakili status hidup/mati layanan (digunakan untuk `Switch`).
  - `onChanged`: Fungsi panggilan balik yang dipanggil saat `Switch` diubah.
  - `onLaunch`: Fungsi panggilan balik opsional untuk tombol peluncuran (misalnya, untuk membuka alat atau URL terkait).
  - `imageAsset`: Path ke aset gambar untuk logo layanan.
- **`build()`**:
  - UI dibangun di dalam `SizedBox` untuk membatasi ukuran kartu.
  - `Card` berisi `Column` dengan elemen-elemen berikut:
    - `Image` untuk menampilkan logo layanan.
    - `IconButton` opsional (tombol peluncuran) yang hanya diaktifkan jika `onLaunch` tidak null.
    - `serviceName`.
    - Baris indikator status dengan:
      - Lingkaran berwarna yang mewakili status.
      - `statusText`.
      - `Switch` untuk memulai atau menghentikan layanan.

Komponen ini digunakan di `home.dart` untuk membuat kisi kontrol layanan, menyediakan cara yang konsisten dan modular untuk mengelola setiap layanan.