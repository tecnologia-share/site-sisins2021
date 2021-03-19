## **Get Exam**

Retorna a prova do curso.

- **URL**

  /api/courses/{id}/exam

</br>

- **Method:**

  `GET`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "exam": {
        "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
        "title": "Title",
        "text": "Text",
        "created_at": "2021-03-17T21:20:20.143Z",
        "questions": [
          {
            "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
            "question": "Question 1",
            "alternative1": "Alternative 1",
            "alternative2": "Alternative 2",
            "alternative3": "Alternative 3",
            "alternative4": "Alternative 4",
            "alternative5": "Alternative 5",
            "correctAlternative": 2,
            "image": "image/path",
            "points": 10,
            "created_at": "2021-03-17T21:20:20.143Z"
          },
          {
            "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
            "question": "Question 2",
            "alternative1": "Alternative 1",
            "alternative2": "Alternative 2",
            "alternative3": "Alternative 3",
            "alternative4": "Alternative 4",
            "alternative5": "Alternative 5",
            "correctAlternative": 3,
            "image": "image/path",
            "points": 5,
            "created_at": "2021-03-17T21:20:20.143Z"
          }
        ]
      }
    }
    ```

</br>

- **Error Response:**

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Course not found." }`

  OR

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "This course has no exam." }`
