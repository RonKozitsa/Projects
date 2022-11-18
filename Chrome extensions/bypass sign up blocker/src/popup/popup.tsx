import React from 'react';
import ReactDOM from "react-dom/client";



const Popup: React.FC = () => {

    const sendClickedMessage = () => {
        chrome.runtime.sendMessage(
            {from: "popup", action: "bypass"},
        );
    }

    return (
        <div className="extension-wrapper">
            <button id="bypassBtn" onClick={sendClickedMessage}>Try to read site</button>
        </div>
    )
}

const div = document.createElement('div');
const root = ReactDOM.createRoot(div);
document.body.appendChild(div);
root.render(<Popup/>);
