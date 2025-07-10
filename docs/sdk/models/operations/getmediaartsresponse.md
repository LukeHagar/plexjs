# GetMediaArtsResponse

## Example Usage

```typescript
import { GetMediaArtsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaArtsResponse = {
  contentType: "<value>",
  statusCode: 153816,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `object`                                                                                          | [operations.GetMediaArtsResponseBody](../../../sdk/models/operations/getmediaartsresponsebody.md) | :heavy_minus_sign:                                                                                | The available background artwork for the library item.                                            |