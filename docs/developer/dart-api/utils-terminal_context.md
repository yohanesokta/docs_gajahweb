---
sidebar_position: 4
---

# utils/terminal_context.dart

File ini menyediakan solusi manajemen status terpusat untuk tampilan terminal atau pencatatan aplikasi.

### Kelas `Terminalcontext`:
- Menggunakan mixin `ChangeNotifier`, yang memungkinkannya digunakan dengan `ChangeNotifierProvider` untuk memberi tahu pendengar (widget) tentang perubahan statusnya.
- **`_message`**: Daftar string pribadi yang menyimpan pesan log.
- **`terminalContext`**: Getter yang mengekspos daftar `_message` ke UI.
- **`add(String text)`**:
  - Metode ini digunakan untuk menambahkan pesan log baru ke daftar `_message`.
  - Ini menambahkan "Proses: " di awal teks yang diberikan.
  - Ini memanggil `notifyListeners()` untuk memberi tahu widget pendengar mana pun bahwa status telah berubah, sehingga mereka dapat membangun kembali dan menampilkan pesan log baru.

Kelas ini disediakan untuk pohon widget di `main.dart` dan digunakan oleh widget `Information` untuk menampilkan log berjalan dari peristiwa dan proses dalam aplikasi.