# GetAllPreferencesResponse

## Example Usage

```typescript
import { GetAllPreferencesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllPreferencesResponse = {
  contentType: "<value>",
  statusCode: 203958,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `mediaContainerWithSettings`                                                                  | [shared.MediaContainerWithSettings](../../../sdk/models/shared/mediacontainerwithsettings.md) | :heavy_minus_sign:                                                                            | OK                                                                                            |