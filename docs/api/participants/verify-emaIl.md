## **Update Email**

Atualiza o email do participante.

- **URL**

  /api/register/verify-email/:token

</br>

- **Method:**

  `GET`

</br>

- **Success Response:**

  - **Code:** 302 OK

    **Redirect:** `Screen Login Participant`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Email already confirmed!" }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Participant not found." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
