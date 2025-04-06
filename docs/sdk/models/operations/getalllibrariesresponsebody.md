# GetAllLibrariesResponseBody

The libraries available on the Server

## Example Usage

```typescript
import { GetAllLibrariesResponseBody, GetAllLibrariesType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesResponseBody = {
  mediaContainer: {
    size: 50,
    allowSync: false,
    title1: "TV Series",
    directory: [
      {
        allowSync: false,
        art: "/:/resources/show-fanart.jpg",
        composite: "/library/sections/1/composite/1743824484",
        filters: true,
        refreshing: true,
        thumb: "/:/resources/show.png",
        key: "1",
        type: GetAllLibrariesType.Movie,
        title: "Movies",
        agent: "tv.plex.agents.movie",
        scanner: "Plex Movie",
        language: "en-US",
        uuid: "e69655a2-ef48-4aba-bb19-01e7d3cc34d6",
        updatedAt: 1556281940,
        createdAt: 1556281940,
        scannedAt: 1556281940,
        content: true,
        directory: true,
        contentChangedAt: 9173960,
        location: [
          {
            id: 1,
            path: "/Movies",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                            | [operations.GetAllLibrariesMediaContainer](../../../sdk/models/operations/getalllibrariesmediacontainer.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |