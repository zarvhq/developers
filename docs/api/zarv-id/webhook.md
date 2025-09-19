# Webhook de Verificação

## Visão Geral

Este webhook é acionado quando o status de uma verificação muda para `COMPLETED` (Concluído) ou `FAILED` (Falhou). Ele permite que você receba atualizações em tempo real sobre o status das suas solicitações de verificação.

## Configuração

Ao criar uma solicitação de verificação, você pode configurar o webhook incluindo um objeto `callback` na sua requisição:

```json
{
  "nationalId": "012345678900",
  "verifications": {
    "type": "full",
    "finance": {
      "restrictions": true
    }
  },
  "callback": {
    "url": "https://your-domain.com/webhook-endpoint",
    "method": "POST"
  },
  "metadata": {
    "key": "value"
  }
}
```

### Parâmetros de Configuração do Callback

| Parâmetro | Tipo   | Obrigatório | Descrição                          |
| --------- | ------ | ----------- | ---------------------------------- |
| url       | string | Sim         | A URL onde o webhook será enviado  |
| method    | string | Sim         | Método HTTP a ser usado (POST/PUT) |

### Metadados

Você pode incluir metadados opcionais na sua requisição que serão retornados no payload do webhook. Isso é útil para rastrear referências internas ou adicionar dados personalizados às suas respostas de webhook.

## Payload do Webhook

Quando o status da verificação muda, seu endpoint configurado receberá uma requisição POST com o seguinte payload:

```json
{
  "id": "verification-id",
  "status": "COMPLETED",
  "metadata": {
    "key": "value"
  }
}
```

### Campos do Payload

| Campo    | Tipo   | Descrição                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------------ |
| id       | string | O ID da verificação retornado durante a criação                                      |
| status   | string | Status atual da verificação (`COMPLETED` ou `FAILED`)                                |
| metadata | object | O objeto de metadados que você forneceu durante a criação da verificação (se houver) |

## Considerações de Segurança

1. O endpoint do webhook deve ser protegido com HTTPS
2. Implemente autenticação adequada no seu endpoint de webhook
3. Considere implementar lista de IPs permitidos para segurança adicional
4. Valide o payload do webhook antes do processamento

## Melhores Práticas

1. Sempre responda às requisições do webhook com um código de status 200 para confirmar o recebimento
2. Implemente idempotência para lidar com entregas duplicadas de webhook
3. Processe webhooks de forma assíncrona para evitar problemas de timeout
4. Armazene os payloads dos webhooks para fins de auditoria
5. Implemente lógica de nova tentativa para entregas de webhook com falha

## Exemplo de Implementação

Aqui está um exemplo simples de como lidar com o webhook em Node.js:

```javascript
app.post("/webhook-endpoint", (req, res) => {
  const { id, status, metadata } = req.body;

  // Confirmar recebimento
  res.status(200).send("OK");

  // Processar o webhook de forma assíncrona
  processWebhook({ id, status, metadata });
});

async function processWebhook(data) {
  try {
    // Atualizar seu sistema com o status da verificação
    await updateVerificationStatus(data);

    // Registrar o webhook para fins de auditoria
    await logWebhookEvent(data);
  } catch (error) {
    // Tratar erros adequadamente
    console.error("Erro ao processar webhook:", error);
  }
}
```

## Tratamento de Erros

Se seu endpoint de webhook não estiver disponível ou retornar um código de status de erro, o sistema tentará reenviar o webhook com backoff exponencial. O cronograma de novas tentativas é o seguinte:

- 1ª tentativa: 1 minuto
- 2ª tentativa: 5 minutos
- 3ª tentativa: 15 minutos
- 4ª tentativa: 30 minutos
- 5ª tentativa: 1 hora

Após 5 tentativas malsucedidas, o webhook será marcado como falho e nenhuma nova tentativa será realizada.
