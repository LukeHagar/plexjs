# GetCountriesLibraryResponse

## Example Usage

```typescript
import { GetCountriesLibraryResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCountriesLibraryResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 50,
      identifier: "com.plexapp.plugins.library",
      allowSync: false,
      art: "/:/resources/show-fanart.jpg",
      content: "secondary",
      mediaTagPrefix: "/system/bundle/media/flags/",
      mediaTagVersion: 1734362201,
      nocache: true,
      thumb: "/:/resources/show.png",
      title1: "TV Series",
      title2: "By Country",
      viewGroup: "secondary",
      directory: [
        {
          fastKey: "/library/sections/2/all?country=15491",
          key: "15491",
          title: "Japan",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.GetCountriesLibraryResponseBody](../../../sdk/models/operations/getcountrieslibraryresponsebody.md) | :heavy_minus_sign:                                                                                              | Successful response containing media container data.                                                            |