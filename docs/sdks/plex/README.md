# Plex

## Overview

### Available Operations

* [getServerResources](#getserverresources) - Get Server Resources

## getServerResources

Get Plex server access tokens and server connections

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-server-resources" method="get" path="/resources" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { IncludeHttps, IncludeIPv6, IncludeRelay } from "@lukehagar/plexjs/models/operations";
import { Accepts } from "@lukehagar/plexjs/models/shared";

const plexAPI = new PlexAPI({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "3381b62b-9ab7-4e37-827b-203e9809eb58",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await plexAPI.plex.getServerResources({
    includeHttps: IncludeHttps.True,
    includeRelay: IncludeRelay.True,
    includeIPv6: IncludeIPv6.True,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { plexGetServerResources } from "@lukehagar/plexjs/funcs/plexGetServerResources.js";
import { IncludeHttps, IncludeIPv6, IncludeRelay } from "@lukehagar/plexjs/models/operations";
import { Accepts } from "@lukehagar/plexjs/models/shared";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  accepts: Accepts.ApplicationXml,
  clientIdentifier: "3381b62b-9ab7-4e37-827b-203e9809eb58",
  token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await plexGetServerResources(plexAPI, {
    includeHttps: IncludeHttps.True,
    includeRelay: IncludeRelay.True,
    includeIPv6: IncludeIPv6.True,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("plexGetServerResources failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetServerResourcesRequest](../../models/operations/getserverresourcesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[shared.PlexDevice[]](../../models/.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetServerResourcesUnauthorizedError | 401                                        | application/json                           |
| errors.SDKError                            | 4XX, 5XX                                   | \*/\*                                      |