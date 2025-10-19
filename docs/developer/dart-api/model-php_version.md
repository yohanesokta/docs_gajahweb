---
sidebar_position: 7
---

# model/php_version.dart

File ini mendefinisikan model data untuk versi PHP dan menyediakan fungsi untuk mengambil informasi versi PHP dari server jarak jauh.

### Kelas `Phpversion`:
- Kelas data yang mewakili satu versi PHP.
- Memiliki tiga properti:
  - `name`: Nama atau nomor versi rilis PHP (misalnya, "8.4.11").
  - `url`: URL tempat versi PHP dapat diunduh.
  - `type`: Jenis rilis (misalnya, "stabil" atau "arsip").
- **`Phpversion.fromMap(Map<String, dynamic> data)`**: Konstruktor pabrik yang membuat objek `Phpversion` dari peta (biasanya didekodekan dari JSON).

### Fungsi `getDataVersion(bool stable, {http.Client? client})`:
- Secara asinkron mengambil daftar objek `Phpversion` dari file JSON jarak jauh.
- **`stable`**: Parameter boolean yang menentukan apakah akan mengambil versi PHP yang stabil atau yang diarsipkan.
- **`client`**: Parameter `http.Client` opsional untuk membuat permintaan HTTP, yang berguna untuk pengujian.
- Ini membangun URL berdasarkan parameter `stable`.
- Ini membuat permintaan GET HTTP ke URL yang ditentukan.
- Jika permintaan berhasil (kode status 200), ia mendekode respons JSON dan memetakan data ke daftar objek `Phpversion`.
- Jika permintaan gagal, ia akan melempar pengecualian.

File ini sangat penting untuk fitur "Pengalih Versi PHP", yang memungkinkan aplikasi untuk secara dinamis menampilkan dan mengunduh versi PHP yang berbeda.