# GetLibraryDetailsMediaContainer

## Example Usage

```typescript
import { GetLibraryDetailsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryDetailsMediaContainer = {
    size: 29,
    allowSync: false,
    art: "/:/resources/movie-fanart.jpg",
    content: "secondary",
    identifier: "com.plexapp.plugins.library",
    librarySectionID: 1,
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1701731894,
    thumb: "/:/resources/movie.png",
    title1: "Movies",
    viewGroup: "secondary",
    viewMode: 65592,
    directory: [
        {
            key: "search?type=1",
            title: "Search...",
            secondary: true,
            prompt: "Search Movies",
            search: true,
        },
    ],
    type: [
        {
            key: "/library/sections/1/all?type=1",
            type: "movie",
            title: "Movies",
            active: false,
            filter: [
                {
                    filter: "label",
                    filterType: "string",
                    key: "/library/sections/1/label",
                    title: "Labels",
                    type: "filter",
                },
            ],
            sort: [
                {
                    default: "asc",
                    defaultDirection: "desc",
                    descKey: "random:desc",
                    firstCharacterKey: "/library/sections/1/firstCharacter",
                    key: "random",
                    title: "Randomly",
                },
            ],
            field: [
                {
                    key: "label",
                    title: "Label",
                    type: "tag",
                    subType: "bitrate",
                },
            ],
        },
    ],
    fieldType: [
        {
            type: "resolution",
            operator: [
                {
                    key: "=",
                    title: "is",
                },
            ],
        },
    ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                  | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 29                                                                                                      |
| `allowSync`                                                                                             | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | false                                                                                                   |
| `art`                                                                                                   | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | /:/resources/movie-fanart.jpg                                                                           |
| `content`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | secondary                                                                                               |
| `identifier`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | com.plexapp.plugins.library                                                                             |
| `librarySectionID`                                                                                      | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1                                                                                                       |
| `mediaTagPrefix`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | /system/bundle/media/flags/                                                                             |
| `mediaTagVersion`                                                                                       | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 1701731894                                                                                              |
| `thumb`                                                                                                 | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | /:/resources/movie.png                                                                                  |
| `title1`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | Movies                                                                                                  |
| `viewGroup`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | secondary                                                                                               |
| `viewMode`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | 65592                                                                                                   |
| `directory`                                                                                             | [operations.GetLibraryDetailsDirectory](../../../sdk/models/operations/getlibrarydetailsdirectory.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `type`                                                                                                  | [operations.GetLibraryDetailsType](../../../sdk/models/operations/getlibrarydetailstype.md)[]           | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `fieldType`                                                                                             | [operations.FieldType](../../../sdk/models/operations/fieldtype.md)[]                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |