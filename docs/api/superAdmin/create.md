## **Create**

Cria um usuário da share, por exemplo professor ou membro administrativo.

- **URL**

  /api/super-admin

</br>

- **Method:**

  `POST`

</br>

- **Data Params**

  `name: string`
  `email: string`
  `password: string`
  `cpf: string`
  `role: string`
  `phone: string`
  `birth_date: Date`
  `country: string`
  `state: string`
  `city: string`


</br>

- **Success Response:**

  - **Code:** 201 OK

    **Content:** `{ "message": "User Share successfully created." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Email already exists!" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "CPF already exists!" }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Only the super-administrator can create a user share." }`
