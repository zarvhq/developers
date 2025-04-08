# Webhooks

Webhooks in the Zarv API allow your application to receive real-time notifications whenever specific events occur. This enables seamless integration and automation for your workflows.

## How Webhooks Work

1. **Set Up a Webhook Endpoint**: Create an endpoint on your server to receive webhook payloads.
2. **Subscribe to Events**: Use the Zarv API to register your webhook URL and specify the events you want to listen to.
3. **Receive Payloads**: When an event is triggered, Zarv sends an HTTP POST request to your webhook URL with the event data.
4. **Process the Event**: Handle the incoming data in your application as needed.

## Supported Events

Below are some of the events you can subscribe to:

- `order.created`: Triggered when a new order is created.
- `order.updated`: Triggered when an order is updated.
- `user.registered`: Triggered when a new user registers.
- `payment.completed`: Triggered when a payment is successfully completed.

For a full list of events, refer to the [Event Types](#event-types) section.

## Setting Up a Webhook

1. **Create a Webhook**  
  Use the following API endpoint to create a webhook:

  ```http
  POST /webhooks
  Content-Type: application/json

  {
     "url": "https://your-server.com/webhook-endpoint",
     "events": ["order.created", "payment.completed"]
  }
  ```

2. **Verify Your Webhook**  
  Zarv sends a test payload to your webhook URL upon creation. Ensure your server responds with a `200 OK` status to confirm the setup.

## Handling Webhook Payloads

Webhook payloads are sent as JSON objects. Below is an example payload for an `order.created` event:

```json
{
   "event": "order.created",
   "data": {
      "order_id": "12345",
      "status": "pending",
      "created_at": "2023-10-01T12:00:00Z"
   }
}
```

### Example Response

Your server should respond with a `200 OK` status to acknowledge receipt of the webhook:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Webhook received successfully
```

## Security

To ensure the authenticity of webhook requests:

- **Verify Signatures**: Zarv includes a signature in the `X-Zarv-Signature` header. Use this to validate the payload.
- **Use HTTPS**: Always use HTTPS for your webhook URL to encrypt data in transit.

## Troubleshooting

- **Missing Events**: Ensure your server is reachable and responds within 5 seconds.
- **Invalid Responses**: Return a `2xx` HTTP status code to confirm successful processing.
- **Retry Logic**: Zarv retries failed webhook deliveries up to 3 times with exponential backoff.

## Additional Resources

- [Webhook API Reference](#)
- [Event Types](#)
- [Contact Support](#)
