# GetScheduledRecordingsResponse

## Example Usage

```typescript
import { GetScheduledRecordingsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetScheduledRecordingsResponse = {
  contentType: "<value>",
  statusCode: 442897,
  headers: {
    "key": [],
    "key1": [],
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `object`                                                                                                              | [operations.GetScheduledRecordingsResponseBody](../../../sdk/models/operations/getscheduledrecordingsresponsebody.md) | :heavy_minus_sign:                                                                                                    | OK                                                                                                                    |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |