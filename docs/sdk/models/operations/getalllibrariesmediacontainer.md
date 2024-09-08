# GetAllLibrariesMediaContainer

## Example Usage

```typescript
import { GetAllLibrariesMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesMediaContainer = {
    size: 5,
    allowSync: false,
    title1: "Plex Library",
    directory: [
        {
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            composite: "/library/sections/1/composite/1705615584",
            filters: true,
            refreshing: false,
            thumb: "/:/resources/movie.png",
            key: "1",
            type: "movie",
            title: "Movies",
            agent: "tv.plex.agents.movie",
            scanner: "Plex Movie",
            language: "en-US",
            uuid: "322a231a-b7f7-49f5-920f-14c61199cd30",
            updatedAt: 1556281940,
            createdAt: 1556281940,
            scannedAt: 1556281940,
            content: true,
            directory: true,
            contentChangedAt: 3192854,
            hidden: 0,
            location: [
                {
                    id: 1,
                    path: "/movies",
                },
            ],
        },
    ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `size`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | 5                                                                                                   |
| `allowSync`                                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 | false                                                                                               |
| `title1`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | Plex Library                                                                                        |
| `directory`                                                                                         | [operations.GetAllLibrariesDirectory](../../../sdk/models/operations/getalllibrariesdirectory.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |