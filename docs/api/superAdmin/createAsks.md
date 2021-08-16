## **Create Ask**

Cria uma pergunta para ser usada no momento do cadastro dos participantes.

- **URL**

  /api/super-admin/ask

</br>

- **Method:**

  `POST`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `type: string;`
  `ask: string;`
  `alternatives?:` {
    `one?: string;`
    `two?: string;`
    `tree?: string;`
    `four?: string;`
    `five?: string;`
  }


</br>

- **Success Response:**

  - **Code:** 201 OK

    **Content:** `{ "message": "Question successfully created", questionCreated }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Question of type discursive do not have alternatives" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Question of type alternative have alternatives" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Invalid type" }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "You are not authorized to access this route" }`
