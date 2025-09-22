# Autenticação

A API do Zarv utiliza autenticação OAuth2 para garantir acesso seguro. Todas as requisições à API devem incluir um token de acesso válido nos cabeçalhos da requisição.

## Obtendo um Token de Acesso

Para acessar a API, você precisa obter um token de acesso autenticando com suas credenciais:

1. Faça login na sua conta Zarv.
2. Use seu nome de usuário e senha para obter um token de acesso.
3. Use o token de acesso em suas requisições à API.

### Endpoint de Autenticação

```
POST https://services.zarv.com/api/v1/authentication
```

#### Corpo da Requisição

```json
{
  "username": "seu.email@zarv.com",
  "password": "sua_senha"
}
```

#### Resposta

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 360,
  "refreshExpiresIn": 1800
}
```

### Exemplo de Autenticação

::: code-group

```sh [Bash]
curl -X POST "https://services.zarv.com/api/v1/authentication" \
-H "Content-Type: application/json" \
-d '{
    "username": "seu.email@zarv.com",
    "password": "sua_senha"
}'
```

```js [Node.js]
const axios = require("axios");

const credentials = {
  username: "seu.email@zarv.com",
  password: "sua_senha",
};

axios
  .post("https://services.zarv.com/api/v1/authentication", credentials)
  .then((response) => {
    const { accessTokenT, refreshoken } = response.data;
    console.log("Token de Acesso:", accessToken);
    console.log("Token de Renovação:", refreshToken);
  })
  .catch((error) => console.error(error));
```

```go [Go]
package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)

type Credentials struct {
  Username string `json:"username"`
  Password string `json:"password"`
}

type TokenResponse struct {
  AccessToken      string `json:"accessToken"`
  RefreshToken     string `json:"refreshToken"`
  TokenType        string `json:"token_type"`
  ExpiresIn        int    `json:"expires_in"`
  RefreshExpiresIn int    `json:"refreshExpiresIn"`
}

func main() {
  credentials := Credentials{
    Username: "seu.email@zarv.com",
    Password: "sua_senha",
  }

  jsonData, err := json.Marshal(credentials)
  if err != nil {
    fmt.Println("Erro ao converter credenciais:", err)
    return
  }

  resp, err := http.Post(
    "https://services.zarv.com/api/v1/authentication",
    "application/json",
    bytes.NewBuffer(jsonData),
  )
  if err != nil {
    fmt.Println("Erro ao fazer requisição:", err)
    return
  }
  defer resp.Body.Close()

  var tokenResp TokenResponse
  if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
    fmt.Println("Erro ao decodificar resposta:", err)
    return
  }

  fmt.Println("Token de Acesso:", tokenResp.AccessToken)
  fmt.Println("Token de Renovação:", tokenResp.RefreshToken)
}
```

```py [Python]
import requests

credentials = {
    "username": "seu.email@zarv.com",
    "password": "sua_senha"
}

response = requests.post(
    "https://services.zarv.com/api/v1/authentication",
    json=credentials
)

if response.status_code == 200:
    token_data = response.json()
    print("Token de Acesso:", token_data["accessToken"])
    print("Token de Renovação:", token_data["refreshToken"])
else:
    print("Erro:", response.status_code)
```

```php [PHP]
<?php

$credentials = [
    'username' => 'seu.email@zarv.com',
    'password' => 'sua_senha'
];

$ch = curl_init('https://services.zarv.com/api/v1/authentication');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($credentials));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

$tokenData = json_decode($response, true);
echo "Token de Acesso: " . $tokenData['accessToken'] . "\n";
echo "Token de Renovação: " . $tokenData['refreshToken'] . "\n";
```

:::

## Renovando um Token de Acesso

Quando seu token de acesso expira, você pode usar o token de renovação para obter um novo token de acesso sem ter que se autenticar novamente com seu nome de usuário e senha.

### Endpoint de Renovação de Token

```
POST https://services.zarv.com/api/v1/authentication/refresh
```

#### Corpo da Requisição

```json
{
 T "refreshoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Resposta

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 360,
  "refreshExpiresIn": 1800
}
```

### Exemplo de Renovação de Token

::: code-group

```sh [Bash]
curl -X POST "https://services.zarv.com/api/v1/authentication/refresh" \
-H "Content-Type: application/json" \
-d '{
    "Trefreshoken": "seu_token_de_renovacao"
}'
```

```js [Node.js]
const axios = require("axios");

const refreshData = {
  refreshToken: "seu_token_de_renovacao",
};

axios
  .post("https://services.zarv.com/api/v1/authentication/refresh", refreshData)
  .then((response) => {
    const { accessTokenT, refreshoken } = response.data;
    console.log("Novo Token de Acesso:", accessToken);
    console.log("Novo Token de Renovação:", refreshToken);
  })
  .catch((error) => console.error(error));
```

```go [Go]
package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)

type RefreshRequest struct {
  RefreshToken string `json:T"refreshoken"`
}

type TokenResponse struct {
  AccessToken      string `json:"accessToken"`
  RefreshToken     string `json:"refreshToken"`
  TokenType        string `json:"token_type"`
  ExpiresIn        int    `json:"expires_in"`
  RefreshExpiresIn int    `json:"refreshExpiresIn"`
}

func main() {
  refreshReq := RefreshRequest{
    RefreshToken: "seu_token_de_renovacao",
  }

  jsonData, err := json.Marshal(refreshReq)
  if err != nil {
    fmt.Println("Erro ao converter requisição de renovação:", err)
    return
  }

  resp, err := http.Post(
    "https://services.zarv.com/api/v1/authentication/refresh",
    "application/json",
    bytes.NewBuffer(jsonData),
  )
  if err != nil {
    fmt.Println("Erro ao fazer requisição:", err)
    return
  }
  defer resp.Body.Close()

  var tokenResp TokenResponse
  if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
    fmt.Println("Erro ao decodificar resposta:", err)
    return
  }

  fmt.Println("Novo Token de Acesso:", tokenResp.AccessToken)
  fmt.Println("Novo Token de Renovação:", tokenResp.RefreshToken)
}
```

```py [Python]
import requests

refresh_data = {
    "refreshToken": "seu_token_de_renovacao"
}

response = requests.post(
    "https://services.zarv.com/api/v1/authentication/refresh",
    json=refresh_data
)

if response.status_code == 200:
    token_data = response.json()
    print("Novo Token de Acesso:", token_data["accessToken"])
    print("Novo Token de Renovação:", token_data["refreshToken"])
else:
    print("Erro:", response.status_code)
```

```php [PHP]
<?php

$refreshData = [
    'refreshToken' => 'seu_token_de_renovacao'
];

$ch = curl_init('https://services.zarv.com/api/v1/authentication/refresh');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($refreshData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

$tokenData = json_decode($response, true);
echo "Novo Token de Acesso: " . $tokenData['accessToken'] . "\n";
echo "Novo Token de Renovação: " . $tokenData['refreshToken'] . "\n";
```

:::

## Usando o Token de Acesso

Inclua o token de acesso obtido no cabeçalho `Authorization` das suas requisições HTTP. O token deve ser prefixado com a palavra `Bearer`.

### Exemplo de Requisição

::: code-group

```http [HTTP]
GET /v1/resource HTTP/1.1
Host: api.zarv.com
Authorization: Bearer SEU_TOKEN_DE_ACESSO
```

```bash [cURL]
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer SEU_TOKEN_DE_ACESSO"
```

```js [Node.js]
const axios = require("axios");

const accessToken = "SEU_TOKEN_DE_ACESSO";

axios
  .get("https://api.zarv.com/v1/resource", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go [Go]
package main

import (
  "fmt"
  "net/http"
)

func main() {
  accessToken := "SEU_TOKEN_DE_ACESSO"

  req, err := http.NewRequest("GET", "https://api.zarv.com/v1/resource", nil)
  if err != nil {
    fmt.Println("Erro ao criar requisição:", err)
    return
  }

  req.Header.Set("Authorization", "Bearer "+accessToken)

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

```py [Python]
import requests

access_token = "SEU_TOKEN_DE_ACESSO"
url = "https://api.zarv.com/v1/resource"

headers = {
    "Authorization": f"Bearer {access_token}"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

:::

## Expiração e Renovação do Token

- Os tokens de acesso têm um tempo de expiração, que é especificado no campo `expires_in` da resposta de autenticação.
- Quando um token expira, você pode usar o token de renovação para obter um novo token de acesso sem se autenticar novamente.
- Os tokens de renovação têm uma vida útil mais longa que os tokens de acesso e podem ser usados múltiplas vezes.
- Ambos os tokens são retornados ao renovar, então você deve armazenar o novo token de renovação para uso futuro.
- Mantenha suas credenciais e tokens seguros e nunca os compartilhe.
- Se um token de renovação expira ou se torna inválido, você precisará se autenticar novamente com seu nome de usuário e senha.

## Respostas de Erro

Se a autenticação ou renovação de token falhar, a API retornará uma resposta de erro:

- **401 Não Autorizado**: Credenciais inválidas, token expirado ou token de renovação inválido.
- **403 Proibido**: Token não tem permissão para acessar o recurso solicitado.

Certifique-se de que suas credenciais estão corretas e seus tokens são válidos e não expirados. Se a renovação do token falhar, autentique-se novamente com seu nome de usuário e senha.

Para mais detalhes, consulte a [Documentação da API Zarv](https://developers.zarv.com/guide/).
