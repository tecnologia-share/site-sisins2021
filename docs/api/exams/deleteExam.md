## **Delete Exam**

Exclui uma prova.

- **URL**

  /api/exams

</br>

- **Method:**

  `DELETE`

</br>

- **Headers**

  `x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `id: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:** `{ "message": "Exam successfully deleted." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Exam not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Only the administrator can delete an exam." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
