# GetLibraryItemsRequest

## Example Usage

```typescript
import { GetLibraryItemsRequest, Tag } from "@lukehagar/plexjs";

let value: GetLibraryItemsRequest = {
    sectionId: "<value>",
    tag: Tag.RecentlyViewed,
    includeGuids: 1,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `sectionId`                                           | *any*                                                 | :heavy_check_mark:                                    | the Id of the library to query                        |                                                       |
| `tag`                                                 | [models.Tag](../models/tag.md)                        | :heavy_check_mark:                                    | A key representing a specific tag within the section. |                                                       |
| `includeGuids`                                        | *number*                                              | :heavy_minus_sign:                                    | Adds the Guids object to the response<br/>            | 1                                                     |