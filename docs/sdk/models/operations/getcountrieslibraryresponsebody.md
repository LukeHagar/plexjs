# GetCountriesLibraryResponseBody

Successful response containing media container data.

## Example Usage

```typescript
import { GetCountriesLibraryResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCountriesLibraryResponseBody = {
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
        fastKey: "/library/sections/2/all?country=15491",
        key: "15491",
        title: "Japan",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                    | [operations.GetCountriesLibraryMediaContainer](../../../sdk/models/operations/getcountrieslibrarymediacontainer.md) | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |