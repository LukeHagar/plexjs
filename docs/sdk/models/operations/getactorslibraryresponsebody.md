# GetActorsLibraryResponseBody

Successful response containing media container data.

## Example Usage

```typescript
import { GetActorsLibraryResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetActorsLibraryResponseBody = {
  mediaContainer: {
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
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                              | [operations.GetActorsLibraryMediaContainer](../../../sdk/models/operations/getactorslibrarymediacontainer.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |