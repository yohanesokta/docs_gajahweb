---
sidebar_position: 8
---

# components/xampp_sameless.dart

File ini mendefinisikan widget yang memungkinkan pengguna untuk dengan mulus mengganti direktori root web antara folder `htdocs` GajahWeb default dan instalasi XAMPP yang ada.

### Enum `HtdocsLocation`:
- Sebuah enumerasi yang mendefinisikan dua lokasi yang mungkin untuk direktori `htdocs`: `gajahweb` dan `xampp`.

### Kelas `Xamppsameless`:
- Sebuah `StatefulWidget` yang membuat status untuk widget mode mulus XAMPP.

### Kelas `_XamppsamelessState`:
- Kelas status untuk `Xamppsameless`.
- **Variabel Status**:
  - `_selection`: `HtdocsLocation` yang saat ini dipilih.
  - `_activeHtdocsPath`: Path ke direktori `htdocs` yang saat ini aktif.
  - `_nginxPort`: Nomor port yang digunakan oleh Nginx.
- **`_initializeState()`**:
  - Menginisialisasi status dengan membaca path `htdocs` yang disimpan dan port Nginx dari `SharedPreferences`.
  - Ini mengatur pilihan awal berdasarkan path yang disimpan.
- **`_changeHtdocs(Set<HtdocsLocation> newSelection)`**:
  - Fungsi ini dipanggil ketika pengguna memilih lokasi `htdocs` baru.
  - Ini menentukan path baru berdasarkan pilihan.
  - Ini menjalankan skrip `nginx-port.bat` untuk memperbarui konfigurasi Nginx dengan path baru.
  - Ini menyimpan path baru ke `SharedPreferences`.
  - Ini me-restart proses Nginx untuk menerapkan perubahan.
  - Ini memperbarui status untuk mencerminkan pilihan baru.
- **`build()`**:
  - UI dibangun di dalam widget `Card`.
  - Menampilkan judul dan deskripsi fitur.
  - Sebuah `SegmentedButton` memungkinkan pengguna untuk memilih antara "GajahWeb" dan "XAMPP" untuk root web.
  - Ini menunjukkan peringatan bahwa Apache dinonaktifkan dalam mode ini.
  - Ini menampilkan path ke direktori `htdocs` yang saat ini aktif.
  - Ini termasuk bagian dengan tombol info untuk memberi tahu pengguna bahwa mereka perlu memulai MySQL dan Apache XAMPP secara manual.

Komponen ini menyediakan fitur integrasi yang kuat bagi pengguna yang memiliki instalasi XAMPP yang ada, yang memungkinkan mereka mengelola proyek mereka dengan Gajah Webserver tanpa harus memindahkan file mereka.