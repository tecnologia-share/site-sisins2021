## **Subscribe**

Inscreve o participante em um curso.

- **URL**

  /api/subscriptions

</br>

- **Method:**

  `POST`

</br>

- **Headers**

  `x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `courseId: string`

  `reason: string`

  `examAnswers?: Array<{ questionId: string; response: string }>`

</br>

- **Success Response:**

  - **Code:** 201 CREATED

    **Content:** `{ "message": "Successful subscription." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Something wrong with the request." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Participant already subscribed in this course." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Participant already has two subscriptions." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Course not found." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "This course is not open for subscriptions." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Some answer is missing." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Token inválido." }`
