## **Authenticate**

Retorna um token e as informações do participante.

- **URL**

  /authenticate

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  **Required:**

  `email: string`
  `password: string`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Email ou senha inválidos." }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
