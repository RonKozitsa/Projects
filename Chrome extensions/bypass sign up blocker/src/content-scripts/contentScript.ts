const tryToBypass = () => {
    const idList = Array.from(document.querySelectorAll('*[id]'));
    const overlays = idList.filter(element => element.id.toLowerCase().includes('overlay'));
    overlays.forEach(overlay => overlay.parentNode.removeChild(overlay));
    document.body.classList.add('bypassScroll');
}

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        switch(message.type) {
            case "bypass":
                tryToBypass();
                break;
        }
    }
);
