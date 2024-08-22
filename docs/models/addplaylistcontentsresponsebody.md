# AddPlaylistContentsResponseBody

Playlist Updated

## Example Usage

```typescript
import { AddPlaylistContentsResponseBody } from "@lukehagar/plexjs";

let value: AddPlaylistContentsResponseBody = {
    mediaContainer: {
        size: 1,
        leafCountAdded: 1,
        leafCountRequested: 1,
        metadata: [
            {
                ratingKey: "94",
                key: "/playlists/94/items",
                guid: "com.plexapp.agents.none://972e3047-83d6-4848-a000-261f0af26ba2",
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
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                           | [models.AddPlaylistContentsMediaContainer](../models/addplaylistcontentsmediacontainer.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |