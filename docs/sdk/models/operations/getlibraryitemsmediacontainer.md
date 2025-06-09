# GetLibraryItemsMediaContainer

## Example Usage

```typescript
import { GetLibraryItemsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsMediaContainer = {
  size: 50,
  totalSize: 50,
  offset: 0,
  content: "secondary",
  allowSync: false,
  nocache: true,
  art: "/:/resources/show-fanart.jpg",
  identifier: "com.plexapp.plugins.library",
  librarySectionID: 2,
  librarySectionTitle: "TV Series",
  librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  thumb: "/:/resources/show.png",
  title1: "TV Series",
  title2: "By Starring Actor",
  viewGroup: "secondary",
  viewMode: "131131",
  mixedParents: true,
  metadata: [],
  meta: {
    type: [
      {
        key: "/library/sections/2/all?type=2",
        type: "show",
        title: "TV Shows",
        active: false,
        filter: [
          {
            filter: "genre",
            filterType: "string",
            key: "/library/sections/2/genre?type=2",
            title: "Genre",
            type: "filter",
          },
        ],
        sort: [
          {
            default: "asc",
            active: false,
            descKey: "titleSort:desc",
            firstCharacterKey: "/library/sections/2/firstCharacter",
            key: "titleSort",
            title: "Title",
          },
        ],
        field: [
          {
            key: "show.title",
            title: "Show Title",
            type: "string",
            subType: "rating",
          },
        ],
      },
    ],
    fieldType: [
      {
        type: "tag",
        operator: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `size`                                                                                            | *number*                                                                                          | :heavy_check_mark:                                                                                | Number of media items returned in this response.                                                  | 50                                                                                                |
| `totalSize`                                                                                       | *number*                                                                                          | :heavy_check_mark:                                                                                | Total number of media items in the library.                                                       | 50                                                                                                |
| `offset`                                                                                          | *number*                                                                                          | :heavy_check_mark:                                                                                | Offset value for pagination.                                                                      | 0                                                                                                 |
| `content`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The content type or mode.                                                                         | secondary                                                                                         |
| `allowSync`                                                                                       | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Indicates whether syncing is allowed.                                                             | false                                                                                             |
| `nocache`                                                                                         | *boolean*                                                                                         | :heavy_check_mark:                                                                                | Specifies whether caching is disabled.                                                            | true                                                                                              |
| `art`                                                                                             | *string*                                                                                          | :heavy_check_mark:                                                                                | URL for the background artwork of the media container.                                            | /:/resources/show-fanart.jpg                                                                      |
| `identifier`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | An plugin identifier for the media container.                                                     | com.plexapp.plugins.library                                                                       |
| `librarySectionID`                                                                                | *number*                                                                                          | :heavy_minus_sign:                                                                                | The unique identifier for the library section.                                                    | 2                                                                                                 |
| `librarySectionTitle`                                                                             | *string*                                                                                          | :heavy_minus_sign:                                                                                | The title of the library section.                                                                 | TV Series                                                                                         |
| `librarySectionUUID`                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | The universally unique identifier for the library section.                                        | e69655a2-ef48-4aba-bb19-0cc34d1e7d36                                                              |
| `mediaTagPrefix`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The prefix used for media tag resource paths.                                                     | /system/bundle/media/flags/                                                                       |
| `mediaTagVersion`                                                                                 | *number*                                                                                          | :heavy_check_mark:                                                                                | The version number for media tags.                                                                | 1734362201                                                                                        |
| `thumb`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | URL for the thumbnail image of the media container.                                               | /:/resources/show.png                                                                             |
| `title1`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The primary title of the media container.                                                         | TV Series                                                                                         |
| `title2`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The secondary title of the media container.                                                       | By Starring Actor                                                                                 |
| `viewGroup`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | Identifier for the view group layout.                                                             | secondary                                                                                         |
| `viewMode`                                                                                        | *string*                                                                                          | :heavy_minus_sign:                                                                                | Identifier for the view mode.                                                                     | 131131                                                                                            |
| `mixedParents`                                                                                    | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Indicates if the media container has mixed parents.                                               | true                                                                                              |
| `metadata`                                                                                        | [operations.GetLibraryItemsMetadata](../../../sdk/models/operations/getlibraryitemsmetadata.md)[] | :heavy_check_mark:                                                                                | An array of metadata items.                                                                       |                                                                                                   |
| `meta`                                                                                            | [operations.GetLibraryItemsMeta](../../../sdk/models/operations/getlibraryitemsmeta.md)           | :heavy_minus_sign:                                                                                | The Meta object is only included in the response if the `includeMeta` parameter is set to `1`.<br/> |                                                                                                   |