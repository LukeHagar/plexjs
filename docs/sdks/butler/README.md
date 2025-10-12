# Butler
(*butler*)

## Overview

The butler is responsible for running periodic tasks.  Some tasks run daily, others every few days, and some weekly.  These includes database maintenance, metadata updating, thumbnail generation, media analysis, and other tasks.

### Available Operations

* [stopTasks](#stoptasks) - Stop all Butler tasks
* [getTasks](#gettasks) - Get all Butler tasks
* [startTasks](#starttasks) - Start all Butler tasks
* [stopTask](#stoptask) - Stop a single Butler task
* [startTask](#starttask) - Start a single Butler task

## stopTasks

This endpoint will stop all currently running tasks and remove any scheduled tasks from the queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopTasks" method="delete" path="/butler" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.butler.stopTasks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { butlerStopTasks } from "@lukehagar/plexjs/funcs/butlerStopTasks.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await butlerStopTasks(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("butlerStopTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StopTasksResponse](../../sdk/models/operations/stoptasksresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getTasks

Get the list of butler tasks and their scheduling


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTasks" method="get" path="/butler" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.butler.getTasks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { butlerGetTasks } from "@lukehagar/plexjs/funcs/butlerGetTasks.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await butlerGetTasks(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("butlerGetTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTasksResponse](../../sdk/models/operations/gettasksresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## startTasks

This endpoint will attempt to start all Butler tasks that are enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:

  1. Any tasks not scheduled to run on the current day will be skipped.
  2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
  3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
  4. If we are outside the configured window, the task will start immediately.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="startTasks" method="post" path="/butler" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";

const plexAPI = new PlexAPI();

async function run() {
  const result = await plexAPI.butler.startTasks();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { butlerStartTasks } from "@lukehagar/plexjs/funcs/butlerStartTasks.js";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore();

async function run() {
  const res = await butlerStartTasks(plexAPI);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("butlerStartTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartTasksResponse](../../sdk/models/operations/starttasksresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## stopTask

This endpoint will stop a currently running task by name, or remove it from the list of scheduled tasks if it exists


### Example Usage

<!-- UsageSnippet language="typescript" operationID="stopTask" method="delete" path="/butler/{task}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { StopTaskTask } from "@lukehagar/plexjs/sdk/models/operations";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.butler.stopTask({
    task: StopTaskTask.CleanOldBundles,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { butlerStopTask } from "@lukehagar/plexjs/funcs/butlerStopTask.js";
import { StopTaskTask } from "@lukehagar/plexjs/sdk/models/operations";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const res = await butlerStopTask(plexAPI, {
    task: StopTaskTask.CleanOldBundles,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("butlerStopTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StopTaskRequest](../../sdk/models/operations/stoptaskrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StopTaskResponse](../../sdk/models/operations/stoptaskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## startTask

This endpoint will attempt to start a specific Butler task by name.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="startTask" method="post" path="/butler/{task}" -->
```typescript
import { PlexAPI } from "@lukehagar/plexjs";
import { StartTaskTask } from "@lukehagar/plexjs/sdk/models/operations";

const plexAPI = new PlexAPI({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const result = await plexAPI.butler.startTask({
    task: StartTaskTask.RefreshLocalMedia,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PlexAPICore } from "@lukehagar/plexjs/core.js";
import { butlerStartTask } from "@lukehagar/plexjs/funcs/butlerStartTask.js";
import { StartTaskTask } from "@lukehagar/plexjs/sdk/models/operations";

// Use `PlexAPICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const plexAPI = new PlexAPICore({
  xPlexClientIdentifier: "abc123",
  xPlexProduct: "Plex for Roku",
  xPlexVersion: "2.4.1",
  xPlexPlatform: "Roku",
  xPlexPlatformVersion: "4.3 build 1057",
  xPlexDevice: "Roku 3",
  xPlexModel: "4200X",
  xPlexDeviceVendor: "Roku",
  xPlexDeviceName: "Living Room TV",
  xPlexMarketplace: "googlePlay",
});

async function run() {
  const res = await butlerStartTask(plexAPI, {
    task: StartTaskTask.RefreshLocalMedia,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("butlerStartTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.StartTaskRequest](../../sdk/models/operations/starttaskrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartTaskResponse](../../sdk/models/operations/starttaskresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |