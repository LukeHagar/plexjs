# GetAllLibrariesResponse

## Example Usage

```typescript
import { GetAllLibrariesResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesResponse = {
  contentType: "<value>",
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 5,
      allowSync: false,
      title1: "Plex Library",
      directory: [
        {
          allowSync: true,
          art: "/:/resources/movie-fanart.jpg",
          composite: "/library/sections/1/composite/1705615584",
          filters: true,
          refreshing: false,
          thumb: "/:/resources/movie.png",
          key: "1",
          type: "movie",
          title: "Movies",
          agent: "tv.plex.agents.movie",
          scanner: "Plex Movie",
          language: "en-US",
          uuid: "322a231a-b7f7-49f5-920f-14c61199cd30",
          updatedAt: 1556281940,
          createdAt: 1556281940,
          scannedAt: 1556281940,
          content: true,
          directory: true,
          contentChangedAt: 1556281940,
          hidden: 0,
          location: [
            {
              id: 1,
              path: "/movies",
            },
          ],
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
| `object`                                                                                                | [operations.GetAllLibrariesResponseBody](../../../sdk/models/operations/getalllibrariesresponsebody.md) | :heavy_minus_sign:                                                                                      | The libraries available on the Server                                                                   |