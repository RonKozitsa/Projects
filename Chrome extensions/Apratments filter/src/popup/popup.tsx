import React from 'react';
import ReactDOM from "react-dom/client";
import './popup.scss';
import {Websites} from "../content-scripts/contentScript.interface";
import {getOnlyDigits} from "../shared/utils";

let numberOfHiddenApartments;
const div = document.createElement('div');
div.className = "extension-wrapper";
const root = ReactDOM.createRoot(div);
document.body.appendChild(div);

const removeApartment = () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const url = tabs[0].url;
        const propertyId = getOnlyDigits(url); // get only numbers from url
        const currentSite = url.includes(Websites.onTheMarket) ? Websites.onTheMarket : Websites.rightMove;
        chrome.storage.sync.get(currentSite, (blockList) => {
            if (!blockList[currentSite].includes(propertyId)) {
                chrome.storage.sync.set({[currentSite]: [...blockList[currentSite], propertyId]}, () => {
                    console.log(`set new Id in ${currentSite} blockList : ${propertyId}`);
                    setNumberOfHiddenApartments();
                })
            }
        })
    });
}

const resetList = () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const url = tabs[0].url;
        const currentSite = url.includes(Websites.onTheMarket) ? Websites.onTheMarket : Websites.rightMove;
        chrome.storage.sync.set({[currentSite]: []}, () => {
            console.log(`reset ${currentSite} !`);
            setNumberOfHiddenApartments();
            chrome.tabs.reload();
        })
    });
}

const setNumberOfHiddenApartments = () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const url = tabs[0].url;
        const currentSite = url.includes(Websites.onTheMarket) ? Websites.onTheMarket : Websites.rightMove;
        chrome.storage.sync.get(currentSite, (blockList) => {
            numberOfHiddenApartments = blockList[currentSite]?.length;
            updateHiddenCount();
        })
    });
}

const updateHiddenCount = () => {
    document.getElementById('hidden-count').innerText = numberOfHiddenApartments;
}

const render = () =>{
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const url = tabs[0].url;
        if (!(url.includes(Websites.onTheMarket) || url.includes(Websites.rightMove))) {
            root.render(
                <>
                    <span className="empty-message">Please visit RightMove or OnTheMarket to use this extension</span>
                </>
            );
        } else {
            const currentSite = url.includes(Websites.onTheMarket) ? Websites.onTheMarket : Websites.rightMove;
            root.render(
                <>
                    <span>Apartments Filter - {currentSite}</span>
                    <button onClick={removeApartment}>Dont show this apartment again</button>
                    <div>Hidden apartments : <span id="hidden-count">{numberOfHiddenApartments}</span></div>
                    <button onClick={resetList}>Reset List</button>
                </>
            );
        }
    });
}

setNumberOfHiddenApartments();
render();
