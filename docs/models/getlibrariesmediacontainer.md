# GetLibrariesMediaContainer

## Example Usage

```typescript
import { GetLibrariesMediaContainer } from "@lukehagar/plexjs";

let value: GetLibrariesMediaContainer = {
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
        },
    ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `size`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 5                                                                    |
| `allowSync`                                                          | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | false                                                                |
| `title1`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | Plex Library                                                         |
| `directory`                                                          | [models.GetLibrariesDirectory](../models/getlibrariesdirectory.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |