# CreatePlaylistMediaContainer

## Example Usage

```typescript
import { CreatePlaylistMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: CreatePlaylistMediaContainer = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `size`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | 7                                                                                               |
| `metadata`                                                                                      | [operations.CreatePlaylistMetadata](../../../sdk/models/operations/createplaylistmetadata.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |