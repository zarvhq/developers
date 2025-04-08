# Authentication

Zarv's API uses JWT (JSON Web Token) authentication to ensure secure access. All requests to the API must include a valid JWT in the request headers.

## Generating a JWT

To access the API, you need to generate a JWT using your workspace ID and access token:

1. Log in to your Zarv account.
2. Navigate to the **API Settings** section.
3. Retrieve your **Workspace ID** and **Access Token**.
4. Use these credentials to generate a JWT. Refer to the examples below for guidance.

### Example JWT Generation

::: code-group

```sh [Bash]
WORKSPACE_ID="YOUR_WORKSPACE_ID"
ACCESS_TOKEN="YOUR_ACCESS_TOKEN"

HEADER='{"alg":"HS256","typ":"JWT"}'
PAYLOAD="{\"workspaceId\":\"$WORKSPACE_ID\",\"exp\":$(($(date +%s)+3600))}"

HEADER_BASE64=$(echo -n $HEADER | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')
PAYLOAD_BASE64=$(echo -n $PAYLOAD | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')

SIGNATURE=$(echo -n "$HEADER_BASE64.$PAYLOAD_BASE64" | openssl dgst -sha256 -hmac $ACCESS_TOKEN -binary | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')

JWT="$HEADER_BASE64.$PAYLOAD_BASE64.$SIGNATURE"
echo "Generated JWT: $JWT"
```

```js [Node.js]
const jwt = require('jsonwebtoken');

const workspaceId = 'YOUR_WORKSPACE_ID';
const accessToken = 'YOUR_ACCESS_TOKEN';

const payload = { workspaceId };
const secret = accessToken;

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log('Generated JWT:', token);
```

```go [Go]
package main

import (
  "fmt"
  "time"

  "github.com/golang-jwt/jwt/v4"
)

func main() {
  workspaceID := "YOUR_WORKSPACE_ID"
  accessToken := "YOUR_ACCESS_TOKEN"

  claims := jwt.MapClaims{
    "workspaceId": workspaceID,
    "exp":         time.Now().Add(time.Hour).Unix(),
  }

  token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
  signedToken, err := token.SignedString([]byte(accessToken))
  if err != nil {
    fmt.Println("Error generating JWT:", err)
    return
  }

  fmt.Println("Generated JWT:", signedToken)
}
```

```py [Python]
import jwt
import datetime

workspace_id = "YOUR_WORKSPACE_ID"
access_token = "YOUR_ACCESS_TOKEN"

payload = {
  "workspaceId": workspace_id,
  "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
}

token = jwt.encode(payload, access_token, algorithm="HS256")
print("Generated JWT:", token)
```

```php [PHP]
require 'vendor/autoload.php';

use Firebase\JWT\JWT;

$workspaceId = 'YOUR_WORKSPACE_ID';
$accessToken = 'YOUR_ACCESS_TOKEN';

$payload = [
    'workspaceId' => $workspaceId,
    'exp' => time() + 3600
];

$jwt = JWT::encode($payload, $accessToken, 'HS256');
echo "Generated JWT: " . $jwt;
```

:::

## Using the JWT

Include the generated JWT in the `Authorization` header of your HTTP requests. The token must be prefixed with the word `Bearer`.

### Example Request

::: code-group

```http [HTTP]
GET /v1/resource HTTP/1.1
Host: api.zarv.com
Authorization: Bearer YOUR_JWT
```

```bash [cURL]
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer YOUR_JWT"
```

```bash [Bash]
JWT="YOUR_JWT"
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer $JWT"
```

```js [Node.js]
const axios = require('axios');

const jwt = 'YOUR_JWT';

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
  jwt := "YOUR_JWT"

  req, err := http.NewRequest("GET", "https://api.zarv.com/v1/resource", nil)
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Set("Authorization", "Bearer "+jwt)

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error making request:", err)
    return
  }
  defer resp.Body.Close()

  fmt.Println("Response status:", resp.Status)
}
```

```py [Python]
import requests

jwt = "YOUR_JWT"
url = "https://api.zarv.com/v1/resource"

headers = {
    "Authorization": f"Bearer {jwt}"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

:::

## Token Expiry and Rotation

- JWTs have an expiration time, which is defined during their generation.
- Generate a new JWT when the current one expires.
- Revoke compromised access tokens immediately via the **API Settings** section.

## Error Responses

If authentication fails, the API will return an error response:

- **401 Unauthorized**: Missing or invalid JWT.
- **403 Forbidden**: JWT does not have permission to access the requested resource.

Ensure your JWT is valid, unexpired, and has the necessary permissions.

For more details, refer to the [Zarv API Documentation](https://api.zarv.com/docs).
