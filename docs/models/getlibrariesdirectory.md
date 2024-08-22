# GetLibrariesDirectory

## Example Usage

```typescript
import { GetLibrariesDirectory } from "@lukehagar/plexjs";

let value: GetLibrariesDirectory = {
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
    updatedAt: 1705615634,
    createdAt: 1654131312,
    scannedAt: 1705615584,
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
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `allowSync`                                | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `art`                                      | *string*                                   | :heavy_minus_sign:                         | N/A                                        | /:/resources/movie-fanart.jpg              |
| `composite`                                | *string*                                   | :heavy_minus_sign:                         | N/A                                        | /library/sections/1/composite/1705615584   |
| `filters`                                  | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `refreshing`                               | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | false                                      |
| `thumb`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        | /:/resources/movie.png                     |
| `key`                                      | *string*                                   | :heavy_minus_sign:                         | N/A                                        | 1                                          |
| `type`                                     | *string*                                   | :heavy_minus_sign:                         | N/A                                        | movie                                      |
| `title`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        | Movies                                     |
| `agent`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        | tv.plex.agents.movie                       |
| `scanner`                                  | *string*                                   | :heavy_minus_sign:                         | N/A                                        | Plex Movie                                 |
| `language`                                 | *string*                                   | :heavy_minus_sign:                         | N/A                                        | en-US                                      |
| `uuid`                                     | *string*                                   | :heavy_minus_sign:                         | N/A                                        | 322a231a-b7f7-49f5-920f-14c61199cd30       |
| `updatedAt`                                | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 1705615634                                 |
| `createdAt`                                | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 1654131312                                 |
| `scannedAt`                                | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 1705615584                                 |
| `content`                                  | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `directory`                                | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `contentChangedAt`                         | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 3192854                                    |
| `hidden`                                   | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 0                                          |
| `location`                                 | [models.Location](../models/location.md)[] | :heavy_minus_sign:                         | N/A                                        |                                            |