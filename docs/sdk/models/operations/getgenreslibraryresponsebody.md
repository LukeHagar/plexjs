# GetGenresLibraryResponseBody

Successful response containing media container data.

## Example Usage

```typescript
import { GetGenresLibraryResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGenresLibraryResponseBody = {
  mediaContainer: {
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
        fastKey: "/library/sections/10/all?genre=89",
        key: "89",
        title: "Action",
        type: "genre",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                              | [operations.GetGenresLibraryMediaContainer](../../../sdk/models/operations/getgenreslibrarymediacontainer.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |