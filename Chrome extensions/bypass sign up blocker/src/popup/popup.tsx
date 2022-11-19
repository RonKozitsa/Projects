import React from 'react';
import ReactDOM from "react-dom/client";


const Popup: React.FC = () => {

    const sendClickedMessage = () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {type: 'bypass'});
        });

    }

    return (
        <div className="extension-wrapper">
            <button onClick={sendClickedMessage}>Try to read site</button>
        </div>
    )
}

const div = document.createElement('div');
const root = ReactDOM.createRoot(div);
document.body.appendChild(div);
root.render(<Popup/>);
