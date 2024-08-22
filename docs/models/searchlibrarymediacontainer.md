# SearchLibraryMediaContainer

## Example Usage

```typescript
import { SearchLibraryMediaContainer } from "@lukehagar/plexjs";

let value: SearchLibraryMediaContainer = {
    size: 2,
    allowSync: false,
    art: "/:/resources/show-fanart.jpg",
    identifier: "com.plexapp.plugins.library",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1698860922,
    nocache: true,
    thumb: "/:/resources/show.png",
    title1: "TV Shows",
    title2: "Search for ''",
    viewGroup: "season",
    viewMode: 65593,
    metadata: [
        {
            ratingKey: "2",
            key: "/library/metadata/2/children",
            parentRatingKey: "1",
            guid: "plex://season/602e67e766dfdb002c0a1b5b",
            parentGuid: "plex://show/5d9c086c7d06d9001ffd27aa",
            parentStudio: "Mutant Enemy Productions",
            type: "season",
            title: "Season 1",
            parentKey: "/library/metadata/1",
            parentTitle: "Firefly",
            summary:
                "Captain Malcolm 'Mal' Reynolds is a former galactic war veteran who is the captain of the transport ship \"Serenity\". Mal and his crew, ensign Zoe Alleyne Washburne; Zoe's husband, pilot Hoban 'Wash' Washburne; muscular mercenary Jayne Cobb; young mechanic Kaylee Frye; former Alliance medical officer Simon Tam; his disturbed teenage sister River (both on the run from the interplanetary government \"The Alliance\"); the beautiful courtesan Inara Serra; and preacher Shepherd Book do any jobs, legal or illegal, they can find as the Serenity crew travels across the outskirts of outer space.",
            index: 1,
            parentIndex: 1,
            parentYear: 2002,
            thumb: "/library/metadata/2/thumb/1705636920",
            art: "/library/metadata/1/art/1705636920",
            parentThumb: "/library/metadata/1/thumb/1705636920",
            parentTheme: "/library/metadata/1/theme/1705636920",
            addedAt: 1705636916,
            updatedAt: 1705636920,
        },
    ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `size`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 2                                                                    |
| `allowSync`                                                          | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | false                                                                |
| `art`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | /:/resources/show-fanart.jpg                                         |
| `identifier`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | com.plexapp.plugins.library                                          |
| `mediaTagPrefix`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | /system/bundle/media/flags/                                          |
| `mediaTagVersion`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 1698860922                                                           |
| `nocache`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  | true                                                                 |
| `thumb`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | /:/resources/show.png                                                |
| `title1`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | TV Shows                                                             |
| `title2`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | Search for ''                                                        |
| `viewGroup`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | season                                                               |
| `viewMode`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 65593                                                                |
| `metadata`                                                           | [models.SearchLibraryMetadata](../models/searchlibrarymetadata.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |