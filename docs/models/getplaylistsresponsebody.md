# GetPlaylistsResponseBody

returns all playlists

## Example Usage

```typescript
import { GetPlaylistsResponseBody } from "@lukehagar/plexjs";

let value: GetPlaylistsResponseBody = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mediaContainer`                                                             | [models.GetPlaylistsMediaContainer](../models/getplaylistsmediacontainer.md) | :heavy_minus_sign:                                                           | N/A                                                                          |