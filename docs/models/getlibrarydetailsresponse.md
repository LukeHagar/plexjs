# GetLibraryDetailsResponse

## Example Usage

```typescript
import { GetLibraryDetailsResponse } from "@lukehagar/plexjs";

let value: GetLibraryDetailsResponse = {
    contentType: "<value>",
    statusCode: 902349,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 29,
            allowSync: false,
            art: "/:/resources/movie-fanart.jpg",
            content: "secondary",
            identifier: "com.plexapp.plugins.library",
            librarySectionID: 1,
            mediaTagPrefix: "/system/bundle/media/flags/",
            mediaTagVersion: 1701731894,
            thumb: "/:/resources/movie.png",
            title1: "Movies",
            viewGroup: "secondary",
            viewMode: 65592,
            directory: [
                {
                    key: "search?type=1",
                    title: "Search...",
                    secondary: true,
                    prompt: "Search Movies",
                    search: true,
                },
            ],
            type: [
                {
                    key: "/library/sections/1/all?type=1",
                    type: "movie",
                    title: "Movies",
                    active: false,
                    filter: [
                        {
                            filter: "label",
                            filterType: "string",
                            key: "/library/sections/1/label",
                            title: "Labels",
                            type: "filter",
                        },
                    ],
                    sort: [
                        {
                            default: "asc",
                            defaultDirection: "desc",
                            descKey: "random:desc",
                            firstCharacterKey: "/library/sections/1/firstCharacter",
                            key: "random",
                            title: "Randomly",
                        },
                    ],
                    field: [
                        {
                            key: "label",
                            title: "Label",
                            type: "tag",
                            subType: "bitrate",
                        },
                    ],
                },
            ],
            fieldType: [
                {
                    type: "resolution",
                    operator: [
                        {
                            key: "=",
                            title: "is",
                        },
                    ],
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `contentType`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP response content type for this operation                                      |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP response status code for this operation                                       |
| `rawResponse`                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)              | :heavy_check_mark:                                                                 | Raw HTTP response; suitable for custom response parsing                            |
| `object`                                                                           | [models.GetLibraryDetailsResponseBody](../models/getlibrarydetailsresponsebody.md) | :heavy_minus_sign:                                                                 | The details of the library                                                         |