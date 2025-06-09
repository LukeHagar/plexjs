# GetLibraryItemsImage

## Example Usage

```typescript
import { GetLibraryItemsImage, GetLibraryItemsLibraryResponseType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsImage = {
  alt: "Episode 1",
  type: GetLibraryItemsLibraryResponseType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | Episode 1                                                                                                             |
| `type`                                                                                                                | [operations.GetLibraryItemsLibraryResponseType](../../../sdk/models/operations/getlibraryitemslibraryresponsetype.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | background                                                                                                            |
| `url`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   | /library/metadata/45521/thumb/1644710589                                                                              |