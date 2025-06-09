# GetLibraryItemsMeta

The Meta object is only included in the response if the `includeMeta` parameter is set to `1`.


## Example Usage

```typescript
import { GetLibraryItemsMeta } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsMeta = {
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
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                  | [operations.GetLibraryItemsLibraryType](../../../sdk/models/operations/getlibraryitemslibrarytype.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `fieldType`                                                                                             | [operations.GetLibraryItemsFieldType](../../../sdk/models/operations/getlibraryitemsfieldtype.md)[]     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |