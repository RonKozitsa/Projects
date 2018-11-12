// Global app controller
import Search from './models/Search';
import {DOM_ELEMENTS , Displayspinner , removeSppiner} from './views/base';
import * as searchView from './views/SearchView' ;
import Recipe from './models/recipe';
import {showRecipe , clearRecipeView , updateRecipeData} from './views/recipeView';
import ShoppingList from './models/ShoppingList';
import * as ShoppingListView from './views/ShoppingListView';
import Likes from './models/likes';
import * as likesView from './views/likesView'
/* Global state of the app 
* - Search Object 
* - Current recipe object
* - Shopping list object 
* - Liked recipes 
*/
const state = {};

/*  Search object   */
const controlSearch = async () => {
    //1) get search input of user 
    const query = searchView.getInput();

    //2) if there is an input create a search object 
    if (query){
        state.search = new Search(query);
    }

    // 3) show loading spinner on UI and prepare UI for results
    //clear searh bar
    searchView.clearInput();
    //clear last search results
    searchView.clearResults();
    //display spinner
    Displayspinner(DOM_ELEMENTS.results);
    try{
    //4) search for recipes
    await state.search.getResults();

    //5) show the results to the UI
    searchView.showResults(state.search.recipes);
    }catch(error){
        alert("error in control search at index.js " + error);
    }finally{
        //remove spinner
        removeSppiner();
    }
};

DOM_ELEMENTS.searchForm.addEventListener('submit' , e => {
    e.preventDefault();
    controlSearch();

});

DOM_ELEMENTS.resultsPages.addEventListener('click' , e => {
    //returns the closest element to the clcked one with the class "btn-inline"
    const button = e.target.closest('.btn-inline');
    //if there is a button
    if(button){
        //since we added 'data-goto' to the button element , it was added to our dataset property of the button , and now we can access it through "button.dataset.'the name we gave it'"
        const goToPage = parseInt(button.dataset.goto);
        searchView.clearResults();
        searchView.showResults(state.search.recipes , goToPage);

    }
});

/*  Recipe object   */
const controlRecipe = async () => {
    //window.location = the entire url , when we do .hash we only take the hash part of the url.
    const Id = window.location.hash.replace('#','');//get only the id without the #
    if (Id){ // if we actually have a hash ID

        //1. prepare UI for changes
        clearRecipeView();
        Displayspinner(DOM_ELEMENTS.recipe);

        //2. create new recipe object
        state.recipe = new Recipe(Id);
        try{
        //get recipe data - await for data to arrive from server
        await state.recipe.getRecipe();
        //parse ingredients 
        state.recipe.parseIngredients();

        //calc servings and time
        state.recipe.calcTime();
        state.recipe.calcServings();
        //show results in the UI
        showRecipe(state.recipe , state.likes.isLiked(state.recipe.id));
        }catch(error){
            alert("error in control recipe at index.js " + error);
        }finally{
        removeSppiner();

        }
    }
};

//add event listeners for hash changing and for page loading 
['hashchange','load'].forEach(event => window.addEventListener(event , controlRecipe));
DOM_ELEMENTS.recipe.addEventListener('click', e => {
    if(e.target.matches('.button-decrease, .button-decrease *')){  //the * means also any child of it
        if(state.recipe.servings >1){
        state.recipe.updateServings('dec');
        updateRecipeData(state.recipe);
        }
    }else if (e.target.matches('.button-increase, .button-increase *')){ 
        state.recipe.updateServings('inc');
        updateRecipeData(state.recipe);
    }else if(e.target.matches('.recipe__btn--addToList')){
            controlList();
            ShoppingListView.addButton(state.list);
    }else if(e.target.matches('.recipe__love') || e.target.matches('.header__likes')){
            controlLikes();
    }
});

/*  List object   */
const controlList = () => {
    // Create a new list if there is not one yet
    if (!state.list) state.list = new ShoppingList();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach((el ,index) => {
        const newItem = state.list.addItem(el);
        ShoppingListView.displayItem(newItem);
    });
};

// Handle delete and update list item events
DOM_ELEMENTS.shoppingList.addEventListener('click', e => {
    //case 'delete all' button was pressed
     if(e.target.matches('.list_button')){
        ShoppingListView.deleteAll();
        state.list.removeAllItems();
        return;
    }
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete button
    if (e.target.matches('.shopping__delete') || e.target.matches('.X_Button')){
        // Delete from state
        state.list.removeItem(id);
        //if no more items in list , remove the button
        if(state.list.items.length == 0) ShoppingListView.removeButton();

        // Delete from UI
        ShoppingListView.deleteItem(id);

    // Handle the count update
    } else if (e.target.matches('.shopping_count_item')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

/*  Likes object   */

//on page load get liked recipes and display them
window.addEventListener('load' , e => {
    state.likes = new Likes();
    state.likes.getLocalStorage();
    //toggle like menu 
    likesView.toggleLikeMenu(state.likes.getNumOfLikes());
    //show the likes
    state.likes.likes.forEach(likesView.displayLike);
});
const controlLikes = () =>{
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // if the user has not yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add like to the state
        state.likes.addLike(state.recipe);
        // Toggle the like button
        likesView.toggleLikeButton(true);

        // Add like to UI list
        likesView.displayLike(state.recipe);


    // User already liked current recipe
    } else {
        // Remove like from the state
        state.likes.removeLike(currentID);

        // Toggle the like button
        likesView.toggleLikeButton(false);

        // Remove like from UI list
        likesView.deleteLike(currentID);    
    }
    likesView.toggleLikeMenu(state.likes.getNumOfLikes());
};