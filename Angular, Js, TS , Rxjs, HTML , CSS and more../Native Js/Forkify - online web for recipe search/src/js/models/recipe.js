import axios from 'axios'

export default class Recipe{
    constructor(id){
        this.id = id;
    }
    
    async getRecipe(){
        try{
            const key = "29fd5f9247aa995dcab6b7488977bfa7";
            const result = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = result.data.recipe.title;
            this.image = result.data.recipe.image_url;
            this.publisher = result.data.recipe.publisher;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        }catch(error){
            alert("error in Getrecipe at recipe.js " + error);
        }
    }
    
    calcTime(){
        // Assuming we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings(){
        //initialize all recipes for 4 people
        this.servings = 4;
    }

    parseIngredients(){
        //1. change units to one desired form
        const found = ['tablespoons','tablespoon','teaspoons','teaspoon','ounces','ounce','cups','pounds'];
        const needed = ['tbsp','tbsp','tsp','tsp','oz','oz','cup','pound','g','kg'];
        const parsedIngredients = this.ingredients.map(elem => {
            let ingredient = elem.toLowerCase();
            //replace each found word with the needed word
            found.forEach((element,index) => {
                ingredient = ingredient.replace(element , needed[index])
            });
            
            //2. remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

            //3. sets counts and units
            //split the ingredient into an araay of words
            const ingredientsArray = ingredient.split(' ');
            //looks for words which needs amount before them
            const indexOfUnits = ingredientsArray.findIndex(el => needed.includes(el));
            
            let ingredientObject;
            //if we found something
            if(indexOfUnits > -1){
                let count;
                //get the amount - various cases to handl
                let arrCount = ingredientsArray.slice(0, indexOfUnits);
                if (arrCount.length == 1){
                    //case only one number - if looks like this 3 or looks like this 1-1/2
                    count = eval(arrCount[0].replace('-','+')).toFixed(1);
                }else{
                    //if looks like this - 3 1/2 , change to 3.5
                    count = eval(arrCount.join('+')).toFixed(1);
                }
                ingredientObject = {
                    count, // means - count : count
                    unit : ingredientsArray[indexOfUnits],
                    ingredient : ingredientsArray.slice(indexOfUnits + 1).join(' ')
                }
                //there is a unit
            }else if(parseInt(ingredientsArray[0],10)){
                //if we could parse first word to integer in base 10 , means it is a number (case like 'one olive')
                ingredientObject = {
                    count : parseInt(ingredientsArray[0],10), 
                    unit : '',
                    ingredient : ingredientsArray.slice(1).join(' ')
                }

            }else if(indexOfUnits === -1){
                //no unit
                ingredientObject = {
                    count : 1, 
                    unit : '',
                    ingredient //same as -> ingredient : ingredient
                }
            }
            return ingredientObject;
        });
        this.ingredients = parsedIngredients;
    }

    updateServings(type){
        const newServings = type == 'dec'? this.servings - 1 : this.servings + 1;

        //update ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });
        this.servings = newServings;
    }
}