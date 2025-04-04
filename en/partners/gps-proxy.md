---
label: GPS Proxy
icon: broadcast
category: 'Partners'
---

# GPS Proxy

This documentation helps partners to get gps data from Zarv's platform.

Disclaimer: This api works only with some gps partners/providers, get in contact for details or apikeys.


## How to authenticate?

All requests are authenticated using the custom header `x-api-key` following your ApiKey sent by email.


### GET last position

 >   ```bash
 >   $ curl https://api.zarv.com/v1/gps-proxy/{plate}/last-position \
 >   -H 'x-api-key: YOUR-API-KEY' \
 >   -H 'content-type: application/json'
 >   ```


#### Request Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `plate` |  required | string   | The vehicle plate identifier eg. `abc-1234`         |

* The separator character '-' is required.


#### Response fields

> | name              | data type | description                          |
> |-------------------|-----------|--------------------------------------|
> | `plate` | String   | Requested vehicle plate.                        |
> | `positions` |  Array  | The last position details for this vehicle   |
> | `positions.latitude` | String  | Position coordinate latitude        |
> | `positions.longitude` | String  | Position coordinate longitude      |
> | `positions.direction` | String  | Vehicle movement direction         |
> | `positions.time` | String  | The signal time                         |
> | `positions.speed` | String  | The vehicle speed                         |
> | `positions.voltage` | String  | The vehicle battery voltage             |
> | `positions.batteryPercent` | String  | The device battery percentage    |
> | `positions.ignition` | Number  | The vehicle ignition status            |
> | `positions.signal` | String  | The device signal strenght percentage    |
> | `positions.satellite` | String  | The device signal satellite           |
> | `positions.odometer` | String  | The vehicle odometer                   |


#### Response example

>```json
>{
>    "plate": "abc-1234",
>    "position": {
>       "latitude": "-19.7828333",
>       "longitude": "-43.90865",
>       "direction": "23",
>       "time": "2024-04-07T15:08:37.000Z",
>       "speed": "25",
>       "voltage": "12.82",
>       "batteryPercent": "100",
>       "ignition": 1,
>       "signal": "66",
>       "satellite": "5",
>       "odometer": "83379.1"
>   }
>}
>```


### GET positions

 >   ```bash
 >   $ curl https://api.zarv.com/v1/gps-proxy/{plate}/positions?initialDate={initialDate}&finalDate={finalDate}&page={page}&size={size} \
 >   -H 'x-api-key: YOUR-API-KEY' \
 >   -H 'content-type: application/json'
 >   ```


#### Request Parameters


> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `plate` |  required | string   | The vehicle plate identifier eg. `abc-1234`        |


#### Request Query Parameters


> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `initialDate` |  required | Datetime   | The initial* date eg. `2024-04-01T21:06:58.884Z` |
> | `finalDate` |  required | Datetime   | The final* date eg. `2024-04-08T21:06:58.884Z`     |
> | `page` |  optional | Number  | The resulted page number. Default is 0                     |
> | `size` |  optional | Number  | The resulte size number. Default is 100                    |

*Important: the initial and final date must be in the same month/year*


#### Response fields

> | name              | data type | description                          |
> |-------------------|-----------|--------------------------------------|
> | `plate` | String   | Requested vehicle plate.                        |
> | `currentPage` | Number   | Response current page.                    |
> | `itemsPerPage` | Number  | Requested or default itens per page       |
> | `totalPage` | Number  | The resulted total pages.                    |
> | `totalItems` | Number  | The resulted total items.                   |
> | `hasNext` |  Boolean  | If has more results to be paginated          |
> | `positions` |  Array  | The positions list for this vehicle          |
> | `positions.latitude` | String  | Position coordinate latitude        |
> | `positions.longitude` | String  | Position coordinate longitude      |
> | `positions.direction` | String  | Vehicle movement direction         |
> | `positions.time` | String  | The signal time                         |
> | `positions.speed` | String  | The vehicle speed                         |
> | `positions.voltage` | String  | The vehicle battery voltage             |
> | `positions.batteryPercent` | String  | The device battery percentage    |
> | `positions.ignition` | Number  | The vehicle ignition status            |
> | `positions.signal` | String  | The device signal strenght percentage    |
> | `positions.satellite` | String  | The device signal satellite           |
> | `positions.odometer` | String  | The vehicle odometer                   |


#### Response example

>```json
>{
>    "plate": "abc-1234",
>    "currentPage": 0,
>    "itemsPerPage": 1,
>    "totalPage": 3956,
>    "totalItems": 3956,
>    "hasNext": true,
>    "positions": [
>        {
>            "latitude": "-19.7828333",
>            "longitude": "-43.90865",
>            "direction": "23",
>            "time": "2024-04-07T15:08:37.000Z",
>            "speed": "25",
>            "voltage": "12.82",
>            "batteryPercent": "100",
>            "ignition": 1,
>            "signal": "66",
>            "satellite": "5",
>            "odometer": "83379.1"
>        }
>    ]
>}
>```