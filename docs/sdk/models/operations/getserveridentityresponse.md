# GetServerIdentityResponse

## Example Usage

```typescript
import { GetServerIdentityResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerIdentityResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `object`                                                                                                    | [operations.GetServerIdentityResponseBody](../../../sdk/models/operations/getserveridentityresponsebody.md) | :heavy_minus_sign:                                                                                          | The Server Identity information                                                                             |