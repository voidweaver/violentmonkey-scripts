// ==UserScript==
// @name        Musixmatch: remove adblock banner
// @description Remove adblock banner from musixmatch.com
// @namespace   https://github.com/voidweaver/violentmonkey-scripts
// @match       https://www.musixmatch.com/*
// @grant       none
// @version     1.0.1
// @author      voidweaver
// @downloadURL https://git.io/JYT8U
// @run-at      document-end
// ==/UserScript==

const observer = new MutationObserver((mutationsList, _) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const added = mutation.addedNodes;
            for (let i = added.length - 1; i >= 0; i--) {
                if (added[i].getAttribute("style")?.length > 30) {
                    added[i].remove();
                    return;
                }
            }
        }
    }
});

observer.observe(document.body, { childList: true });
