import axois from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {
    const key = "29fd5f9247aa995dcab6b7488977bfa7";
    try{
    //axois - like fetch but better , returns the data as json file
    const res = await axois(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
    this.recipes = res.data.recipes;
    }catch(error){
        alert(error);
    }
    }
}