# CreatePlaylistResponse

## Example Usage

```typescript
import { CreatePlaylistResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreatePlaylistResponse = {
    contentType: "<value>",
    statusCode: 474697,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 7,
            metadata: [
                {
                    ratingKey: "96",
                    key: "/playlists/96/items",
                    guid: "com.plexapp.agents.none://a2f92937-1408-40e2-b022-63a8a9377e55",
                    type: "playlist",
                    title: "A Great Playlist",
                    summary: "What a great playlist",
                    smart: false,
                    playlistType: "video",
                    icon: "playlist://image.smart",
                    viewCount: 1,
                    lastViewedAt: 1705719589,
                    leafCount: 1,
                    addedAt: 1705719589,
                    updatedAt: 1705724593,
                    composite: "/playlists/96/composite/1705724593",
                    duration: 141000,
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `object`                                                                                              | [operations.CreatePlaylistResponseBody](../../../sdk/models/operations/createplaylistresponsebody.md) | :heavy_minus_sign:                                                                                    | returns all playlists                                                                                 |