# GetTranscodeSessionsResponse

## Example Usage

```typescript
import { GetTranscodeSessionsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTranscodeSessionsResponse = {
  contentType: "<value>",
  statusCode: 486483,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `object`                                                                                                          | [operations.GetTranscodeSessionsResponseBody](../../../sdk/models/operations/gettranscodesessionsresponsebody.md) | :heavy_minus_sign:                                                                                                | The Transcode Sessions                                                                                            |