## **Show Selection Process Courses**

Lista os cursos do processo seletivo.

- **URL**

  /api/selection-process/{id}/courses

</br>

- **Method:**

  `GET`

</br>

- **Data Params**

  `id: string`

</br>

- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "courses": [
        {
          "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "name": "Course Name 1",
          "category": "Category",
          "description": "Description",
          "time": "Time",
          "professor": "Professor",
          "hasExam": true,
          "selectionProcessId": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "created_at": "2021-03-17T21:20:20.143Z"
        },
        {
          "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "name": "Course Name 2",
          "category": "Category",
          "description": "Description",
          "time": "Time",
          "professor": "Professor",
          "hasExam": true,
          "selectionProcessId": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "created_at": "2021-03-17T21:20:20.143Z"
        }
      ]
    }
    ```

</br>

- **Error Response:**

  - **Code:** 404 NOT FOUND

    **Content:** `{ "message": "Selection Process not found." }`
