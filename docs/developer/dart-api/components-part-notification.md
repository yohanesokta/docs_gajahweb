---
sidebar_position: 17
---

# components/part/notification.dart

File ini mendefinisikan fungsi utilitas untuk menampilkan dialog konfirmasi kepada pengguna.

### Fungsi `showConfirmDialog(BuildContext context, String message)`:
- Fungsi asinkron yang menampilkan `AlertDialog`.
- **`context`**: `BuildContext` tempat dialog akan ditampilkan.
- **`message`**: Pesan yang akan ditampilkan di dialog.
- Dialog memiliki judul "Informasi" dan menampilkan `message` yang diberikan.
- Memiliki dua tombol: "Tidak" dan "Ya".
- Mengembalikan `Future<bool>` yang akan menghasilkan `true` jika pengguna menekan "Ya" dan `false` jika pengguna menekan "Tidak" atau menutup dialog.

Fungsi ini digunakan di seluruh aplikasi untuk mendapatkan konfirmasi dari pengguna sebelum melakukan suatu tindakan, seperti menavigasi ke situs web eksternal atau mengakui peringatan.