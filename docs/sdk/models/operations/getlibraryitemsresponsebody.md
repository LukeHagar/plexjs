# GetLibraryItemsResponseBody

The contents of the library by section and tag

## Example Usage

```typescript
import { GetLibraryItemsResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsResponseBody = {
  mediaContainer: {
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
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                            | [operations.GetLibraryItemsMediaContainer](../../../sdk/models/operations/getlibraryitemsmediacontainer.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |