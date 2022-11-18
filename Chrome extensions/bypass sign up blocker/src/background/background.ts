let activeTabId;


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message?.from === "popup") {
        switch (message.action) {
            case "bypass":
                chrome.scripting.executeScript({
                    target: {tabId: activeTabId},
                    files: ['contentScript.js']
                });
                break;
        }
    }
});

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => activeTabId = tabs[0].id);

chrome.tabs.onUpdated.addListener((tabId: number) => {
    activeTabId = tabId;
});
