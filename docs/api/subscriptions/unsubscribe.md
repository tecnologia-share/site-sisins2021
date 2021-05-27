## **Unsubscribe**

Desinscreve o participante de um curso.

- **URL**

  /api/subscriptions

</br>

- **Method:**

  `DELETE`

</br>

- **Headers**

  `authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIZXkiOiJ0aGlzIGlzIGFuIGV4YW1wbGUgdG9rZW4gOkQifQ.LZ9wWBMzgpV80AtEjjN5KW45WbFcZRZ4pFjHCX7Kr_g`

</br>

- **Data Params**

  `courseId: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:** `{ "message": "Successful unsubscription." }`

</br>

- **Error Response:**

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "This course is not open for unsubscriptions." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "Participant is not enrolled in this course." }`

  OR

  - **Code:** 400 BAD REQUEST

    **Content:** `{ "message": "courseId is required." }`

  OR

  - **Code:** 401 UNAUTHORIZED

    **Content:** `{ "message": "Invalid token." }`
