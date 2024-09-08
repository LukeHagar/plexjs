# AddPlaylistContentsMetadata

## Example Usage

```typescript
import { AddPlaylistContentsMetadata } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddPlaylistContentsMetadata = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ratingKey`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 94                                                             |
| `key`                                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/94/items                                            |
| `guid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | com.plexapp.agents.none://972e3047-83d6-4848-a000-261f0af26ba2 |
| `type`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist                                                       |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | A great playlist                                               |
| `summary`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | One of my great playlists                                      |
| `smart`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | false                                                          |
| `playlistType`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | video                                                          |
| `composite`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/94/composite/1705800070                             |
| `duration`                                                     | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 423000                                                         |
| `leafCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 3                                                              |
| `addedAt`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705716458                                                     |
| `updatedAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705800070                                                     |