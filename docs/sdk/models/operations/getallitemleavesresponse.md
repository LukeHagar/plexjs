# GetAllItemLeavesResponse

## Example Usage

```typescript
import { GetAllItemLeavesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllItemLeavesResponse = {
  contentType: "<value>",
  statusCode: 340960,
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `mediaContainerWithMetadata`                                                                  | [shared.MediaContainerWithMetadata](../../../sdk/models/shared/mediacontainerwithmetadata.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |