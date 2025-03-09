# AddPlaylistContentsResponse

## Example Usage

```typescript
import { AddPlaylistContentsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddPlaylistContentsResponse = {
  contentType: "<value>",
  statusCode: 307,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 1,
      leafCountAdded: 1,
      leafCountRequested: 1,
      metadata: [
        {
          ratingKey: "94",
          key: "/playlists/94/items",
          guid:
            "com.plexapp.agents.none://972e3047-83d6-4848-a000-261f0af26ba2",
          type: "playlist",
          title: "A great playlist",
          summary: "One of my great playlists",
          smart: false,
          playlistType: "video",
          composite: "/playlists/94/composite/1705800070",
          duration: 423000,
          leafCount: 3,
          addedAt: 1705716458,
          updatedAt: 1705800070,
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
| `object`                                                                                                        | [operations.AddPlaylistContentsResponseBody](../../../sdk/models/operations/addplaylistcontentsresponsebody.md) | :heavy_minus_sign:                                                                                              | Playlist Updated                                                                                                |