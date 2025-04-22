# Autenticação

A API da Zarv utiliza autenticação JWT (JSON Web Token) para garantir acesso seguro. Todas as requisições para a API devem incluir um JWT válido nos cabeçalhos da requisição.

## Gerando um JWT

Para acessar a API, você precisa gerar um JWT usando o ID do seu workspace e o token de acesso:

1. Faça login na sua conta Zarv.
2. Navegue até a seção **Configurações da API**.
3. Recupere seu **ID do Workspace** e **Token de Acesso**.
4. Use essas credenciais para gerar um JWT. Consulte os exemplos abaixo para orientação.

### Exemplo de Geração de JWT

::: code-group

```sh [Bash]
WORKSPACE_ID="SEU_ID_DO_WORKSPACE"
ACCESS_TOKEN="SEU_TOKEN_DE_ACESSO"

HEADER='{"alg":"HS256","typ":"JWT"}'
PAYLOAD="{\"workspaceId\":\"$WORKSPACE_ID\",\"exp\":$(($(date +%s)+3600))}"

HEADER_BASE64=$(echo -n $HEADER | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')
PAYLOAD_BASE64=$(echo -n $PAYLOAD | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')

SIGNATURE=$(echo -n "$HEADER_BASE64.$PAYLOAD_BASE64" | openssl dgst -sha256 -hmac $ACCESS_TOKEN -binary | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')

JWT="$HEADER_BASE64.$PAYLOAD_BASE64.$SIGNATURE"
echo "JWT Gerado: $JWT"
```

```js [Node.js]
const jwt = require('jsonwebtoken');

const workspaceId = 'SEU_ID_DO_WORKSPACE';
const accessToken = 'SEU_TOKEN_DE_ACESSO';

const payload = { workspaceId };
const secret = accessToken;

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log('JWT Gerado:', token);
```

```go [Go]
package main

import (
  "fmt"
  "time"

  "github.com/golang-jwt/jwt/v4"
)

func main() {
  workspaceID := "SEU_ID_DO_WORKSPACE"
  accessToken := "SEU_TOKEN_DE_ACESSO"

  claims := jwt.MapClaims{
    "workspaceId": workspaceID,
    "exp":         time.Now().Add(time.Hour).Unix(),
  }

  token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
  signedToken, err := token.SignedString([]byte(accessToken))
  if err != nil {
    fmt.Println("Erro ao gerar JWT:", err)
    return
  }

  fmt.Println("JWT Gerado:", signedToken)
}
```

```py [Python]
import jwt
import datetime

workspace_id = "SEU_ID_DO_WORKSPACE"
access_token = "SEU_TOKEN_DE_ACESSO"

payload = {
  "workspaceId": workspace_id,
  "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
}

token = jwt.encode(payload, access_token, algorithm="HS256")
print("JWT Gerado:", token)
```

```php [PHP]
require 'vendor/autoload.php';

use Firebase\JWT\JWT;

$workspaceId = 'SEU_ID_DO_WORKSPACE';
$accessToken = 'SEU_TOKEN_DE_ACESSO';

$payload = [
    'workspaceId' => $workspaceId,
    'exp' => time() + 3600
];

$jwt = JWT::encode($payload, $accessToken, 'HS256');
echo "JWT Gerado: " . $jwt;
```

:::

## Usando o JWT

Inclua o JWT gerado no cabeçalho `Authorization` das suas requisições HTTP. O token deve ser precedido pela palavra `Bearer`.

### Exemplo de Requisição

::: code-group

```http [HTTP]
GET /v1/resource HTTP/1.1
Host: api.zarv.com
Authorization: Bearer SEU_JWT
```

```bash [cURL]
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer SEU_JWT"
```

```bash [Bash]
JWT="SEU_JWT"
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer $JWT"
```

```js [Node.js]
const axios = require('axios');

const jwt = 'SEU_JWT';

axios.get('https://api.zarv.com/v1/resource', {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

```go [Go]
package main

import (
  "fmt"
  "net/http"
)

func main() {
  jwt := "SEU_JWT"

  req, err := http.NewRequest("GET", "https://api.zarv.com/v1/resource", nil)
  if err != nil {
    fmt.Println("Erro ao criar requisição:", err)
    return
  }

  req.Header.Set("Authorization", "Bearer "+jwt)

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

jwt = "SEU_JWT"
url = "https://api.zarv.com/v1/resource"

headers = {
    "Authorization": f"Bearer {jwt}"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

:::

## Expiração e Rotação do Token

- Os JWTs possuem um tempo de expiração, que é definido durante sua geração.
- Gere um novo JWT quando o atual expirar.
- Revogue tokens de acesso comprometidos imediatamente na seção **Configurações da API**.

## Respostas de Erro

Se a autenticação falhar, a API retornará uma resposta de erro:

- **401 Não Autorizado**: JWT ausente ou inválido.
- **403 Proibido**: O JWT não tem permissão para acessar o recurso solicitado.

Certifique-se de que seu JWT é válido, não expirou e possui as permissões necessárias.

Para mais detalhes, consulte a [Documentação da API Zarv](https://api.zarv.com/docs).
