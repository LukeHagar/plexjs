# SetDVRPreferencesResponse

## Example Usage

```typescript
import { SetDVRPreferencesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: SetDVRPreferencesResponse = {
  contentType: "<value>",
  statusCode: 256366,
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `object`                                                                                                    | [operations.SetDVRPreferencesResponseBody](../../../sdk/models/operations/setdvrpreferencesresponsebody.md) | :heavy_minus_sign:                                                                                          | OK                                                                                                          |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |