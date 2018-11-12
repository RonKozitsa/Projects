import axois from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {
    const key = "08b5f91c6cd8ba4774d5c63b48fb8f54";
    try{
    //axois - like fetch but better , returns the data as json file
    const res = await axois(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
    this.recipes = res.data.recipes;
    }catch(error){
        alert(error);
    }
    }
}