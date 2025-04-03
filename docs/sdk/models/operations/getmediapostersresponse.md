# GetMediaPostersResponse

## Example Usage

```typescript
import { GetMediaPostersResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaPostersResponse = {
  contentType: "<value>",
  statusCode: 508,
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
            "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
          provider: "tmdb",
          ratingKey:
            "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
          selected: true,
          thumb:
            "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FhntBJjqbv4m0Iyniqaztv9xaudI%2Ejpg",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `object`                                                                                                | [operations.GetMediaPostersResponseBody](../../../sdk/models/operations/getmediapostersresponsebody.md) | :heavy_minus_sign:                                                                                      | The available posters for the library item.                                                             |