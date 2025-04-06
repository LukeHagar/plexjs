# GetAllLibrariesResponse

## Example Usage

```typescript
import { GetAllLibrariesResponse, GetAllLibrariesType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 50,
      allowSync: false,
      title1: "TV Series",
      directory: [
        {
          allowSync: false,
          art: "/:/resources/show-fanart.jpg",
          composite: "/library/sections/1/composite/1743824484",
          filters: true,
          refreshing: true,
          thumb: "/:/resources/show.png",
          key: "1",
          type: GetAllLibrariesType.Movie,
          title: "Movies",
          agent: "tv.plex.agents.movie",
          scanner: "Plex Movie",
          language: "en-US",
          uuid: "e69655a2-ef48-4aba-bb19-01e7d3cc34d6",
          updatedAt: 1556281940,
          createdAt: 1556281940,
          scannedAt: 1556281940,
          content: true,
          directory: true,
          contentChangedAt: 9173960,
          location: [
            {
              id: 1,
              path: "/Movies",
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