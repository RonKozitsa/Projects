import {SelectionClass, Websites} from "./contentScript.interface";
import './contentScript.scss';
import {getOnlyDigits} from "../shared/utils";

const filterResults = () => {
    const url = window.location.href;

    if (url.includes(Websites.onTheMarket)) {
        chrome.storage.sync.get(Websites.onTheMarket, (blockList) => {
            if (blockList[Websites.onTheMarket]) {
                filterOnTheMarketProperties(blockList[Websites.onTheMarket]);
            }
        });
    } else if (url.includes(Websites.rightMove)) {
        chrome.storage.sync.get(Websites.rightMove, (blockList) => {
            if (blockList[Websites.rightMove]) {
                filterRightMoveProperties(blockList[Websites.rightMove]);
            }
        });
    }
}


const filterOnTheMarketProperties = (blockList: string[]) => {
    const results = document.getElementsByClassName(SelectionClass.onTheMarket);
    for (let i = 0; i < results.length; i++) {
        const propertyId = getOnlyDigits((results[i].firstChild as HTMLDivElement).id);
        if (blockList.includes(propertyId)) {
            results[i].parentElement.removeChild(results[i]);
            i--;
        }
    }
}

const filterRightMoveProperties = (blockList: string[]) => {
    blockList.forEach(id => {
        const propertyToRemove = document.getElementById(`property-${id}`);
        if (propertyToRemove) {
            propertyToRemove.parentElement.removeChild(propertyToRemove);
        }
    })
}

const listenToUrlChanges = () => {
    let currentPage = location.href;
    // listen for changes
    setInterval(function () {
        if (currentPage != location.href) {
            // page url has changed, set new page as 'current'
            currentPage = location.href;

            filterResults();
        }
    }, 500);
}

const listenToScrollChanges = () => {
    document.addEventListener('scroll', filterResults);
}

filterResults();
listenToUrlChanges();
listenToScrollChanges();
