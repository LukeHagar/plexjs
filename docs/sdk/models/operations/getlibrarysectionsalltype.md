# GetLibrarySectionsAllType

## Example Usage

```typescript
import { GetLibrarySectionsAllType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibrarySectionsAllType = {
  key: "/library/sections/2/all?type=2",
  type: "filter",
  subtype: "clip",
  title: "TV Shows",
  active: false,
  filter: [
    {
      filter: "genre",
      filterType: "string",
      key: "/library/sections/2/genre?type=2",
      title: "Genre",
      type: "filter",
      advanced: true,
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
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | /library/sections/2/all?type=2                                                                            |
| `type`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | filter                                                                                                    |
| `subtype`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | clip                                                                                                      |
| `title`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       | TV Shows                                                                                                  |
| `active`                                                                                                  | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       | false                                                                                                     |
| `filter`                                                                                                  | [operations.GetLibrarySectionsAllFilter](../../../sdk/models/operations/getlibrarysectionsallfilter.md)[] | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `sort`                                                                                                    | [operations.GetLibrarySectionsAllSort](../../../sdk/models/operations/getlibrarysectionsallsort.md)[]     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `field`                                                                                                   | [operations.GetLibrarySectionsAllField](../../../sdk/models/operations/getlibrarysectionsallfield.md)[]   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |