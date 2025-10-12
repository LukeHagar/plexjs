# GetRandomArtworkResponse

## Example Usage

```typescript
import { GetRandomArtworkResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRandomArtworkResponse = {
  contentType: "<value>",
  statusCode: 185930,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `mediaContainerWithArtwork`                                                                 | [shared.MediaContainerWithArtwork](../../../sdk/models/shared/mediacontainerwithartwork.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |