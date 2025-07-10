# GetAvailableClientsResponse

## Example Usage

```typescript
import { GetAvailableClientsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAvailableClientsResponse = {
  contentType: "<value>",
  statusCode: 927142,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.GetAvailableClientsResponseBody](../../../sdk/models/operations/getavailableclientsresponsebody.md) | :heavy_minus_sign:                                                                                              | Available Clients                                                                                               |