let depth;
let currentDepth;

const tryToBypass = () => {
    lookForOverlayIdAndBypass();
    iterateBodyChildrenWithStaticPositionAndUpdateThem(document.body);
    depth = 3;
    currentDepth = 0;
}

const lookForOverlayIdAndBypass = () => {
    const idList = Array.from(document.querySelectorAll('*[id]'));
    const overlays = idList.filter(element => element.id.toLowerCase().includes('overlay'));
    overlays.forEach(overlay => overlay.parentNode.removeChild(overlay));
    document.body.classList.add('bypassScroll');
}

const iterateBodyChildrenWithStaticPositionAndUpdateThem = (element: Element) => {
    if (currentDepth > depth) {
        return;
    }
    Array.from(element.children).forEach(node => {
        if (window.getComputedStyle(node).position === 'fixed') {
            node.classList.add('bypassScroll');
        }
        iterateBodyChildrenWithStaticPositionAndUpdateThem(node);
    });
    currentDepth += 1;
}


chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        switch (message.type) {
            case "bypass":
                tryToBypass();
                break;
        }
    }
);
