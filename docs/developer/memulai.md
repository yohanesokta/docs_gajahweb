---
sidebar_position: 2
---

# Memulai

Panduan ini akan membantu Anda menyiapkan lingkungan pengembangan untuk Gajah Webserver.

### 1. Prasyarat

Pastikan perangkat Anda telah menginstal yang berikut:
- **Windows 10/11 (x64)**
- **[Flutter SDK](https://flutter.dev/docs/get-started/install/windows)** (versi stabil)
- **[Visual Studio](https://visualstudio.microsoft.com/downloads/)** dengan komponen "Pengembangan desktop dengan C++"

### 2. Proses Instalasi

1.  **Klon Repositori:**
    ```bash
    git clone https://github.com/yohanesokta/WebServices-Gajah.git
    cd WebServices-Gajah
    ```

2.  **Instal Dependensi Flutter:**
    ```bash
    flutter pub get
    ```

3.  **Jalankan Skrip Pengaturan:**
    Klik dua kali file `setup.bat`. Skrip ini akan mengunduh biner yang diperlukan dan membuat struktur direktori di `C:\gajahweb`.

    > **Penting:** Pastikan skrip `setup.bat` berjalan hingga selesai tanpa kesalahan.

4.  **Jalankan Aplikasi:**
    ```bash
    flutter run -d windows
    ```

### Menjalankan Tes

- **Jalankan semua tes:**
  ```bash
  flutter test
  ```

- **Jalankan tes dengan cakupan:**
  ```bash
  flutter test --coverage
  ```