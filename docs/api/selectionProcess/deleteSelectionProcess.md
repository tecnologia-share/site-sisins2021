## **Delete Selection Process**

Exclui um processo seletivo.

- **URL**

  /api/selection-process

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

    **Content:** `{ "message": "Selection process successfully deleted." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "It is necessary to exclude courses associated with this selection process in order to exclude it." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Selection Process not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "You are not authorized to access this route" }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
