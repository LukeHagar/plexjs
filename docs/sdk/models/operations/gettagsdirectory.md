# GetTagsDirectory

## Example Usage

```typescript
import { GetTagsDirectory } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTagsDirectory = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `filter`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | The filter string to view metadata wit this tag                                             |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `tag`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name of the tag                                                                         |
| `tagKey`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | The key of this tag.  This is a universal key across all PMS instances and plex.tv services |
| `tagType`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | The type of the tag                                                                         |
| `thumb`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The URL to a thumbnail for this tag                                                         |