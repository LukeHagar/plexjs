# CreatePlaylistResponseBody

returns all playlists

## Example Usage

```typescript
import { CreatePlaylistResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreatePlaylistResponseBody = {
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
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                          | [operations.CreatePlaylistMediaContainer](../../../sdk/models/operations/createplaylistmediacontainer.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |