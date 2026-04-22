# SB3 Assets Parser - EZLibrary 🌪️

A lightweight, browser-based tool to extract and categorize assets from Scratch 3.0 (`.sb3`) files and manage them via `.json` manifests.

## ⚖️ License
This project is licensed under the **GNU GPLv3**. 
Created by **Stormwindsky** to facilitate asset management and task automation.

---

## 🛠️ Technical Dependencies & Legal Notice

For the script to function correctly while remaining a single portable HTML file, it utilizes the following third-party resources:

### 1. JSZip Library
* **Purpose**: This script uses **JSZip** to decompress `.sb3` files. Since `.sb3` files are technically renamed `.zip` archives, JSZip is required to read the internal assets (images and sounds) directly in the browser without server-side processing.
* **License**: JSZip is dual-licensed under the **MIT License** or the **GPLv3 License**.
* **Website**: [https://stuk.github.io/jszip/](https://stuk.github.io/jszip/)

### 2. Cloudflare CDN (Content Delivery Network)
* **Purpose**: The JSZip library is loaded via the **cdnjs.cloudflare.com** CDN. This allows the tool to be lightweight and ensures the library is delivered quickly and reliably.
* **Usage**: The script includes a `<script>` tag pointing to the JSZip minified source hosted by Cloudflare.
* **Privacy/Legal**: By using this tool, the library is fetched from Cloudflare's servers. Cloudflare may process basic network metadata (like IP addresses) as part of their standard CDN delivery service.

---

## 🚀 Features
- **Zero Duplicates**: Automatically compares imported files against an existing `.json` ledger using `md5ext` IDs to prevent redundant entries.
- **Selective Extraction**: Filters files based on user-selected categories:
    - 🖼️ **Backdrops**: Filters for `.svg`, `.png`, `.jpg`, `.jpeg`, `.bmp`.
    - 👕 **Costumes**: Filters for `.svg`, `.png`, `.jpg`, `.jpeg`, `.bmp`.
    - 🔊 **Audios**: Filters for `.wav`, `.mp3`, `.ogg`.
- **Drag & Drop**: Supports drag-and-drop for both `.sb3` archives and existing `.json` configuration files.
- **Emoji-based UI**: Intuitive icon-based interface for universal accessibility.

## ⚠️ Disclaimer
This tool is provided "as is". Users are responsible for ensuring they have the rights to the assets contained within the `.sb3` files they process.
