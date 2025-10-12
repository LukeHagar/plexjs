# GetStreamLoudnessResponse

## Example Usage

```typescript
import { GetStreamLoudnessResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetStreamLoudnessResponse = {
  contentType: "<value>",
  statusCode: 831734,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `res`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | OK                                                                    |