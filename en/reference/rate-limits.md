# API Rate Limits

This document outlines the rate limits for accessing the APIs. Adhering to these limits ensures optimal performance and prevents service disruptions.

## Collector API

The Collector API is designed to handle high volumes of data ingestion. Below are the rate limits for this API:

- **Rate Limit**: 12,000 requests per minute
- **Purpose**: Used for collecting and sending data to the platform.
- **Best Practices**:
  - Distribute requests evenly over time to avoid spikes.
  - Implement retry logic with exponential backoff in case of throttling.

## ID API

The Zarv ID API is used for identity-related operations. Below are the rate limits for this API:

- **Rate Limit**: 1,000 requests per minute
- **Purpose**: Used for managing and verifying user identities.
- **Best Practices**:
  - Optimize requests to minimize unnecessary calls.
  - Use caching mechanisms where applicable to reduce load.

## Other APIs

These APIs are used for various operations such as querying data, managing resources, and performing administrative tasks. Below are the rate limits for these APIs:

- **Rate Limit**: 2,000 requests per minute
- **Purpose**: Used for general API operations.
- **Best Practices**:
  - Cache responses where possible to reduce redundant requests.
  - Monitor your usage to ensure compliance with the rate limits.

## Consequences of Exceeding Rate Limits

Exceeding the specified rate limits may result in:

- **Throttling**: Temporary reduction in request processing speed.
- **Service Disruptions**: Potential denial of service for repeated violations.

## Monitoring and Support

To help you stay within the limits:

- Use the provided API usage metrics to monitor your request rates.
- Contact support if you require higher limits or encounter issues.

Please ensure your applications adhere to these limits to maintain uninterrupted access to the APIs.  
