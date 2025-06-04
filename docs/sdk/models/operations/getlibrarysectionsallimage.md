# GetLibrarySectionsAllImage

## Example Usage

```typescript
import { GetLibrarySectionsAllImage, GetLibrarySectionsAllLibraryResponseType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibrarySectionsAllImage = {
  alt: "Episode 1",
  type: GetLibrarySectionsAllLibraryResponseType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                                             | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | Episode 1                                                                                                                         |
| `type`                                                                                                                            | [operations.GetLibrarySectionsAllLibraryResponseType](../../../sdk/models/operations/getlibrarysectionsalllibraryresponsetype.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | background                                                                                                                        |
| `url`                                                                                                                             | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | /library/metadata/45521/thumb/1644710589                                                                                          |