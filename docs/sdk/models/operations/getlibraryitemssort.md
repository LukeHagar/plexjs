# GetLibraryItemsSort

## Example Usage

```typescript
import {
  GetLibraryItemsActiveDirection,
  GetLibraryItemsDefaultDirection,
  GetLibraryItemsSort,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsSort = {
  default: "asc",
  active: false,
  activeDirection: GetLibraryItemsActiveDirection.Ascending,
  defaultDirection: GetLibraryItemsDefaultDirection.Ascending,
  descKey: "titleSort:desc",
  firstCharacterKey: "/library/sections/2/firstCharacter",
  key: "titleSort",
  title: "Title",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `default`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | asc                                                                                                             |
| `active`                                                                                                        | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | false                                                                                                           |
| `activeDirection`                                                                                               | [operations.GetLibraryItemsActiveDirection](../../../sdk/models/operations/getlibraryitemsactivedirection.md)   | :heavy_minus_sign:                                                                                              | The direction of the sort. Can be either `asc` or `desc`.<br/>                                                  | asc                                                                                                             |
| `defaultDirection`                                                                                              | [operations.GetLibraryItemsDefaultDirection](../../../sdk/models/operations/getlibraryitemsdefaultdirection.md) | :heavy_minus_sign:                                                                                              | The direction of the sort. Can be either `asc` or `desc`.<br/>                                                  | asc                                                                                                             |
| `descKey`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | titleSort:desc                                                                                                  |
| `firstCharacterKey`                                                                                             | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             | /library/sections/2/firstCharacter                                                                              |
| `key`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | titleSort                                                                                                       |
| `title`                                                                                                         | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | Title                                                                                                           |