# API Error Reference

This document provides a reference for the error codes and messages returned by the API.

## Error Format

All errors returned by the API follow this standard format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "A descriptive error message.",
    "details": "Additional information about the error (if available)."
  }
}
```

## Error Codes

| Code             | HTTP Status | Description                              |
|------------------|-------------|------------------------------------------|
| `INVALID_INPUT`  | 400         | The input provided is invalid.           |
| `NOT_FOUND`      | 404         | The requested resource was not found.    |
| `UNAUTHORIZED`   | 401         | Authentication is required or failed.    |
| `FORBIDDEN`      | 403         | You do not have permission to access this resource. |
| `SERVER_ERROR`   | 500         | An internal server error occurred.       |
| `RATE_LIMITED`   | 429         | Too many requests have been made.        |

## Example Error Response

### Invalid Input Example

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "The 'email' field is required.",
    "details": "Ensure all required fields are provided."
  }
}
```

### Not Found Example

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "The requested resource could not be found.",
    "details": "Check the resource ID and try again."
  }
}
```

## Troubleshooting

- **400 (Bad Request):** Verify the request parameters and payload.
- **401 (Unauthorized):** Ensure your API key or token is valid.
- **403 (Forbidden):** Check your permissions for the requested resource.
- **404 (Not Found):** Confirm the resource exists and the URL is correct.
- **500 (Server Error):** Retry the request later or contact support.

For further assistance, please contact our [support team](mailto:support@example.com).
