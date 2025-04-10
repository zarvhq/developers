# API Guide

Welcome to the Zarv API Guide! This document provides an overview of how to integrate with the Zarv platform using our APIs. Follow the instructions below to get started.

## Getting Started

1. **Sign Up for API Access**  
  [Register for an API Key](/request-token).

2. **Base URL**  
  All API requests are made to the following base URL:  

  ```
  https://api.zarv.com/v1
  ```

3. **Authentication**  
  Use your API key in the `Authorization` header:  

  ```
  Authorization: Bearer YOUR_API_KEY
  ```

## Rate Limits

You can check your current rate limits by making a request to the `/rate-limits` endpoint. The response will include your current usage and limits. More details on rate limits can be found in the [Rate Limits section](../reference/rate-limits.md).

## Support

If you encounter any issues or have questions, please contact our [Developer Support](mailto:developer@zarv.com).

Happy coding!
