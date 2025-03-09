# GetMediaMetaDataSimilar

## Example Usage

```typescript
import { GetMediaMetaDataSimilar } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataSimilar = {
  id: 26,
  filter: "similar=26",
  tag: "Breaking Bad",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *number*                                 | :heavy_check_mark:                       | The unique similar item identifier.      | 26                                       |
| `filter`                                 | *string*                                 | :heavy_check_mark:                       | The filter string for similar items.     | similar=26                               |
| `tag`                                    | *string*                                 | :heavy_check_mark:                       | The tag or title of the similar content. | Breaking Bad                             |