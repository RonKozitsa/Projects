import {DOM_ELEMENTS} from './base';

export const displayItem = item => {
    const itemHTML = `
    <li class="shopping__item" data-itemId=${item.id}>
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping_count_item">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
       <button class="shopping__delete btn-tiny">
           <svg>
               <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
`;
    DOM_ELEMENTS.shoppingList.insertAdjacentHTML('beforeend',itemHTML);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemId="${id}"]`); //the [] means for attribute selecting in css
    if(item) item.parentNode.removeChild(item);
};