# Referência de Erros da API

Este documento fornece uma referência para os códigos de erro e mensagens retornados pela API.

## Formato de Erro

Todos os erros retornados pela API seguem este formato padrão:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Uma mensagem descritiva de erro.",
    "details": "Informações adicionais sobre o erro (se disponíveis)."
  }
}
```

## Códigos de Erro

| Código           | Status HTTP | Descrição                                  |
|------------------|-------------|--------------------------------------------|
| `INVALID_INPUT`  | 400         | A entrada fornecida é inválida.            |
| `NOT_FOUND`      | 404         | O recurso solicitado não foi encontrado.   |
| `UNAUTHORIZED`   | 401         | Autenticação é necessária ou falhou.       |
| `FORBIDDEN`      | 403         | Você não tem permissão para acessar este recurso. |
| `SERVER_ERROR`   | 500         | Ocorreu um erro interno no servidor.       |
| `RATE_LIMITED`   | 429         | Muitas solicitações foram feitas.          |

## Exemplo de Resposta de Erro

### Exemplo de Entrada Inválida

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "O campo 'email' é obrigatório.",
    "details": "Certifique-se de que todos os campos obrigatórios foram fornecidos."
  }
}
```

### Exemplo de Não Encontrado

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "O recurso solicitado não pôde ser encontrado.",
    "details": "Verifique o ID do recurso e tente novamente."
  }
}
```

## Solução de Problemas

- **400 (Bad Request):** Verifique os parâmetros e o payload da solicitação.
- **401 (Unauthorized):** Certifique-se de que sua chave ou token da API é válido.
- **403 (Forbidden):** Verifique suas permissões para o recurso solicitado.
- **404 (Not Found):** Confirme se o recurso existe e se a URL está correta.
- **500 (Server Error):** Tente novamente mais tarde ou entre em contato com o suporte.

Para mais assistência, entre em contato com nossa [equipe de suporte](mailto:support@example.com).
