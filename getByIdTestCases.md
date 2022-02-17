### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the book
  - Return: returns the book object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`
  
  ### Test Cases
  First create book object from BookStorage class with default data to be used in all tests.

  ## Test 1: with Id 1
  ```js
  getById(1)
  ```
  returns

  ```json
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
  }
  ```

  ## Test 2: with wrong(unavailable) Id 4
  ```js
  getById(4)
  ```
  returns
  ```json
  null
  ``` 

  ## Test 3: with wrong parameter type
```js
getById('2')
```
returns 
```json
null
```

## Test 4: with empty Id
```js
getById()
```
throws an exception `'missing parameter'`

