# ListLineupsResponse

## Example Usage

```typescript
import { ListLineupsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: ListLineupsResponse = {
  contentType: "<value>",
  statusCode: 522517,
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `mediaContainerWithLineup`                                                                | [shared.MediaContainerWithLineup](../../../sdk/models/shared/mediacontainerwithlineup.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |