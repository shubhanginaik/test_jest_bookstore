### **getAllIdsByName(value)**

Returns all ids of the books matching the value of name
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of book id where the books name matches the given value. If there is no match or parameter is missing, an empty array is returned.

  ### Test cases:
  First create book object from BookStorage class with default data to be used in all tests.

  ## Test 1: with valid name `'Databases - The rise and fall'`.
  ```js
  getAllIdsByName("Databases - The rise and fall")
  ```

  returns
  ```json
  [2]
  ```

  ## Test 2: with wrong book name `Advanced Java`.

  ```js
  getAllIdsByName("Advanced Java")
  ```

  returns
  ```json
  []
  ```

  ## Test 3: with no book name.

  ```js
  getAllIdsByName("")
  ```

  returns
  ```json
  []
  ```