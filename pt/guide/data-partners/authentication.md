# Autenticação

::: warning Importante!
Se você precisar de uma ApiKey, por favor [siga estas etapas](../../request-token.md).
:::

## Como autenticar?

Todas as requisições são autenticadas usando o cabeçalho personalizado `apikey` com sua ApiKey enviada por e-mail.

## Exemplos

### Requisição

O `INTEGRATION_PAYLOAD` pode variar dependendo se você está integrando uma [Câmera](./lpr-devices.md) ou um [Dispositivo GPS](./gps-devices.md).

::: code-group

```js [Node]
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/collector/signal';
const apiPayload = { INTEGRATION_PAYLOAD };

const res = await Axios.post(apiUrl, apiPayload, {
  headers: {
    apikey: 'SUA-API-KEY',
    'content-type': 'application/json',
  },
});
```

```bash [Bash]
curl -X POST https://api.zarv.com/v1/collector/signal \
  -H 'apikey: SUA-API-KEY' \
  -H 'content-type: application/json' \
  -d '{ INTEGRATION_PAYLOAD }'
```

:::

### Resposta

```json
{
  "stausCode": 200,
  "message": "sucesso"
}
```
