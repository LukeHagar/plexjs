# GetCountriesLibraryMediaContainer

## Example Usage

```typescript
import { GetCountriesLibraryMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCountriesLibraryMediaContainer = {
  size: 50,
  allowSync: false,
  art: "/:/resources/show-fanart.jpg",
  content: "secondary",
  identifier: "com.plexapp.plugins.library",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  nocache: true,
  thumb: "/:/resources/show.png",
  title1: "TV Series",
  title2: "By Starring Actor",
  viewGroup: "secondary",
  directory: [
    {
      fastKey: "/library/sections/2/all?country=15491",
      key: "15491",
      title: "Japan",
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | Number of media items returned in this response.                                                            | 50                                                                                                          |
| `allowSync`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Indicates whether syncing is allowed.                                                                       | false                                                                                                       |
| `art`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | URL for the background artwork of the media container.                                                      | /:/resources/show-fanart.jpg                                                                                |
| `content`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The content type or mode.                                                                                   | secondary                                                                                                   |
| `identifier`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | An plugin identifier for the media container.                                                               | com.plexapp.plugins.library                                                                                 |
| `mediaTagPrefix`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The prefix used for media tag resource paths.                                                               | /system/bundle/media/flags/                                                                                 |
| `mediaTagVersion`                                                                                           | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The version number for media tags.                                                                          | 1734362201                                                                                                  |
| `nocache`                                                                                                   | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Specifies whether caching is disabled.                                                                      | true                                                                                                        |
| `thumb`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | URL for the thumbnail image of the media container.                                                         | /:/resources/show.png                                                                                       |
| `title1`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The primary title of the media container.                                                                   | TV Series                                                                                                   |
| `title2`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The secondary title of the media container.                                                                 | By Starring Actor                                                                                           |
| `viewGroup`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Identifier for the view group layout.                                                                       | secondary                                                                                                   |
| `directory`                                                                                                 | [operations.GetCountriesLibraryDirectory](../../../sdk/models/operations/getcountrieslibrarydirectory.md)[] | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |