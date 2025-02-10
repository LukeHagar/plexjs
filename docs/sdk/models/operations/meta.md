# Meta

The Meta object is only included in the response if the `includeMeta` parameter is set to `1`.


## Example Usage

```typescript
import { Meta } from "@lukehagar/plexjs/sdk/models/operations";

let value: Meta = {
  type: [
    {
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `type`                                                                                                | [operations.GetRecentlyAddedType](../../../sdk/models/operations/getrecentlyaddedtype.md)[]           | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `fieldType`                                                                                           | [operations.GetRecentlyAddedFieldType](../../../sdk/models/operations/getrecentlyaddedfieldtype.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |