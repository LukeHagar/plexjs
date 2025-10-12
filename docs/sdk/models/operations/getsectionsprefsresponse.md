# GetSectionsPrefsResponse

## Example Usage

```typescript
import { GetSectionsPrefsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSectionsPrefsResponse = {
  contentType: "<value>",
  statusCode: 698432,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `requestHandlerSlashGetResponses200`                                                                          | [shared.RequestHandlerSlashGetResponses200](../../../sdk/models/shared/requesthandlerslashgetresponses200.md) | :heavy_minus_sign:                                                                                            | OK                                                                                                            |