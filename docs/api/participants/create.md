## **Create**

Cria o participante.

- **URL**

  /api/register

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
  `asksAnswers:` [ {
    <br>
    `asksId: string`
    </br>
    `response: string`
    <br>
  } ]


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

    **Content:** `{ "message": "You do not submit all asks" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Some answer is missing." }`
