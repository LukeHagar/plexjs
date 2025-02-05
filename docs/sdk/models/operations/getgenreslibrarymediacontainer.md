# GetGenresLibraryMediaContainer

## Example Usage

```typescript
import { GetGenresLibraryMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGenresLibraryMediaContainer = {
  size: 50,
  identifier: "com.plexapp.plugins.library",
  allowSync: false,
  art: "/:/resources/show-fanart.jpg",
  content: "secondary",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  nocache: true,
  thumb: "/:/resources/show.png",
  title1: "TV Shows (Reality)",
  title2: "By Genre",
  viewGroup: "secondary",
  directory: [
    {
      fastKey: "/library/sections/10/all?genre=89",
      key: "89",
      title: "Action",
      type: "genre",
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `size`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 50                                                                                                    |
| `offset`                                                                                              | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `totalSize`                                                                                           | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `identifier`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | com.plexapp.plugins.library                                                                           |
| `allowSync`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   | false                                                                                                 |
| `art`                                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | /:/resources/show-fanart.jpg                                                                          |
| `content`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | secondary                                                                                             |
| `mediaTagPrefix`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | /system/bundle/media/flags/                                                                           |
| `mediaTagVersion`                                                                                     | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 1734362201                                                                                            |
| `nocache`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   | true                                                                                                  |
| `thumb`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | /:/resources/show.png                                                                                 |
| `title1`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | TV Shows (Reality)                                                                                    |
| `title2`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | By Genre                                                                                              |
| `viewGroup`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | secondary                                                                                             |
| `directory`                                                                                           | [operations.GetGenresLibraryDirectory](../../../sdk/models/operations/getgenreslibrarydirectory.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |