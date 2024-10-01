# GetLibraryItemsMeta

The Meta object is only included in the response if the `includeMeta` parameter is set to `1`.


## Example Usage

```typescript
import {
  GetLibraryItemsLibraryActiveDirection,
  GetLibraryItemsLibraryDefaultDirection,
  GetLibraryItemsMeta,
} from "@lukehagar/plexjs/sdk/models/operations";

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
          activeDirection: GetLibraryItemsLibraryActiveDirection.Ascending,
          defaultDirection: GetLibraryItemsLibraryDefaultDirection.Ascending,
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
      operator: [
        {
          key: "=",
          title: "is",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                  | [operations.GetLibraryItemsLibraryResponseType](../../../sdk/models/operations/getlibraryitemslibraryresponsetype.md)[] | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `fieldType`                                                                                                             | [operations.GetLibraryItemsLibraryFieldType](../../../sdk/models/operations/getlibraryitemslibraryfieldtype.md)[]       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |