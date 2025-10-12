# EditMarkerResponse

## Example Usage

```typescript
import { EditMarkerResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: EditMarkerResponse = {
  contentType: "<value>",
  statusCode: 820143,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
| `postResponses200`                                                        | [shared.PostResponses200](../../../sdk/models/shared/postresponses200.md) | :heavy_minus_sign:                                                        | OK                                                                        |