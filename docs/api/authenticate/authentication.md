## **Authentication**

Retorna o token de autenticação.

- **URL**

  /api/authenticate

</br>

- **Method:**

  `POST`

</br>

- **URL Params**

  None

</br>

- **Data Params**

  `email: string`
  `password: string`

</br>

- **Success Response:**

  - **Code:** 200 OK
    **Content:** `{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g" }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST
    **Content:** `{ "message": "Email and password are required." }`

  OR

  - **Code:** 401 UNAUTHORIZED
    **Content:** `{ "message": "Invalid email or password." }`
