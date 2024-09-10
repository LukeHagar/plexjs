# GetHomeDataResponse

## Example Usage

```typescript
import { GetHomeDataResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetHomeDataResponse = {
  contentType: "<value>",
  statusCode: 368241,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    id: 1841489,
    name: "Blindkitty38's home",
    guestUserID: 58815432,
    guestUserUUID: "f3df4e01bfca0787",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `object`                                                                                        | [operations.GetHomeDataResponseBody](../../../sdk/models/operations/gethomedataresponsebody.md) | :heavy_minus_sign:                                                                              | Home Data                                                                                       |