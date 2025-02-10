# GetRecentlyAddedType

## Example Usage

```typescript
import { GetRecentlyAddedType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedType = {
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `key`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | /library/sections/2/all?type=2                                                                  |
| `type`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | filter                                                                                          |
| `subtype`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | clip                                                                                            |
| `title`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | TV Shows                                                                                        |
| `active`                                                                                        | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             | false                                                                                           |
| `filter`                                                                                        | [operations.GetRecentlyAddedFilter](../../../sdk/models/operations/getrecentlyaddedfilter.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `sort`                                                                                          | [operations.GetRecentlyAddedSort](../../../sdk/models/operations/getrecentlyaddedsort.md)[]     | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `field`                                                                                         | [operations.GetRecentlyAddedField](../../../sdk/models/operations/getrecentlyaddedfield.md)[]   | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |