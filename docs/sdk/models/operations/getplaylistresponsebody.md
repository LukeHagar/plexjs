# GetPlaylistResponseBody

The playlist

## Example Usage

```typescript
import { GetPlaylistResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistResponseBody = {
    mediaContainer: {
        size: 1,
        metadata: [
            {
                content:
                    "library://x/directory/%2Flibrary%2Fsections%2F1%2Fall%3Ftype%3D1%26push%3D1%26title%3D2%26or%3D1%26title%3DSerenity%26pop%3D1",
                ratingKey: "95",
                key: "/playlists/95/items",
                guid: "com.plexapp.agents.none://87425529-380f-44b8-a689-9a0537e7ec91",
                type: "playlist",
                title: "Smart Movie Playlist",
                summary: "",
                smart: true,
                playlistType: "video",
                composite: "/playlists/95/composite/1705717387",
                icon: "playlist://image.smart",
                duration: 282000,
                leafCount: 2,
                addedAt: 1705716493,
                updatedAt: 1705717387,
            },
        ],
    },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                    | [operations.GetPlaylistMediaContainer](../../../sdk/models/operations/getplaylistmediacontainer.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |