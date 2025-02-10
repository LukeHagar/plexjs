# GetGenresLibraryResponse

## Example Usage

```typescript
import { GetGenresLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGenresLibraryResponse = {
  contentType: "<value>",
  statusCode: 428,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 50,
      allowSync: false,
      art: "/:/resources/show-fanart.jpg",
      content: "secondary",
      identifier: "com.plexapp.plugins.library",
      mediaTagPrefix: "/system/bundle/media/flags/",
      mediaTagVersion: 1734362201,
      nocache: true,
      thumb: "/:/resources/show.png",
      title1: "TV Series",
      title2: "By Starring Actor",
      viewGroup: "secondary",
      directory: [
        {
          fastKey: "/library/sections/10/all?genre=89",
          key: "89",
          title: "Action",
          type: "genre",
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
| `object`                                                                                                  | [operations.GetGenresLibraryResponseBody](../../../sdk/models/operations/getgenreslibraryresponsebody.md) | :heavy_minus_sign:                                                                                        | Successful response containing media container data.                                                      |