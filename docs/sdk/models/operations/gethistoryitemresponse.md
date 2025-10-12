# GetHistoryItemResponse

## Example Usage

```typescript
import { GetHistoryItemResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetHistoryItemResponse = {
  contentType: "<value>",
  statusCode: 160300,
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `historyAllGetResponses200`                                                                 | [shared.HistoryAllGetResponses200](../../../sdk/models/shared/historyallgetresponses200.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |