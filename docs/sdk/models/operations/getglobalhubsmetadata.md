# GetGlobalHubsMetadata

## Example Usage

```typescript
import { GetGlobalHubsMetadata } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGlobalHubsMetadata = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ratingKey`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 57070                                                          |
| `key`                                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/57070/items                                         |
| `guid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | com.plexapp.agents.none://9fee6c5b-3143-4923-813e-57bd0190056c |
| `type`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist                                                       |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | November Movie Day                                             |
| `titleSort`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | Tracks                                                         |
| `summary`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `smart`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | false                                                          |
| `playlistType`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | video                                                          |
| `composite`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/57070/composite/1668787730                          |
| `icon`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist://image.smart                                         |
| `viewCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 2                                                              |
| `lastViewedAt`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1668787732                                                     |
| `duration`                                                     | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 16873000                                                       |
| `leafCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 3                                                              |
| `addedAt`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1668779618                                                     |
| `updatedAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1668787730                                                     |