# CreatePlaylistMetadata

## Example Usage

```typescript
import { CreatePlaylistMetadata } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreatePlaylistMetadata = {
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
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ratingKey`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 96                                                             |
| `key`                                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/96/items                                            |
| `guid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | com.plexapp.agents.none://a2f92937-1408-40e2-b022-63a8a9377e55 |
| `type`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist                                                       |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | A Great Playlist                                               |
| `summary`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | What a great playlist                                          |
| `smart`                                                        | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            | false                                                          |
| `playlistType`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | video                                                          |
| `icon`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | playlist://image.smart                                         |
| `viewCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1                                                              |
| `lastViewedAt`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705719589                                                     |
| `leafCount`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1                                                              |
| `addedAt`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705719589                                                     |
| `updatedAt`                                                    | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 1705724593                                                     |
| `composite`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | /playlists/96/composite/1705724593                             |
| `duration`                                                     | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 141000                                                         |