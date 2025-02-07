# GetMediaMetaDataGenre

## Example Usage

```typescript
import { GetMediaMetaDataGenre } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataGenre = {
  id: 1057,
  filter: "genre=1057",
  tag: "Crime",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *number*                         | :heavy_check_mark:               | The unique genre identifier.     | 1057                             |
| `filter`                         | *string*                         | :heavy_check_mark:               | The filter string for the genre. | genre=1057                       |
| `tag`                            | *string*                         | :heavy_check_mark:               | The genre name.                  | Crime                            |