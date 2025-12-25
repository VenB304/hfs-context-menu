HFS.domOn('contextmenu', ev => {
    const row = ev.target.closest('li')
    if (!row) return
    const entry = HFS.elementToEntry(row)
    if (!entry) return

    const btn = row.querySelector('.file-menu-button')
    if (btn) {
        ev.preventDefault()
        btn.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: ev.clientX,
            clientY: ev.clientY,
            view: window,
        }))
    }
})
