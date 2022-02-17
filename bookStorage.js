'use strict';

module.exports = class BookStorage{
    constructor(jsonData){
        if(!jsonData) throw new Error('data storage missing');
        this.bookStorage = jsonData;
    } //end of constructor
    getById(id){
        const found=[];
       if(id){
           for(let book of this.bookStorage){
               if(book.id === id){
                   found.push(book);
                   return found;
               }
               return null;
           }
           
       }
       throw new Error('parameter missing')
    } //end of getById method

    getAllIdsByName(value){
        
    } //end of getAllIdsByName method

    getAllBookAuthors(){

    } //end of getAllBookAuthors method
}