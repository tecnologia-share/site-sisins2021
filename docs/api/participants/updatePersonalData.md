## **Update Personal Data**

Atualiza os dados pessoais do participante.

- **URL**

  /api/participants

</br>

- **Method:**

  `PATCH`

</br>

- **Headers**

  `x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `nome?: string`

  `telefone?: string`

  `nascimento?: string`

  `pais?: string`

  `estado?: string`

  `cidade?: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:** `{ "message": "Participant updated." }`

</br>

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Token inválido." }`
