# AddSectionResponse

## Example Usage

```typescript
import { AddSectionResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddSectionResponse = {
  contentType: "<value>",
  statusCode: 465224,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `slashGetResponses200`                                                            | [shared.SlashGetResponses200](../../../sdk/models/shared/slashgetresponses200.md) | :heavy_minus_sign:                                                                | OK                                                                                |