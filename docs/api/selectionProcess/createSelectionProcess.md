## **Create Selection Process**

Cria um processo seletivo.

- **URL**

  /api/selection-process

</br>

- **Method:**

  `POST`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `name: string`

  `startDate: string`

  `endDate: string`

  `editalLink: string`

  `manualLink: string`

</br>

- **Success Response:**

  - **Code:** 201 CREATED

    **Content:**

    ```json
    {
      "message": "Selection process successfully created.",
      "selectionProcess": {
        "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "startDate": "2021-03-17T21:20:20.143Z",
        "endDate": "2021-03-17T21:20:20.143Z",
        "name": "Selection Process Name",
        "editalLink": "link/to.edital",
        "manualLink": "link/to.manual",
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

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "You are not authorized to access this route" }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
