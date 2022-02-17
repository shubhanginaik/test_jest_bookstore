# End assignment

## Task: Create and test a BookStorage class
Create a class for book data. Data storage is passed to the constractor as a parameter. Use the following json object as default storage

### **datastorage.json**

```json
[
  {
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
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [{
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
  
]
```

Create a class BookStorage

## Constructor

### **constructor(jsonData)**
The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.


## Methods

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the book
  - Return: returns the book object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

### **getAllIdsByName(value)**

Returns all ids of the books matching the value of name
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of book id where the books name matches the given value. If there is no match or parameter is missing, an empty array is returned.
  
### **getAllBookAuthors()**

Returns an array of different book authors. 

  - Parameters: none
  - Return: Returns an array of different book authors. If no authors are found, returns an empty array. The author is added to the result array only once.

### **getAllBooksByAuthor(author)**

Returns an array of book objects of given author

  - Parameters: author of the book to be searched
  - Returns an array of book objects of given author. If no book of given author is found, returns an empty array.
  - If a parameter author is missing, an exeption **'missing parameter'** is thrown.

### **hasTopics(id)**
  
- Parameters: id of the book
- Return: returns true if the book has topics else returns false. If parameter id is missing false is returned
 


### **GetBookTopics(id)**

Returns an array of book topics. If none found, returns an empty array.

  - Parameters: id of the book 
  - Return: returns topics as an array

### **getPriceWithoutExtras(id)**

Returns the price with out extras

  - Parameters: id of the book
  - Return: The price of the book not including the price of the extras
  - if no book with the given number is found throws an exeption `nothing found with given id`

### **getTotalPrice(id)**

Returns the total price of the book including the total price of the extras

  - Parameters: id of the book
  - Return: The price of the book including the total price of the extras
  - if no book with the given number is found throws an exeption `nothing found with given id`

### **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the book
 
  - Parameters: id of the book to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no book with the given number is found throws an exeption `nothing found with given id`




## Create a folder for the testproject
- the name of the folder should include your name
- use **datastorage.json** as a data source
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder __tests__ for tests
- edit the test script in the **package.json**

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file