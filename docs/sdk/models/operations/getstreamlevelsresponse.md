# GetStreamLevelsResponse

## Example Usage

```typescript
import { GetStreamLevelsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetStreamLevelsResponse = {
  contentType: "<value>",
  statusCode: 382130,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `object`                                                                                                | [operations.GetStreamLevelsResponseBody](../../../sdk/models/operations/getstreamlevelsresponsebody.md) | :heavy_minus_sign:                                                                                      | OK                                                                                                      |