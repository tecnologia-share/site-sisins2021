## **Delete Course**

Exclui um curso.

- **URL**

  /api/courses

</br>

- **Method:**

  `DELETE`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `id: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:** `{ "message": "Course successfully deleted." }`

</br>

- **Error Response:**

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Course not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Only the administrator can delete a course." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
