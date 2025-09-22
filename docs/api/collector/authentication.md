# Autenticação

A API do Collector utiliza autenticação HTTP Basic para garantir acesso seguro.
Todas as requisições à API devem incluir suas credenciais de usuário codificadas em Base64 no cabeçalho `Authorization`.

## Como Funciona a Autenticação Basic

A autenticação HTTP Basic é um método simples onde suas credenciais (nome de usuário e senha) são codificadas em Base64 e enviadas no cabeçalho `Authorization` de cada requisição.

### Formato do Cabeçalho

```
Authorization: Basic <credenciais_em_base64>
```

Onde `<credenciais_em_base64>` é a codificação Base64 de `username:password`.

## Preparando suas Credenciais

Para usar a API, você precisa:

1. Ter uma conta válida na Zarv
2. Conhecer seu nome de usuário (email) e senha
3. Codificar suas credenciais em Base64

### Codificação Base64

Para codificar suas credenciais, combine seu nome de usuário e senha com dois pontos (`:`) e codifique em Base64:

```
echo -n "seu.email@zarv.com:sua_senha" | base64
```

Resultado: `c2V1LmVtYWlsQHphcnYuY29tOnN1YV9zZW5oYQ==`

## Exemplos de Uso

### Fazendo Requisições com Basic Auth

::: code-group

```js [Node.js]
const axios = require("axios");

// Método 1: Codificação manual
const credentials = Buffer.from("seu.email@zarv.com:sua_senha").toString('base64');
axios.get("https://collector.zarv.com/v3/api/<resource>", {
  headers: {
    'Authorization': `Basic ${credentials}`
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));

// Método 2: Usando auth do axios
axios.get("https://collector.zarv.com/v3/api/<resource>", {
  auth: {
    username: "seu.email@zarv.com",
    password: "sua_senha"
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

```go [Go]
package main

import (
  "encoding/base64"
  "fmt"
  "net/http"
)

func main() {
  username := "seu.email@zarv.com"
  password := "sua_senha"
  
  // Codificar credenciais em Base64
  credentials := base64.StdEncoding.EncodeToString([]byte(username + ":" + password))
  
  req, err := http.NewRequest("GET", "https://collector.zarv.com/v3/api/<resource>", nil)
  if err != nil {
    fmt.Println("Erro ao criar requisição:", err)
    return
  }

  req.Header.Set("Host", "collector.zarv.com")
  req.Header.Set("Authorization", "Basic "+credentials)
  
  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Erro ao fazer requisição:", err)
    return
  }
  defer resp.Body.Close()
  
  fmt.Println("Status da resposta:", resp.Status)
}
```

:::

## Exemplo de Requisição HTTP

```http
GET /v3/api/<resource> HTTP/1.1
Host: collector.zarv.com
Authorization: Basic c2V1LmVtYWlsQHphcnYuY29tOnN1YV9zZW5oYQ==
Content-Type: application/json
```

## Segurança e Boas Práticas

### Segurança das Credenciais

- **HTTPS Obrigatório**: Sempre use HTTPS para proteger suas credenciais em trânsito
- **Armazenamento Seguro**: Nunca armazene credenciais em código-fonte ou logs
- **Variáveis de Ambiente**: Use variáveis de ambiente para armazenar credenciais

### Exemplo com Variáveis de Ambiente

::: code-group

```bash [Bash]
# Definir variáveis de ambiente
export ZARV_USERNAME="seu.email@zarv.com"
export ZARV_PASSWORD="sua_senha"

# Usar nas requisições
curl -X GET "https://collector.zarv.com/v3/api/<resource>" \
-u "$ZARV_USERNAME:$ZARV_PASSWORD"
```

```js [Node.js]
const axios = require("axios");

const username = process.env.ZARV_USERNAME;
const password = process.env.ZARV_PASSWORD;

axios.get("https://collector.zarv.com/v3/api/<resource>", {
  auth: {
    username: username,
    password: password
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

```py [Python]
import os
import requests

username = os.getenv('ZARV_USERNAME')
password = os.getenv('ZARV_PASSWORD')

response = requests.get(
    "https://collector.zarv.com/v3/api/<resource>",
    auth=(username, password)
)
print(response.status_code, response.json())
```

:::

## Respostas de Erro

Se a autenticação falhar, a API retornará uma resposta de erro:

### 401 Não Autorizado

Retornado quando:
- Credenciais são inválidas
- Nome de usuário ou senha incorretos
- Cabeçalho Authorization está ausente ou malformado

HTTP Status code: 401

```json
{
  "error": "Unauthorized",
  "message": "Credenciais inválidas"
}
```

### 403 Proibido

Retornado quando:
- Credenciais são válidas, mas não têm permissão para acessar o recurso
- Conta está suspensa ou inativa

HTTP Status code: 403

```json
{
  "error": "Forbidden",
  "message": "Acesso negado ao recurso solicitado"
}
```

Uma resposta bem-sucedida (status 200) indica que suas credenciais estão corretas.

## Solução de Problemas

### Problemas Comuns

1. **Erro 401**: Verifique se suas credenciais estão corretas
2. **Codificação Incorreta**: Certifique-se de que a codificação Base64 está correta
3. **HTTPS**: Sempre use HTTPS, nunca HTTP
4. **Caracteres Especiais**: Certifique-se de que caracteres especiais na senha estão sendo tratados corretamente

### Verificação de Codificação

Para verificar se sua codificação Base64 está correta:

```bash
# Codificar
echo -n "seu.email@zarv.com:sua_senha" | base64

# Decodificar para verificar
echo "c2V1LmVtYWlsQHphcnYuY29tOnN1YV9zZW5oYQ==" | base64 -d
```

Para obter ajuda, consulte o time da zarv.
