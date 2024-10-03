# GetResourcesStatisticsResponse

## Example Usage

```typescript
import { GetResourcesStatisticsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetResourcesStatisticsResponse = {
  contentType: "<value>",
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 5497,
      statisticsResources: [
        {
          timespan: 6,
          at: 1718384427,
          hostCpuUtilization: 1.276,
          processCpuUtilization: 0.025,
          hostMemoryUtilization: 17.026,
          processMemoryUtilization: 0.493,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `object`                                                                                                              | [operations.GetResourcesStatisticsResponseBody](../../../sdk/models/operations/getresourcesstatisticsresponsebody.md) | :heavy_minus_sign:                                                                                                    | Resource Statistics                                                                                                   |