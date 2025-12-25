HFS.domOn('contextmenu', ev => {
    // Check if the event target is inside a list item
    const row = ev.target.closest('li');
    if (!row) return;

    // Get the directory entry associated with the row
    const entry = HFS.elementToEntry(row);
    if (!entry) return;

    // Prevent the default browser context menu
    ev.preventDefault();

    // Try to find the existing file menu button
    const btn = row.querySelector('.file-menu-button');
    if (btn) {
        // Dispatch a synthetic click event to the button
        // We use dispatchEvent to ensure React handles it, and we pass the coordinates
        // so the menu opens at the cursor position (if the handler supports it, which openFileMenu does)
        btn.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: ev.clientX,
            clientY: ev.clientY,
            view: window,
        }));
        return;
    }

    // Fallback: If the button is not visible (e.g., 'file_menu_on_link' setting is active),
    // clicking the file name/link itself might trigger the menu.
    // However, if we click the link and it's NOT set to open the menu, it will navigate/download.
    // We should check the state.
    const state = HFS.state || {}; // Safe access
    if (state.file_menu_on_link || (entry.isFolder && window.matchMedia && window.matchMedia('(hover: none)').matches)) {
        const link = row.querySelector('.link-wrapper a') || row.querySelector('.link-wrapper .popup-menu-button');
        if (link) {
            link.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: ev.clientX,
                clientY: ev.clientY,
                view: window,
            }));
            return;
        }
    }

    // If we reach here, we couldn't trigger the menu. 
    // We blocked the context menu, but essentially failed to open ours.
    // We could try to force it, but without a dedicated API exposed, utilizing existing event handlers is the only way.
});
