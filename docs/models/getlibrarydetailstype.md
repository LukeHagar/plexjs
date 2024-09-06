# GetLibraryDetailsType

## Example Usage

```typescript
import { GetLibraryDetailsType } from "@lukehagar/plexjs";

let value: GetLibraryDetailsType = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | /library/sections/1/all?type=1                                           |
| `type`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | movie                                                                    |
| `title`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | Movies                                                                   |
| `active`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      | false                                                                    |
| `filter`                                                                 | [models.GetLibraryDetailsFilter](../models/getlibrarydetailsfilter.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sort`                                                                   | [models.Sort](../models/sort.md)[]                                       | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `field`                                                                  | [models.Field](../models/field.md)[]                                     | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |