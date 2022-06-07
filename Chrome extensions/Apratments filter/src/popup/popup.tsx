import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import './popup.scss';
import {Websites} from "../content-scripts/contentScript.interface";
import {getOnlyDigits} from "../shared/utils";


const Popup: React.FC = () => {
    const [tabUrl, setTabUrl] = useState('');
    const [currentSite, setCurrentSite] = useState('');
    const [isValidSite, setIsValidSite] = useState(false);
    const [hiddenCount, setHiddenCount] = useState(0);

    useEffect(() => {
        const setCurrentUrl = async () => {
            await chrome.tabs.query({active: true, currentWindow: true}, tabs => {
                setTabUrl(tabs[0].url);
                const isInValidSite = tabs[0].url.includes(Websites.onTheMarket) || tabs[0].url.includes(Websites.rightMove);
                if (!isInValidSite) {
                    setIsValidSite(false);
                    setCurrentSite('');
                } else {
                    setIsValidSite(true);
                    setCurrentSite(tabs[0].url.includes(Websites.onTheMarket) ? Websites.onTheMarket : Websites.rightMove);
                }
            });
        }

        const getNumberOfHiddenApartments = async () => {
            await chrome.storage.sync.get(currentSite, (blockList) => {
                setHiddenCount(blockList[currentSite]?.length || 0);
            })
        }
        setCurrentUrl().catch((e) => console.log(e));
        getNumberOfHiddenApartments().catch((e) => console.log(e));
    }, [currentSite]);

    const removeApartment = () => {
        const propertyId = getOnlyDigits(tabUrl); // get only numbers from url
        console.log(currentSite);
        chrome.storage.sync.get(currentSite, (blockList) => {
            console.log(blockList[currentSite]);currentSite
            if (!blockList[currentSite].includes(propertyId)) {
                chrome.storage.sync.set({[currentSite]: [...blockList[currentSite], propertyId]}, () => {
                    console.log(`set new Id in ${currentSite} blockList : ${propertyId}`);
                    setHiddenCount(hiddenCount + 1);
                })
            }
        })
    }

    const resetList = () => {
        chrome.storage.sync.set({[currentSite]: []}, () => {
            console.log(`reset ${currentSite} !`);
            setHiddenCount(0);
            chrome.tabs.reload().catch((e) => console.log(e));
        })
    }

    const isInDetailsPage = currentSite === Websites.onTheMarket && tabUrl.includes('details')
        || currentSite === Websites.rightMove && tabUrl.includes('properties');

    return (
        <div className="extension-wrapper">
            {isValidSite ?
                <>
                    <span>Apartments Filter - {currentSite}</span>
                    {isInDetailsPage && <button onClick={removeApartment}>Dont show this apartment again</button>}
                    <div>Hidden apartments : {hiddenCount}</div>
                    <button onClick={resetList}>Reset List</button>
                </>
                :
                <span className="empty-message">Please visit RightMove or OnTheMarket to use this extension</span>}
        </div>
    )
}

const div = document.createElement('div');
const root = ReactDOM.createRoot(div);
document.body.appendChild(div);
root.render(<Popup/>);
