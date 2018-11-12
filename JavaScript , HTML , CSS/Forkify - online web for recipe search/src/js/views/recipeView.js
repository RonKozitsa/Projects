import {DOM_ELEMENTS} from './base';
import {Fraction} from 'fractional';

const formatNumber = number => {
    if (number){
        const [int , dec] = number.toString().split('.').map(el => parseInt(el , 10));
        if(!dec){
            return parseInt(number,10);
        }else if(int === 0){
            const fraction = new Fraction(number);
            return `${fraction.numerator}/${fraction.denominator}`;
        }else{
            const fraction = new Fraction(number - int);
            if(fraction.numerator === 3 && fraction.denominator === 10) {
                fraction.numerator = 1;
                fraction.denominator = 3;
            }
            return `${int} ${fraction.numerator}/${fraction.denominator}`;
        }
    }
    return '?';
};

const addIngredient = ingredient => `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
            <div class="recipe__count">${formatNumber(ingredient.count)}</div>
            <div class="recipe__ingredient">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.ingredient}
        </div>
    </li>
`;

export const clearRecipeView = () => {
    DOM_ELEMENTS.recipe.innerHTML = '';
};


export const showRecipe = (recipe,isliked) => {
    const recipeHTML = `
            <figure class="recipe__fig">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny button-decrease">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny button-increase">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use class="header__likes" href="img/icons.svg#icon-heart${isliked ? '' : '-outlined'}"></use>
                    </svg>
                </button>
            </div>
            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                ${recipe.ingredients.map(el => addIngredient(el)).join('')}
                    </ul>

                <button class="btn-small recipe__btn recipe__btn--addToList">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span class="recipe__btn--addToList">Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${recipe.url}" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </a>
            </div>`

            DOM_ELEMENTS.recipe.insertAdjacentHTML("afterbegin" , recipeHTML);

};

export const updateRecipeData = recipe => {
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;
    const allIngredients = Array.from(document.querySelectorAll(".recipe__count")).forEach((element , index) => {
        element.textContent = formatNumber(recipe.ingredients[index].count);
    });
};