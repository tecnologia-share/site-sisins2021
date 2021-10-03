## **Evaluate Subscribe**

Avaliar um participante alterando o status da inscrição, e se o status for de desistência(DROPPED_OUT) bloqueia o participante de se inscrever nos cursos por um ano.

- **URL**

  /api/subscriptions

</br>

- **Method:**

  `PATCH`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

     ```json
    {
      "status": "APPROVED",
    }
    ```
    OR

    ```json
    {
      "status": "DROPPED_OUT",
      "blocked_date": "Mon Oct 03 2022",
    }
    ```

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "id is a Sequired field - status must be one of the following values: NOT_EVALUATED, APPROVED, APPROVED_LIST_2, WAITING_LIST, DISAPPROVED, DROPPED_OUT, CONCLUDED" }`

    OR

   - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "You are not authorized to access this route" }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Subscribe not found." }`
