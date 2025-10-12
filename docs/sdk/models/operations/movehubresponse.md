# MoveHubResponse

## Example Usage

```typescript
import { MoveHubResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: MoveHubResponse = {
  contentType: "<value>",
  statusCode: 884768,
  headers: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `getResponses200`                                                       | [shared.GetResponses200](../../../sdk/models/shared/getresponses200.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |