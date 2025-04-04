---
label: 'Protected Plates List'
icon: check
category: 'Plates List'
---

# Plates List

If you need an ApiKey, please [follow these steps](../index.md#requesting-access).

All endpoints require the header apiKey with your own apikey value.

## Overview

The endpoints described on this page are primarily intended for the testing phases of integration. For a robust and scalable solution, please refer to the [stream plates updates](./stream-plates-updates.md) for setting up real-time webhooks.

### Endpoint Options for Initial Integration

This section outlines several endpoints designed to facilitate the rapid development of an integration:

1. **Full List of Protected Plates**: We provide an endpoint that returns the complete list of currently protected plates by Zarv. This allows partners to maintain a non-real-time list of trusted plates, which can be used to share related metadata with Zarv.

   - endpoint: `https://api.zarv.com/v1/collector/signal/monitored-plates`
   - method: GET

2. **Quick Validation Endpoint**: For even faster testing, we offer an endpoint that immediately returns a 'GOOD' or 'NOT' response for any given plate. Please note, this method is highly inefficient and should only be used during development or testing phases as it is not scalable.

   - endpoint: `https://api.zarv.com/v1/collector/signal/plate-check/<plate>`
   - method: GET

---

## Monitored Plates List Endpoint

This endpoint returns the list of monitored plates currently. This list is dynamic and changes every day, it is important to keep this list updated in your system.

## Examples

+++ Node

```js
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/collector/signal/monitored-plates';

const res = await Axios.get(apiUrl, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
});
```

+++ Bash

```bash
$ curl -X GET https://api.zarv.com/v1/collector/signal/monitored-plates \
  -H 'apikey: YOUR-API-KEY' \
  -H 'content-type: application/json'
```

+++ Response

```json
{
  "stausCode": 200,
  "body": ["PLATE1", "PLATE2", "PLATE3"]
}
```

+++

## Plate Check Endpoint

This endpoint returns either a protected true or protected false value. That's it. No further information provided here.

+++ Node

```js
import Axios from 'axios';

const apiUrl = 'https://api.zarv.com/v1/collector/signal/plate-check/XXXXXXX';

const response = await Axios.get(apiUrl, {
  headers: {
    apikey: 'YOUR-API-KEY',
    'content-type': 'application/json',
  },
});
```

+++ Bash

```bash
$ curl -X GET https://api.zarv.com/v1/collector/signal/plate-check/XXXXXXX \
  -H 'apikey: YOUR-API-KEY' \
  -H 'content-type: application/json'
```

+++ Response

```json
{
  "stausCode": 200,
  "body": { "protected": true | false }
}
```
