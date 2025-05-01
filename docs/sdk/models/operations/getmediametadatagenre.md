# GetMediaMetaDataGenre

The filter query string for similar items.

## Example Usage

```typescript
import { GetMediaMetaDataGenre } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataGenre = {
  id: 259,
  tag: "Crime",
  filter: "genre=19",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *number*                           | :heavy_check_mark:                 | N/A                                | 259                                |
| `tag`                              | *string*                           | :heavy_check_mark:                 | The genre name of this media-item<br/> | Crime                              |
| `filter`                           | *string*                           | :heavy_check_mark:                 | N/A                                | genre=19                           |