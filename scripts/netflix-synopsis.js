// ==UserScript==
// @name        Netflix hide episode synopsis
// @description Black out Netflix episode synopsis. Hover on it to show the synopsis.
// @namespace   https://github.com/voidweaver/violentmonkey-scripts
// @match       https://www.netflix.com/*
// @grant       GM_getValue
// @version     1.0.0
// @author      voidweaver
// @downloadURL https://git.io/JYIuL
// @run-at      document-end
// ==/UserScript==

const color = GM_getValue("color", "#2b2b2b");
const paused_color = GM_getValue("paused_color", "rgba(255, 255, 255, 0.3)");

const style = `
.episode-item .titleCard-synopsis {
    color: transparent !important;
    background: ${color};
    margin: 0 1em 1em !important;
    padding: 0 !important;
    border-radius: 0.2em;
    
    transition: color 500ms 200ms, background 500ms 200ms, padding 0s 0ms, margin 0s 0ms;
}

.episode-item .titleCard-synopsis:hover {
    color: inherit !important;
    background: inherit !important;
    margin: 0 !important;
    padding: 0 1em 1em !important;
    
    transition: color 250ms, background 250ms, padding 0s 250ms, margin 0s 250ms;
}

.episode-list div[data-uia="episode-expander"][data-uia-is-expanded="true"] .synopsis, .nfp-episode-preview .synopsis, .preview-modal-synopsis {
    color: transparent !important;
    background: ${color};
    border-radius: 0.2em;
    
    transition: color 250ms, background 250ms;
}

.episode-list div[data-uia="episode-expander"][data-uia-is-expanded="true"] .synopsis:hover, .nfp-episode-preview .synopsis:hover, .preview-modal-synopsis:hover {
    color: inherit !important;
    background: inherit !important;
}

.PlayerControlsNeo__layout--dimmed .evidence-overlay > p:first-of-type {
    color: transparent !important;
    background: ${paused_color};
    border-radius: 0.2em;
}`

let stylesheet = document.createElement("style")
stylesheet.type = "text/css"
stylesheet.innerText = style
document.head.appendChild(stylesheet)
