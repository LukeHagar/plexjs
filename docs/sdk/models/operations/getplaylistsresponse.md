# GetPlaylistsResponse

## Example Usage

```typescript
import { GetPlaylistsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistsResponse = {
    contentType: "<value>",
    statusCode: 158969,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 4,
            metadata: [
                {
                    ratingKey: "92",
                    key: "/playlists/92/items",
                    guid: "com.plexapp.agents.none://7ca5aaef-58e8-4828-9e21-c009c97f2903",
                    type: "playlist",
                    title: "Static Playlist",
                    summary: "A Great Playlist",
                    smart: false,
                    playlistType: "video",
                    composite: "/playlists/92/composite/1705716440",
                    icon: "playlist://image.smart",
                    viewCount: 1,
                    lastViewedAt: 1705716298,
                    duration: 7328000,
                    leafCount: 32,
                    addedAt: 1705716298,
                    updatedAt: 1705716440,
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
| `object`                                                                                          | [operations.GetPlaylistsResponseBody](../../../sdk/models/operations/getplaylistsresponsebody.md) | :heavy_minus_sign:                                                                                | returns all playlists                                                                             |