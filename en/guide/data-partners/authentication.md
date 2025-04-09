---
icon: key
category: 'Partners'
---

# Authentication

::: warning Important!
If you need an ApiKey, please [follow these steps](./request-token.md).
:::

## How to authenticate?

All requests are authenticated using the custom header `apikey` following your ApiKey sended by email.

## Examples

### Request

The `INTEGRATION_PAYLOAD` could change based on if you are integrating a [Camera](./camera.md) or [GPS Device](./gps.md).

::: code-group

```js [Node]
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/collector/signal';
const apiPayload = { INTEGRATION_PAYLOAD };

const res = await Axios.post(apiUrl, apiPayload, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
});
```

```bash [Bash]
curl -X POST https://api.zarv.com/v1/collector/signal \
  -H 'apikey: YOUR-API-KEY' \
  -H 'content-type: application/json' \
  -d '{ INTEGRATION_PAYLOAD }'
```

:::

### Response

```json
{
  "stausCode": 200,
  "message": "success"
}
```
