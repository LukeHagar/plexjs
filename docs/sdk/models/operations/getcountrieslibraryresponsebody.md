# GetCountriesLibraryResponseBody

Successful response containing media container data.

## Example Usage

```typescript
import { GetCountriesLibraryResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetCountriesLibraryResponseBody = {
  mediaContainer: {
    size: 50,
    identifier: "com.plexapp.plugins.library",
    allowSync: false,
    art: "/:/resources/show-fanart.jpg",
    content: "secondary",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1734362201,
    nocache: true,
    thumb: "/:/resources/show.png",
    title1: "TV Series",
    title2: "By Country",
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