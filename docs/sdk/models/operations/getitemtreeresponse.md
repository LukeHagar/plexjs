# GetItemTreeResponse

## Example Usage

```typescript
import { GetItemTreeResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetItemTreeResponse = {
  contentType: "<value>",
  statusCode: 812303,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `mediaContainerWithNestedMetadata`                                                                        | [shared.MediaContainerWithNestedMetadata](../../../sdk/models/shared/mediacontainerwithnestedmetadata.md) | :heavy_minus_sign:                                                                                        | OK                                                                                                        |