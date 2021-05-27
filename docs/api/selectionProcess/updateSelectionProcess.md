## **Update Selection Process**

Atualiza as informações de um processo seletivo.

- **URL**

  /api/selection-process

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

  `editalLink?: string`

  `manualLink?: string`

  `startDate?: string`

  `endDate?: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "message": "Selection process successfully updated.",
      "selectionProcess": {
        "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "startDate": "2021-03-17T21:20:20.143Z",
        "endDate": "2021-03-17T21:20:20.143Z",
        "name": "Selection Process Name",
        "created_at": "2021-03-17T21:20:20.143Z"
      }
    }
    ```

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "endDate must be greater than startDate." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Invalid Date." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Selection Process not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Only the administrator can update a selection process." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
