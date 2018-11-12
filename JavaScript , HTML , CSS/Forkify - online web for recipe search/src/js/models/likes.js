export default class Likes{
    constructor(){
        this.likes = [];
    }

    addLike(recipe){
        const like = {
            id : recipe.id,
            publisher : recipe.publisher,
            title : recipe.title,
            image : recipe.image
        };
        this.likes.push(like);
        this.setLocalStorage();
    }
    removeLike(id){
        const index = this.likes.findIndex(elem => elem.id === id); //get the index of the element to delete
        this.likes.splice(index , 1);
        this.setLocalStorage();
    }

    isLiked(id){
        return (this.likes.findIndex(elem => elem.id === id) != -1);
    }

    getNumOfLikes(){
        return this.likes.length;
    }

    setLocalStorage(){
        localStorage.setItem('likes' , JSON.stringify(this.likes)); //JSON.stringify is cause local storage only gets strings so we need to convert the array to a string object 
    }

    getLocalStorage(){
        const storage =JSON.parse(localStorage.getItem('likes')); //convert to the array again
        if(storage) this.likes = storage;
    }

}