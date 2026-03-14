# Notice: Scratch 2.0 Web Player (Ruffle Emulation)

This project provides a web-based environment to run **Scratch 2.0** using the **Ruffle Flash Emulator**. Please read the following legal and technical information carefully.

---

### ⚠️ Emulation Warning
This application (contained within `Scratch2.html`) uses the **Ruffle** emulator to execute Flash content. Because this is an emulation layer and not the original Adobe Flash Player, certain legacy features or hardware-specific extensions may not function as intended. This includes, but is not limited to:
* **PicoBoard** support
* **LEGO WeDo** connectivity
* Certain camera/microphone input behaviors
* Complex ActionScript 3 performance edge-cases

---

### 📜 Licensing Information

#### 1. This Project / Script
The file `Scratch2.html` and its associated HTML/CSS/JS are licensed under the **GNU GPL-3.0-or-later**.
* Full license text: [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html)

#### 2. Scratch 2.0 (scratch-flash)
The `Scratch.swf` file and its original source code are licensed under the **GNU General Public License v2.0**.
* **Source Code:** [https://github.com/scratchfoundation/scratch-flash](https://github.com/scratchfoundation/scratch-flash)
* **Release/Download:** [https://github.com/scratchfoundation/scratch-flash/releases/tag/v425](https://github.com/scratchfoundation/scratch-flash/releases/tag/v425)

#### 3. Ruffle Emulator
The Ruffle emulator used to power this player is dual-licensed under:
* **Apache License, Version 2.0**: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
* **MIT License**: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
* **Repository:** [https://github.com/ruffle-rs/ruffle/](https://github.com/ruffle-rs/ruffle/)

---

### 🛠 Technical Details
* **Script File:** `Scratch2.html`
* **SWF URL:** `https://github.com/scratchfoundation/scratch-flash/releases/download/v425/Scratch.swf`
* **Technology:** HTML5, JavaScript, WebAssembly (via Ruffle)
* **Resolution:** Optimized for 800x600 pixels (standard Scratch 2.0 aspect ratio).

---
*This notice is provided for transparency and compliance with the respective open-source licenses of the components used.*
