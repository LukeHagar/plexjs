# GetActorsLibraryResponse

## Example Usage

```typescript
import { GetActorsLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetActorsLibraryResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 50,
      allowSync: false,
      art: "/:/resources/show-fanart.jpg",
      identifier: "com.plexapp.plugins.library",
      mediaTagPrefix: "/system/bundle/media/flags/",
      mediaTagVersion: 1734362201,
      nocache: true,
      thumb: "/:/resources/show.png",
      title1: "TV Series",
      title2: "By Starring Actor",
      viewGroup: "secondary",
      viewMode: "131131",
      directory: [
        {
          fastKey: "/library/sections/2/all?actor=134671",
          thumb:
            "https://metadata-static.plex.tv/e/people/e2a915b537ef720252b6d408bc1f91b3.jpg",
          key: "134671",
          title: "Aaron Paul",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `object`                                                                                                  | [operations.GetActorsLibraryResponseBody](../../../sdk/models/operations/getactorslibraryresponsebody.md) | :heavy_minus_sign:                                                                                        | Successful response containing media container data.                                                      |