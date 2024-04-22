# Plex
(*plex*)

## Overview

API Calls that perform operations directly against https://Plex.tv


### Available Operations

* [getPin](#getpin) - Get a Pin
* [getToken](#gettoken) - Get Access Token

## getPin

Retrieve a Pin from Plex.tv for authentication flows

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const strong = false;
  const xPlexClientIdentifier = "Postman";
  
  const result = await plexAPI.plex.getPin(strong, xPlexClientIdentifier);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `strong`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Determines the kind of code returned by the API call<br/>Strong codes are used for Pin authentication flows<br/>Non-Strong codes are used for `Plex.tv/link`<br/>              |                                                                                                                                                                                |
| `xPlexClientIdentifier`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The unique identifier for the client application<br/>This is used to track the client application and its usage<br/>(UUID, serial number, or other number unique per device)<br/> | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |


### Response

**Promise<[operations.GetPinResponse](../../models/operations/getpinresponse.md)>**
### Errors

| Error Object              | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.GetPinResponseBody | 400                       | application/json          |
| errors.SDKError           | 4xx-5xx                   | */*                       |

## getToken

Retrieve an Access Token from Plex.tv after the Pin has already been authenticated

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "Postman",
});

async function run() {
  const pinID = "<value>";
  const xPlexClientIdentifier = "Postman";
  
  const result = await plexAPI.plex.getToken(pinID, xPlexClientIdentifier);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pinID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The PinID to retrieve an access token for                                                                                                                                      |                                                                                                                                                                                |
| `xPlexClientIdentifier`                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The unique identifier for the client application<br/>This is used to track the client application and its usage<br/>(UUID, serial number, or other number unique per device)<br/> | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 | http://localhost:8080                                                                                                                                                          |


### Response

**Promise<[operations.GetTokenResponse](../../models/operations/gettokenresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.GetTokenResponseBody | 400                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
