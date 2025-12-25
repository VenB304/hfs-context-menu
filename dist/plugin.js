exports.description = "A plugin that replaces the browser's context menu with the HFS file menu.";
exports.version = 2;
exports.apiRequired = 12.0; // Ensures HFS version is compatible
exports.repo = "VenB304/context-menu";


exports.init = api => ({
    frontend_js: 'main.js'
})
