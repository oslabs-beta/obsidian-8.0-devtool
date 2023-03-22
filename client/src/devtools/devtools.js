// This file will create our new Devtool Tab in Devtools
chrome.devtools.panels.create(
    'Obsidian 8.0 DevTools',
    null, 
    // pagePath destination is relative to the manifest.json file
    '../dist/index.html'
  )