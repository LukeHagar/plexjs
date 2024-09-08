# AddPlaylistContentsMediaContainer

## Example Usage

```typescript
import { AddPlaylistContentsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddPlaylistContentsMediaContainer = {
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
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `leafCountAdded`                                                                                          | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `leafCountRequested`                                                                                      | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `metadata`                                                                                                | [operations.AddPlaylistContentsMetadata](../../../sdk/models/operations/addplaylistcontentsmetadata.md)[] | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |