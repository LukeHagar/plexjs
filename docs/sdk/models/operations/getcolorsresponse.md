# GetColorsResponse

## Example Usage

```typescript
import { GetColorsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetColorsResponse = {
  contentType: "<value>",
  statusCode: 513090,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `object`                                                                                    | [operations.GetColorsResponseBody](../../../sdk/models/operations/getcolorsresponsebody.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |