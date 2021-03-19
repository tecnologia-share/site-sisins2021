| método | rota                                                                   | descrição                                               |
| ------ | ---------------------------------------------------------------------- | ------------------------------------------------------- |
| POST   | [/api/authenticate](./authenticate/authentication.md)                  | Retorna o token de autenticação.                        |
| POST   | [/api/authenticate-share](./authenticate/authenticationShare.md)       | Retorna o token de autenticação de um usuário da Share. |
| PATCH  | [/api/participants](./participants/updatePersonalData.md)              | Atualiza os dados pessoais do participante.             |
| PATCH  | [/api/participants/update-email](./participants/updateEmail.md)        | Atualiza o email do participante.                       |
| PATCH  | [/api/participants/update-password](./participants/updatePassword.md)  | Atualiza a senha do participante.                       |
| POST   | [/api/subscriptions](./subscriptions/subscribe.md)                     | Inscreve o participante em um curso.                    |
| DELETE | [/api/subscriptions](./subscriptions/unsubscribe.md)                   | Desinscreve o participante de um curso.                 |
| POST   | [/api/selection-process](./selectionProcess/createSelectionProcess.md) | Cria um processo seletivo.                              |
| PATCH  | [/api/selection-process](./selectionProcess/updateSelectionProcess.md) | Atualiza as informações de um processo seletivo.        |
| DELETE | [/api/selection-process](./selectionProcess/deleteSelectionProcess.md) | Exclui um processo seletivo.                            |
| POST   | [/api/courses](./courses/createCourse.md)                              | Cria um curso.                                          |
| PATCH  | [/api/courses](./courses/updateCourse.md)                              | Atualiza informações de um curso.                       |
| DELETE | [/api/courses](./courses/deleteCourse.md)                              | Exclui um curso.                                        |
| POST   | [/api/exams](./exams/createExam.md)                                    | Cria uma prova.                                         |
| PATCH  | [/api/exams](./exams/updateExam.md)                                    | Atualiza informações de uma prova.                      |
| DELETE | [/api/exams](./exams/deleteExam.md)                                    | Exclui uma prova.                                       |
