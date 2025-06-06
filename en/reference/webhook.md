# Webhook Documentation

## Overview

This webhook is triggered when a verification status changes to either `COMPLETED` or `FAILED`. It allows you to receive real-time updates about the status of your verification requests.

## Configuration

When creating a verification request, you can configure the webhook by including a `callback` object in your request:

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

### Callback Configuration Parameters

| Parameter | Type   | Required | Description                                        |
| --------- | ------ | -------- | -------------------------------------------------- |
| url       | string | Yes      | The URL where the webhook will be sent             |
| method    | string | Yes      | HTTP method to use (currently only POST supported) |

### Metadata

You can include optional metadata in your request that will be returned in the webhook payload. This is useful for tracking internal references or adding custom data to your webhook responses.

## Webhook Payload

When the verification status changes, your configured endpoint will receive a POST request with the following payload:

```json
{
  "id": "verification-id",
  "status": "COMPLETED",
  "metadata": {
    "key": "value"
  }
}
```

### Payload Fields

| Field    | Type   | Description                                                            |
| -------- | ------ | ---------------------------------------------------------------------- |
| id       | string | The verification ID returned during creation                           |
| status   | string | Current status of the verification (`COMPLETED` or `FAILED`)           |
| metadata | object | The metadata object you provided during verification creation (if any) |

## Security Considerations

1. The webhook endpoint should be secured with HTTPS
2. Implement proper authentication on your webhook endpoint
3. Consider implementing IP whitelisting for additional security
4. Validate the webhook payload before processing

## Best Practices

1. Always respond to webhook requests with a 200 status code to acknowledge receipt
2. Implement idempotency to handle duplicate webhook deliveries
3. Process webhooks asynchronously to avoid timeout issues
4. Store webhook payloads for audit purposes
5. Implement retry logic for failed webhook deliveries

## Example Implementation

Here's a simple example of how to handle the webhook in Node.js:

```javascript
app.post('/webhook-endpoint', (req, res) => {
  const { id, status, metadata } = req.body

  // Acknowledge receipt
  res.status(200).send('OK')

  // Process the webhook asynchronously
  processWebhook({ id, status, metadata })
})

async function processWebhook(data) {
  try {
    // Update your system with the verification status
    await updateVerificationStatus(data)

    // Log the webhook for audit purposes
    await logWebhookEvent(data)
  } catch (error) {
    // Handle errors appropriately
    console.error('Error processing webhook:', error)
  }
}
```

## Error Handling

If your webhook endpoint is not available or returns an error status code, the system will retry the webhook delivery with exponential backoff. The retry schedule is as follows:

- 1st retry: 1 minute
- 2nd retry: 5 minutes
- 3rd retry: 15 minutes
- 4th retry: 30 minutes
- 5th retry: 1 hour

After 5 failed attempts, the webhook will be marked as failed and no further retries will be attempted.
