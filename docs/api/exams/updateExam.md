## **Update Exam**

Atualiza informações de uma prova.

- **URL**

  /api/exams

</br>

- **Method:**

  `PATCH`

</br>

- **Headers**

  `x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  ```js
    id: string,
    questions: Array<{
      id?: string,
      title: string,
      question: string,
      image: string,
      alternative1: string,
      alternative2: string,
      alternative3: string,
      alternative4: string,
      alternative5: string,
      correctAlternative: number,
      points: number
    }>
  ```

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "message": "Exam successfully updated.",
      "exam": {
        "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "courseId": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "created_at": "2021-03-17T21:20:20.143Z"
      }
    }
    ```

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Exam not found." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Question 71a0c4d2-5649-4b03-abca-631c8f9ebf72 not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Only the administrator can update an exam." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
