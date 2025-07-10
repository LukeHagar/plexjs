# GetButlerTasksResponse

## Example Usage

```typescript
import { GetButlerTasksResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetButlerTasksResponse = {
  contentType: "<value>",
  statusCode: 73689,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `object`                                                                                              | [operations.GetButlerTasksResponseBody](../../../sdk/models/operations/getbutlertasksresponsebody.md) | :heavy_minus_sign:                                                                                    | All butler tasks                                                                                      |