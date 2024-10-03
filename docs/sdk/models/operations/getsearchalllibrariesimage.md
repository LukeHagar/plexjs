# GetSearchAllLibrariesImage

## Example Usage

```typescript
import { GetSearchAllLibrariesImage, GetSearchAllLibrariesLibraryType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesImage = {
  alt: "Episode 1",
  type: GetSearchAllLibrariesLibraryType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Episode 1                                                                                                         |
| `type`                                                                                                            | [operations.GetSearchAllLibrariesLibraryType](../../../sdk/models/operations/getsearchalllibrarieslibrarytype.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               | background                                                                                                        |
| `url`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | /library/metadata/45521/thumb/1644710589                                                                          |