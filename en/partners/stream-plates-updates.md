---
label: 'Fleet Plates & Updates'
icon: bell
category: 'Plates List Updates'
---

# Plates List Update Stream

If you need an ApiKey, please [follow these steps](../index.md#requesting-access).

## Introduction

This document outlines methods for partners to keep up-to-date with Zarv's protected vehicle plates, including both testing and production-ready options.

## Methods to Stay Updated

### Testing Phase Endpoint

- For initial integrations, use our endpoint to fetch a list of currently protected plates. Note: This method is not scalable.
  for those options check the page for [protected plates](./active-protected-plates.md)

### Production-Ready Webhooks

- Set up webhooks to receive real-time updates about changes in our fleet. This method is scalable and recommended for production use, continue on this page.

  - Webhook endpoint specification: right now we only support HTTPS endpoints with x-api-key headers, we will add more option shortly, but for now this is the only supported way.

    - endpoint: https address
    - headers: 'x-api-key: 'api-key-provided-by-you'
    - method: POST

  - To register webhooks

    - endpoint: `https://api.zarv.com/v1/signal/webhooks/plates-update`
    - method: PUT
    - body: a json object containing
      - url: the url to your api endpoint
      - apikey: your api key to allow us to call your endpoint

  - To read your registered webhooks
    - endpoint: `https://api.zarv.com/v1/signal/webhooks/plates-update`
    - method: GET

## Setting Up Webhooks

<details>
  <summary>Step by Step to Setup and Verify Webhooks</summary>

Here's how to set up endpoints for both 'Assets Created' and 'Assets Updated' events via API HTTPS.

### Assets Updates

+++ Request

```js
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/signal/webhook/plates-update';

await Axios.put(apiUrl, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
  body: {
    url: 'the HTTPS endpoint',
    apikey: 'your api key to access your webhook endpoint',
  },
});
```

+++ Response

```json
{
  "stausCode": 200,
  "body": {
    "body": {
      "url": "the HTTPS endpoint",
      "apikey": "your api key to access your webhook endpoint"
    }
  }
}
```

+++

---

### Check Assets Updates Webhook, using the GET endpoint.

+++ Request

```js
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/signal/webhooks/plates-update';

const res = await Axios.get(apiUrl, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
});
```

+++ Response

```json
{
  "stausCode": 200,
  "body": {
    "url": "the HTTPS endpoint",
    "apikey": "your api key to access your webhook endpoint"
  }
}
```

+++

</details>

---

## Rate Limit

We will keep it as low as 20 request per second, for now. Latter on we will allow this to be customized.

---

### Backfill Process

If your system starts without any data, our backfill process allows you to synchronize your environment by sending all currently active plates to your configured webhook for the `asset-updated` event.

Please note that we impose a rate limit of 20 requests per second. Depending on the size of the fleet and the ratio of active to inactive plates, the backfill process may take some time to complete.

- To request a backfill process
  - endpoint: `https://api.zarv.com/v1/signal/backfill`
  - method: PUT

### Initiating a Backfill Request

<details>
  <summary>Step by Step to Request a Backfill</summary>

You can trigger a backfill through our API by making the following requests:

#### Request via Node.js

```js
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/signal/backfill';

const response = await Axios.put(apiUrl, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
});
```

+++ Bash

```bash
$ curl -X PUT https://api.zarv.com/v1/signal/backfill \
  -H 'apikey: YOUR-API-KEY' \
  -H 'content-type: application/json'
```

+++

### Response

```json
{
  "stausCode": 202,
  "body": "backfill request accepted"
}
```
