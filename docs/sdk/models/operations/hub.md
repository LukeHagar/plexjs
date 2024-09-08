# Hub

## Example Usage

```typescript
import { Hub } from "@lukehagar/plexjs/sdk/models/operations";

let value: Hub = {
    hubKey: "/library/metadata/50768,65523,58188,57341,57302,57070",
    key: "/playlists/all?type=15&sort=lastViewedAt:desc&playlistType=video,audio",
    title: "Recent Playlists",
    type: "playlist",
    hubIdentifier: "home.playlists",
    context: "hub.home.playlists",
    size: 6,
    more: true,
    style: "shelf",
    promoted: true,
    metadata: [
        {
            ratingKey: "57070",
            key: "/playlists/57070/items",
            guid: "com.plexapp.agents.none://9fee6c5b-3143-4923-813e-57bd0190056c",
            type: "playlist",
            title: "November Movie Day",
            titleSort: "Tracks",
            summary: "",
            smart: false,
            playlistType: "video",
            composite: "/playlists/57070/composite/1668787730",
            icon: "playlist://image.smart",
            viewCount: 2,
            lastViewedAt: 1668787732,
            duration: 16873000,
            leafCount: 3,
            addedAt: 1668779618,
            updatedAt: 1668787730,
        },
    ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hubKey`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | /library/metadata/50768,65523,58188,57341,57302,57070                                         |
| `key`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | /playlists/all?type=15&sort=lastViewedAt:desc&playlistType=video,audio                        |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Recent Playlists                                                                              |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | playlist                                                                                      |
| `hubIdentifier`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | home.playlists                                                                                |
| `context`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | hub.home.playlists                                                                            |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 6                                                                                             |
| `more`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | true                                                                                          |
| `style`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | shelf                                                                                         |
| `promoted`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           | true                                                                                          |
| `metadata`                                                                                    | [operations.GetGlobalHubsMetadata](../../../sdk/models/operations/getglobalhubsmetadata.md)[] | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |