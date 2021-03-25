// ==UserScript==
// @name        Bing redirect
// @description Redirects Bing query to Google (sorry, Bing 😅)
// @namespace   https://github.com/voidweaver/violentmonkey-scripts
// @match       https://www.bing.com/*
// @grant       none
// @version     1.0.1
// @author      voidweaver
// @downloadURL https://git.io/JYTlp
// @run-at      document-start
// ==/UserScript==

window.stop()
window.location.replace("https://www.google.com/search" + window.location.search);
