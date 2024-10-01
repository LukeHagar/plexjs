# GetAllLibrariesDirectory

## Example Usage

```typescript
import { GetAllLibrariesDirectory } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesDirectory = {
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
  contentChangedAt: 1556281940,
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

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `allowSync`                                                         | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | true                                                                |
| `art`                                                               | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | /:/resources/movie-fanart.jpg                                       |
| `composite`                                                         | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | /library/sections/1/composite/1705615584                            |
| `filters`                                                           | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | true                                                                |
| `refreshing`                                                        | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | false                                                               |
| `thumb`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | /:/resources/movie.png                                              |
| `key`                                                               | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | 1                                                                   |
| `type`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | movie                                                               |
| `title`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | Movies                                                              |
| `agent`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | tv.plex.agents.movie                                                |
| `scanner`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | Plex Movie                                                          |
| `language`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | en-US                                                               |
| `uuid`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | 322a231a-b7f7-49f5-920f-14c61199cd30                                |
| `updatedAt`                                                         | *number*                                                            | :heavy_check_mark:                                                  | Unix epoch datetime in seconds                                      | 1556281940                                                          |
| `createdAt`                                                         | *number*                                                            | :heavy_check_mark:                                                  | Unix epoch datetime in seconds                                      | 1556281940                                                          |
| `scannedAt`                                                         | *number*                                                            | :heavy_check_mark:                                                  | Unix epoch datetime in seconds                                      | 1556281940                                                          |
| `content`                                                           | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | true                                                                |
| `directory`                                                         | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | true                                                                |
| `contentChangedAt`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Unix epoch datetime in seconds                                      | 1556281940                                                          |
| `hidden`                                                            | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | 0                                                                   |
| `location`                                                          | [operations.Location](../../../sdk/models/operations/location.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |