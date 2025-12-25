# Context Menu Plugin for HFS

Replace the standard browser right-click menu with the native HFS file operations menu. Seamlessly integrated for a desktop-like experience.

## 🌟 Capabilities

This plugin bridges the gap between web and desktop file management by intercepting user interactions.

*   **🖱️ Native Right-Click**: Triggers the HFS file menu (Open, Delete, Rename, Properties) directly on right-click.
*   **🚫 Default Override**: Suppresses the browser's context menu (Save As, Inspect Element) on file entries to prevent clutter.
*   **📱 Consistent UX**: Works on both files and folders, providing immediate access to actions without searching for the "three dots" menu.
*   **⚡ Lightweight**: Pure frontend logic with zero server-side overhead. 100% Client-Side.

---

## 🚀 Installation

### Option 1: Automatic (Recommended)
1.  Go to your **HFS Admin Panel**.
2.  Navigate to **Plugins** -> **Search online**.
3.  Search for **`context-menu`**.
4.  Click **Install**.

### Option 2: Manual
1.  Download the `dist` folder from this repository.
2.  Place it inside your HFS `plugins` directory.
3.  Rename `dist` folder to `context-menu`.
4.  Restart HFS or reload plugins.

---

## ⚡ Quick Setup Guide

Get the most out of the plugin in 10 seconds:

1.  **Install**: Follow the installation steps above.
2.  **Verify**: Log in to your HFS frontend as a user with file permissions (e.g. Admin).
3.  **Test**: Right-click on any file in the list. You should see the HFS "File Menu" popup instead of the browser menu.

---

## ⚙️ Configuration Guide

This plugin currently has no configurable settings. It just works™ out of the box.

---

## 🛠️ Troubleshooting

### 1. Interaction Issues
| Error/Event | Description | Solution(s) |
| :--- | :--- | :--- |
| **Browser Menu Appears** | The standard browser menu shows up instead. | 1. Ensure you are clicking exactly on the file row.<br>2. Clear browser cache. |
| **Nothing Happens** | Right-click does nothing. | Ensure the `context-menu` plugin is enabled in Admin Panel. |

---

## 👨‍💻 Technical Details

### Architecture
This plugin injects a small script (`main.js`) into the HFS frontend:

1.  **Event Listener**: Attaches a `contextmenu` listener to the global `window` object.
2.  **Delegation**: Checks if the clicked element belongs to a file list row (`li`).
3.  **Intercept**: Calls `preventDefault()` to block the browser menu.
4.  **Trigger**: Programmatically dispatches a `click` event to the existing HFS menu button (`.file-menu-button`) for that specific file row, causing the native HFS menu to open at the cursor position.

---

## 🏆 Credits

*   **[HFS](https://github.com/rejetto/hfs)**: The HTTP File Server itself.
