import uniqid from 'uniqid';

export default class ShoppingList{
    constructor(){
        this.items = [];
    }

    addItem(item){
        const newItem = {
            count : item.count,
            unit : item.unit,
            ingredient : item.ingredient,
            id : uniqid()  //using unique ID library
        }
        this.items.push(newItem);
    }
    removeItem(id){
        const index = this.items.findIndex(elem => elem.id === id); //get the index of the element to delete
        this.items.splice(index , 1);
    }

    updateCount(id , newCount){
        //find = find the element and not the index of it
        this.items.find(element => element.id === id).count = newCount; 
    }
};