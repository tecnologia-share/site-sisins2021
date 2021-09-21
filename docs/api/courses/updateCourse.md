## **Create Course**

Atualiza informações de um curso.

- **URL**

  /api/courses

</br>

- **Method:**

  `PATCH`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `id: string`

  `name?: string`

  `category?: string`

  `description?: string`

  `time?: string`

  `professor?: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "message": "Course successfully updated.",
      "selectionProcess": {
        "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "name": "Name",
        "category": "Category",
        "description": "Description",
        "time": "Time",
        "professor": "Professor",
        "selectionProcessId": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "created_at": "2021-03-17T21:20:20.143Z"
      }
    }
    ```

</br>

- **Error Response:**

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Course not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "You are not authorized to access this route" }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`