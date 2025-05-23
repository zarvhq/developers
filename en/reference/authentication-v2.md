# Authentication v2

Zarv's API uses OAuth2 authentication to ensure secure access. All requests to the API must include a valid access token in the request headers.

## Obtaining an Access Token

To access the API, you need to obtain an access token by authenticating with your credentials:

1. Log in to your Zarv account.
2. Use your username and password to obtain an access token.
3. Use the access token in your API requests.

### Authentication Endpoint

```
POST https://services.zarv.com/api/v1/authentication
```

#### Request Body

```json
{
  "username": "your.email@zarv.com",
  "password": "your_password"
}
```

#### Response

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 360,
  "refreshExpiresIn": 1800
}
```

### Example Authentication

::: code-group

```sh [Bash]
curl -X POST "https://services.zarv.com/api/v1/authentication" \
-H "Content-Type: application/json" \
-d '{
    "username": "your.email@zarv.com",
    "password": "your_password"
}'
```

```js [Node.js]
const axios = require('axios')

const credentials = {
  username: 'your.email@zarv.com',
  password: 'your_password',
}

axios
  .post('https://services.zarv.com/api/v1/authentication', credentials)
  .then((response) => {
    const { accessToken, refreshToken } = response.data
    console.log('Access Token:', accessToken)
    console.log('Refresh Token:', refreshToken)
  })
  .catch((error) => console.error(error))
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
    Username: "your.email@zarv.com",
    Password: "your_password",
  }

  jsonData, err := json.Marshal(credentials)
  if err != nil {
    fmt.Println("Error marshaling credentials:", err)
    return
  }

  resp, err := http.Post(
    "https://services.zarv.com/api/v1/authentication",
    "application/json",
    bytes.NewBuffer(jsonData),
  )
  if err != nil {
    fmt.Println("Error making request:", err)
    return
  }
  defer resp.Body.Close()

  var tokenResp TokenResponse
  if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
    fmt.Println("Error decoding response:", err)
    return
  }

  fmt.Println("Access Token:", tokenResp.AccessToken)
  fmt.Println("Refresh Token:", tokenResp.RefreshToken)
}
```

```py [Python]
import requests

credentials = {
    "username": "your.email@zarv.com",
    "password": "your_password"
}

response = requests.post(
    "https://services.zarv.com/api/v1/authentication",
    json=credentials
)

if response.status_code == 200:
    token_data = response.json()
    print("Access Token:", token_data["accessToken"])
    print("Refresh Token:", token_data["refreshToken"])
else:
    print("Error:", response.status_code)
```

```php [PHP]
<?php

$credentials = [
    'username' => 'your.email@zarv.com',
    'password' => 'your_password'
];

$ch = curl_init('https://services.zarv.com/api/v1/authentication');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($credentials));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

$tokenData = json_decode($response, true);
echo "Access Token: " . $tokenData['accessToken'] . "\n";
echo "Refresh Token: " . $tokenData['refreshToken'] . "\n";
```

:::

## Refreshing an Access Token

When your access token expires, you can use the refresh token to obtain a new access token without having to re-authenticate with your username and password.

### Refresh Token Endpoint

```
POST https://services.zarv.com/api/v1/authentication/refresh
```

#### Request Body

```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Response

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 360,
  "refreshExpiresIn": 1800
}
```

### Example Token Refresh

::: code-group

```sh [Bash]
curl -X POST "https://services.zarv.com/api/v1/authentication/refresh" \
-H "Content-Type: application/json" \
-d '{
    "refreshToken": "yourRefreshToken"
}'
```

```js [Node.js]
const axios = require('axios')

const refreshData = {
  refreshToken: 'yourRefreshToken',
}

axios
  .post('https://services.zarv.com/api/v1/authentication/refresh', refreshData)
  .then((response) => {
    const { accessToken, refreshToken } = response.data
    console.log('New Access Token:', accessToken)
    console.log('New Refresh Token:', refreshToken)
  })
  .catch((error) => console.error(error))
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
  RefreshToken string `json:"refreshToken"`
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
    RefreshToken: "yourRefreshToken",
  }

  jsonData, err := json.Marshal(refreshReq)
  if err != nil {
    fmt.Println("Error marshaling refresh request:", err)
    return
  }

  resp, err := http.Post(
    "https://services.zarv.com/api/v1/authentication/refresh",
    "application/json",
    bytes.NewBuffer(jsonData),
  )
  if err != nil {
    fmt.Println("Error making request:", err)
    return
  }
  defer resp.Body.Close()

  var tokenResp TokenResponse
  if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
    fmt.Println("Error decoding response:", err)
    return
  }

  fmt.Println("New Access Token:", tokenResp.AccessToken)
  fmt.Println("New Refresh Token:", tokenResp.RefreshToken)
}
```

```py [Python]
import requests

refresh_data = {
    "refreshToken": "yourRefreshToken"
}

response = requests.post(
    "https://services.zarv.com/api/v1/authentication/refresh",
    json=refresh_data
)

if response.status_code == 200:
    token_data = response.json()
    print("New Access Token:", token_data["accessToken"])
    print("New Refresh Token:", token_data["refreshToken"])
else:
    print("Error:", response.status_code)
```

```php [PHP]
<?php

$refreshData = [
    'refreshToken' => 'yourRefreshToken'
];

$ch = curl_init('https://services.zarv.com/api/v1/authentication/refresh');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($refreshData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

$tokenData = json_decode($response, true);
echo "New Access Token: " . $tokenData['accessToken'] . "\n";
echo "New Refresh Token: " . $tokenData['refreshToken'] . "\n";
```

:::

## Using the Access Token

Include the obtained access token in the `Authorization` header of your HTTP requests. The token must be prefixed with the word `Bearer`.

### Example Request

::: code-group

```http [HTTP]
GET /v1/resource HTTP/1.1
Host: api.zarv.com
Authorization: Bearer YOUR_ACCESS_TOKEN
```

```bash [cURL]
curl -X GET "https://api.zarv.com/v1/resource" \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

```js [Node.js]
const axios = require('axios')

const accessToken = 'YOUR_ACCESS_TOKEN'

axios
  .get('https://api.zarv.com/v1/resource', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error))
```

```go [Go]
package main

import (
  "fmt"
  "net/http"
)

func main() {
  accessToken := "YOUR_ACCESS_TOKEN"

  req, err := http.NewRequest("GET", "https://api.zarv.com/v1/resource", nil)
  if err != nil {
    fmt.Println("Error creating request:", err)
    return
  }

  req.Header.Set("Authorization", "Bearer "+accessToken)

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

access_token = "YOUR_ACCESS_TOKEN"
url = "https://api.zarv.com/v1/resource"

headers = {
    "Authorization": f"Bearer {access_token}"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

:::

## Token Expiry and Refresh

- Access tokens have an expiration time, which is specified in the `expires_in` field of the authentication response.
- When a token expires, you can use the refresh token to obtain a new access token without re-authenticating.
- Refresh tokens have a longer lifespan than access tokens and can be used multiple times.
- Both tokens are returned when refreshing, so you should store the new refresh token for future use.
- Keep your credentials and tokens secure and never share them.
- If a refresh token expires or becomes invalid, you'll need to authenticate again with your username and password.

## Error Responses

If authentication or token refresh fails, the API will return an error response:

- **401 Unauthorized**: Invalid credentials, expired token, or invalid refresh token.
- **403 Forbidden**: Token does not have permission to access the requested resource.

Ensure your credentials are correct and your tokens are valid and unexpired. If refresh token fails, re-authenticate with your username and password.

For more details, refer to the [Zarv API Documentation](https://developers.zarv.com/guide/).
