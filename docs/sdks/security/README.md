# Security
(*security*)

## Overview

API Calls against Security for Plex Media Server


### Available Operations

* [getTransientToken](#gettransienttoken) - Get a Transient Token.
* [getSourceConnectionInformation](#getsourceconnectioninformation) - Get Source Connection Information

## getTransientToken

This endpoint provides the caller with a temporary token with the same access level as the caller's token. These tokens are valid for up to 48 hours and are destroyed if the server instance is restarted.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { QueryParamType, Scope } from "@lukehagar/plexjs/models/operations";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const type = QueryParamType.Delegation;
  const scope = Scope.All;
  
  const result = await sdk.security.getTransientToken(type, scope);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.QueryParamType](../../models/operations/queryparamtype.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | `delegation` - This is the only supported `type` parameter.                                                                                                                    |
| `scope`                                                                                                                                                                        | [operations.Scope](../../models/operations/scope.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                             | `all` - This is the only supported `scope` parameter.                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetTransientTokenResponse](../../models/operations/gettransienttokenresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetTransientTokenResponseBody | 401                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## getSourceConnectionInformation

If a caller requires connection details and a transient token for a source that is known to the server, for example a cloud media provider or shared PMS, then this endpoint can be called. This endpoint is only accessible with either an admin token or a valid transient token generated from an admin token.
Note: requires Plex Media Server >= 1.15.4.


### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

async function run() {
  const sdk = new PlexAPI({
    accessToken: "<YOUR_API_KEY_HERE>",
  });

  const source = "server://client-identifier";
  
  const result = await sdk.security.getSourceConnectionInformation(source);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The source identifier with an included prefix.                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetSourceConnectionInformationResponse](../../models/operations/getsourceconnectioninformationresponse.md)>**
### Errors

| Error Object                                      | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.GetSourceConnectionInformationResponseBody | 401                                               | application/json                                  |
| errors.SDKError                                   | 4xx-5xx                                           | */*                                               |
