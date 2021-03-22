## **Create**

Cria o participante.

- **URL**

  /api/registerl

</br>

- **Method:**

  `POST`

</br>

- **Data Params**

  `name: string`
  `email: string`
  `password: string`
  `phone: string`
  `birth_date: Date`
  `country: string`
  `state: string`
  `city: string`
  `asksAnswers` `[`
  `{`
  `asksId: string`
  `response: string`
  `}`
  `]`

</br>

- **Success Response:**

  - **Code:** 201 OK

    **Content:** `{ "message": "Confirmation email sent to email@example.com." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Email already exists!" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Ask not found." }`
