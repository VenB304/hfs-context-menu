HFS.domOn('contextmenu', ev => {
    // Check if the event target is inside a list item
    const row = ev.target.closest('li');
    if (!row) return;

    // Get the directory entry associated with the row
    const entry = HFS.elementToEntry(row);
    if (!entry) return;

    // Prevent the default browser context menu
    ev.preventDefault();

    // Priority 1: The standard file menu button (standard layout)
    // Priority 2: The popup menu button (used for folders when 'File menu on link' is enabled)
    const btn = row.querySelector('.file-menu-button') || row.querySelector('.popup-menu-button');

    if (btn) {
        // We found a button that definitely toggles the menu. Click it.
        btn.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: ev.clientX,
            clientY: ev.clientY,
            view: window,
        }));
        return;
    }

    // Fallback: No obvious menu button found.
    // This typically happens for FILES when 'File menu on link' is enabled.
    // In this mode, clicking the link itself opens the menu.
    // IMPORTANT: For FOLDERS, the link still navigates, so we must NOT click the link for folders
    // unless we are sure it opens the menu (which it doesn't in standard HFS logic).
    // Luckily, HFS renders .popup-menu-button for folders in this mode, which we caught above.
    // So here, we only proceed if it's NOT a folder.
    if (!entry.isFolder) {
        const link = row.querySelector('.link-wrapper a');
        if (link) {
            link.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: ev.clientX,
                clientY: ev.clientY,
                view: window,
            }));
        }
    }
});
