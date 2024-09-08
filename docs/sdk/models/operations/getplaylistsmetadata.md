# GetPlaylistsMetadata

## Example Usage

```typescript
import { GetPlaylistsMetadata } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistsMetadata = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ratingKey`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 92                                                             |
| `key`                                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/92/items                                            |
| `guid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | com.plexapp.agents.none://7ca5aaef-58e8-4828-9e21-c009c97f2903 |
| `type`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist                                                       |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | Static Playlist                                                |
| `summary`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | A Great Playlist                                               |
| `smart`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | false                                                          |
| `playlistType`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | video                                                          |
| `composite`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/92/composite/1705716440                             |
| `icon`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist://image.smart                                         |
| `viewCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1                                                              |
| `lastViewedAt`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705716298                                                     |
| `duration`                                                     | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 7328000                                                        |
| `leafCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 32                                                             |
| `addedAt`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705716298                                                     |
| `updatedAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705716440                                                     |