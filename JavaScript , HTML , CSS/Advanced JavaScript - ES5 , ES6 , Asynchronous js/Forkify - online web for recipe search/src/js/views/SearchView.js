import {DOM_ELEMENTS} from './base'

//return the search input of user
export const getInput = () => DOM_ELEMENTS.searchInput.value;

export const clearInput = () => {
    //sets the value of search bar to empty string
    DOM_ELEMENTS.searchInput.value = '';
};

export const clearResults = () => {
    //set the innerHTML property of the results to empty
    DOM_ELEMENTS.searchResultList.innerHTML = '';
    DOM_ELEMENTS.resultsPages.innerHTML = '';
};

//limit title length for better visibility in UI 
export const limitRecipeTitle = (title, limit = 17) => {
    if(title.length > limit){
        const reducedTitle = [];
        title.split(' ').reduce((acc , cur) => {
            if(acc + cur.length <= limit){
                reducedTitle.push(cur);
            }
            return acc + cur.length;
        },0);
        
        return `${reducedTitle.join(' ')} ...`;
    }
    return title; 


};

//add recipe element to the HTML page
const showRecipe = recipe => {
    const htmlElement = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    DOM_ELEMENTS.searchResultList.insertAdjacentHTML("beforeend" , htmlElement);
};


//create buttons for next pages
const createButton = (page , type) => `
                <button class="btn-inline results__btn--${type}" data-goto=${type == 'prev' ? page - 1 : page + 1}>
                    <span>${type == 'prev' ? "page " + (page - 1) : "page " +  (page + 1)}</span>    
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type == 'prev' ? "left" : "right"}"></use>
                    </svg>
                `;


//show pages buttons (next , back)
const showButtons = (page, numOfResults, resultsPerPage) => {
    const numOfPages = Math.ceil(numOfResults / resultsPerPage);
    let button;
    if(page == 1){ //case we are in the first page create only next button
        button = createButton(page,'next');
     
    }else if (page == numOfPages){ //case in the last page , create only back button
        button = createButton(page,'prev');
    }else{  //not in first or last page , create both buttons 
        button = `${createButton(page,'prev')} 
                  ${createButton(page,'next')}`
    }
    DOM_ELEMENTS.resultsPages.insertAdjacentHTML('afterbegin' , button);    
};

//show the recipes results on the UI , and limit num of results per page
export const showResults = (recipes, page = 1, resultsPerPage = 10) => {
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;
    //show the results on the UI
    recipes.slice(start,end).forEach(showRecipe);
    //set results pages
    showButtons(page , recipes.length , resultsPerPage);
};