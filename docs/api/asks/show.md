## **Show Asks**

Lista as perguntas do cadastro.

- **URL**

  /api/ask

</br>

- **Method:**

  `GET`

</br>


- **Success Response:**

  - **Code:** 200 OK

    **Content:**

    ```json
    {
      "asks": [
        {
          "id": "bbf6d1a6-cde1-41c4-9ead-2350e422b735",
          "ask": "any_ask",
          "type": "DISCURSIVE",
          "alternatives": {
            "one": null,
            "two": null,
            "tree": null,
            "four": null,
            "five": null
          }
        },
        {
          "id": "a88e5d2f-c51c-4f33-98f8-6b0c4201132a",
          "ask": "any_ask",
          "type": "ALTERNATIVE",
          "alternatives": {
            "one": "any_alternative",
            "two": "any_alternative",
            "tree": "any_alternative",
            "four": "any_alternative",
            "five": "any_alternative"
          }
        }
      ]
    }
    ```

</br>

- **Error Response:**

  
