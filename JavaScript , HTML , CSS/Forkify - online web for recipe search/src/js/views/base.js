//Elements of HTML file
export const DOM_ELEMENTS = {
    searchForm : document.querySelector('.search'),
    searchInput : document.querySelector('.search__field'),
    searchResultList : document.querySelector('.results__list'),
    results : document.querySelector('.results'),
    resultsPages : document.querySelector('.results__pages'),
    spinnerString : 'loader',
    recipe : document.querySelector('.recipe'),
    shoppingList : document.querySelector('.shopping__list'),
    likes_list : document.querySelector('.likes__list'),
    likes_menu : document.querySelector('.likes__field')
};


//we give the parent element and then add the spinner as a child element of the parent
export const Displayspinner = parent => {
    const loader = `<div class=${DOM_ELEMENTS.spinnerString}></div>`;
    parent.insertAdjacentHTML('afterbegin' , loader); 
};

export const removeSppiner = () => {
    const loader = document.querySelector(`.${DOM_ELEMENTS.spinnerString}`);
    //check if there is loader on page 
    if (loader) {
        loader.parentNode.removeChild(loader);
    }
};

