// ==UserScript==
// @name         ÍHÍ Game Entry for Hydra
// @namespace    https://sturlasnaer.github.io/hydra-ui-app/
// @version      1.5.0
// @description  ÍHÍ's game entry screen for IIHF Hydra. Open https://ihi.hydra.iihf.com/IIHF_Core/hydra-ui (shots bench: ?mode=bench) after logging in.
// @match        https://*.hydra.iihf.com/IIHF_Core/hydra-ui*
// @run-at       document-end
// @grant        none
// @updateURL    https://sturlasnaer.github.io/hydra-ui-app/hydra-ui.user.js
// @downloadURL  https://sturlasnaer.github.io/hydra-ui-app/hydra-ui.user.js
// ==/UserScript==

// Loads the newest app from GitHub Pages into this logged-in Hydra page (same as the Chrome extension).
(() => {
  if (window.__hydraUi) return;
  const s = document.createElement('script');
  s.src = 'https://sturlasnaer.github.io/hydra-ui-app/hydra-ui.js?v=' + Date.now();
  s.onerror = () => alert('Could not load the game entry app. Check the internet connection.');
  (document.head || document.documentElement).appendChild(s);
})();
