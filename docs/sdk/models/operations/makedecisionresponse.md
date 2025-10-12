# MakeDecisionResponse

## Example Usage

```typescript
import { MakeDecisionResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: MakeDecisionResponse = {
  contentType: "<value>",
  statusCode: 348140,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `mediaContainerWithDecision`                                                                  | [shared.MediaContainerWithDecision](../../../sdk/models/shared/mediacontainerwithdecision.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |