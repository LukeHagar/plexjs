# GetActorsLibraryMediaContainer

## Example Usage

```typescript
import { GetActorsLibraryMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetActorsLibraryMediaContainer = {
  size: 50,
  allowSync: false,
  art: "/:/resources/show-fanart.jpg",
  identifier: "com.plexapp.plugins.library",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  nocache: true,
  thumb: "/:/resources/show.png",
  title1: "TV Series",
  title2: "By Starring Actor",
  viewGroup: "secondary",
  viewMode: "131131",
  directory: [
    {
      fastKey: "/library/sections/2/all?actor=134671",
      thumb:
        "https://metadata-static.plex.tv/e/people/e2a915b537ef720252b6d408bc1f91b3.jpg",
      key: "134671",
      title: "Aaron Paul",
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `size`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 50                                                                                                    |
| `allowSync`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Indicates whether syncing is allowed.                                                                 | false                                                                                                 |
| `art`                                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | URL for the background artwork of the media container.                                                | /:/resources/show-fanart.jpg                                                                          |
| `identifier`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | An plugin identifier for the media container.                                                         | com.plexapp.plugins.library                                                                           |
| `mediaTagPrefix`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | The prefix used for media tag resource paths.                                                         | /system/bundle/media/flags/                                                                           |
| `mediaTagVersion`                                                                                     | *number*                                                                                              | :heavy_check_mark:                                                                                    | The version number for media tags.                                                                    | 1734362201                                                                                            |
| `nocache`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Specifies whether caching is disabled.                                                                | true                                                                                                  |
| `thumb`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | URL for the thumbnail image of the media container.                                                   | /:/resources/show.png                                                                                 |
| `title1`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | The primary title of the media container.                                                             | TV Series                                                                                             |
| `title2`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | The secondary title of the media container.                                                           | By Starring Actor                                                                                     |
| `viewGroup`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | Identifier for the view group layout.                                                                 | secondary                                                                                             |
| `viewMode`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | Identifier for the view mode.                                                                         | 131131                                                                                                |
| `directory`                                                                                           | [operations.GetActorsLibraryDirectory](../../../sdk/models/operations/getactorslibrarydirectory.md)[] | :heavy_minus_sign:                                                                                    | An array of actor entries for media items.                                                            |                                                                                                       |