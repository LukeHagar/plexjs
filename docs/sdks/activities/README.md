# Activities
(*activities*)

## Overview

Activities are awesome. They provide a way to monitor and control asynchronous operations on the server. In order to receive real-time updates for activities, a client would normally subscribe via either EventSource or Websocket endpoints.
Activities are associated with HTTP replies via a special `X-Plex-Activity` header which contains the UUID of the activity.
Activities are optional cancellable. If cancellable, they may be cancelled via the `DELETE` endpoint. Other details:
- They can contain a `progress` (from 0 to 100) marking the percent completion of the activity.
- They must contain an `type` which is used by clients to distinguish the specific activity.
- They may contain a `Context` object with attributes which associate the activity with various specific entities (items, libraries, etc.)
- The may contain a `Response` object which attributes which represent the result of the asynchronous operation.


### Available Operations

* [getServerActivities](#getserveractivities) - Get Server Activities
* [cancelServerActivities](#cancelserveractivities) - Cancel Server Activities

## getServerActivities

Get Server Activities

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "<value>",
});

async function run() {
  const result = await plexAPI.activities.getServerActivities();

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetServerActivitiesResponse](../../models/operations/getserveractivitiesresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetServerActivitiesResponseBody | 401                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## cancelServerActivities

Cancel Server Activities

### Example Usage

```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI({
  accessToken: "<YOUR_API_KEY_HERE>",
  xPlexClientIdentifier: "<value>",
});

async function run() {
  const activityUUID = "<value>";
  
  const result = await plexAPI.activities.cancelServerActivities(activityUUID);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `activityUUID`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The UUID of the activity to cancel.                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CancelServerActivitiesResponse](../../models/operations/cancelserveractivitiesresponse.md)>**
### Errors

| Error Object                              | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.CancelServerActivitiesResponseBody | 401                                       | application/json                          |
| errors.SDKError                           | 4xx-5xx                                   | */*                                       |
