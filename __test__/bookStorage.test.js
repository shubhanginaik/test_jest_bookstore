'use strict';

const BookStorage= require('../bookStorage');
const books = require('../datastorage.json');

describe('Testing Constructor', ()=>{
    test('Test 1: missing parameter', ()=>{
        expect(()=> new BookStorage()).toThrow('data storage missing')
    });
});
describe('Tests for getById(id', ()=>{
    const book = new BookStorage(books);

    test('Test 1: getById(1)', ()=>{
        const expected=[{
            "id": 1,
            "name": "NoSql - New Hope",
            "author": "Layla Jones",
            "topics": ["noSql", "sql", "future databases"],
            "price": 25,
            "extras": [{
                "name": "hard cover",
                "price": 30
              },
              {
                "name": "cd",
                "price": 15
              }
            ]
          }];
          expect(book.getById(1)).toEqual(expected);
    });

    test('Test 2: with wrong Id: 4',()=>{
        expect(book.getById(4)).toBeNull();
    });

    test('Test 3: with wrong parameter type',()=>{
        expect(book.getById('2')).toBeNull();
    })

    test('Test 4: with no Id', ()=>{
        expect(()=>book.getById()).toThrow('parameter missing')
    });// end of getById test cases

    describe('Test cases for getAllIdsByName(value)', ()=>{
        const book= new BookStorage(books);
        test('Test 1: with valid name Databases - The rise and fall', ()=>{
            expect(book.getAllIdsByName('Databases - The rise and fall')).toEqual([2]);
        });

        test('Test 2: with wrong book name', ()=>{
            expect(book.getAllIdsByName('Advanced Java')).toEqual([]);
        });

        test('Test 3: with no book name', ()=>{
            expect(book.getAllIdsByName()).toEqual([]);
        }); // end of getAllIdsByName test cases
    })
})
