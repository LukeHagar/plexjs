# GetAllLibrariesMediaContainer

## Example Usage

```typescript
import { GetAllLibrariesMediaContainer, GetAllLibrariesType, Hidden } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesMediaContainer = {
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
      hidden: Hidden.ExcludeHomeScreen,
      location: [
        {
          id: 1,
          path: "/Movies",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `size`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | Number of media items returned in this response.                                                    | 50                                                                                                  |
| `allowSync`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Indicates whether syncing is allowed.                                                               | false                                                                                               |
| `title1`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | The primary title of the media container.                                                           | TV Series                                                                                           |
| `directory`                                                                                         | [operations.GetAllLibrariesDirectory](../../../sdk/models/operations/getalllibrariesdirectory.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |