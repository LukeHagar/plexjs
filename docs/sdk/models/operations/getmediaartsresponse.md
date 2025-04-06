# GetMediaArtsResponse

## Example Usage

```typescript
import { GetMediaArtsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaArtsResponse = {
  contentType: "<value>",
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 50,
      mediaTagVersion: 1734362201,
      mediaTagPrefix: "/system/bundle/media/flags/",
      identifier: "com.plexapp.plugins.library",
      metadata: [
        {
          key:
            "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
          provider: "tmdb",
          ratingKey:
            "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
          selected: true,
          thumb:
            "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FixgFmf1X59PUZam2qbAfskx2gQr%2Ejpg",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `object`                                                                                          | [operations.GetMediaArtsResponseBody](../../../sdk/models/operations/getmediaartsresponsebody.md) | :heavy_minus_sign:                                                                                | The available background artwork for the library item.                                            |