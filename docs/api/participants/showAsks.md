## **Show Asks**

Lista as perguntas do cadastro.

- **URL**

  /api/participants/asks

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
          "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "pergunta": "Como vc conheceu a share?",
          "tipo": "ALTERNATIVE",
          "alternativa1": "Amigos",
          "alternativa2": "Professor",
          "alternativa3": "Outros",
          "alternativa4": "undefined",
          "alternativa5": "undefined",
          "created_at": "2021-03-17T21:20:20.143Z"
        },
        {
          "id": "71a0c4d2-5649-4b03-abca-631c8f9ebf72",
          "pergunta": "O que vc acha da Share?",
          "tipo": "DISCURSIVE",
          "alternativa1": "undefined",
          "alternativa2": "undefined",
          "alternativa3": "undefined",
          "alternativa4": "undefined",
          "alternativa5": "undefined",
          "created_at": "2021-03-17T21:20:20.143Z"
        }
      ]
    }
    ```

</br>

- **Error Response:**

  
