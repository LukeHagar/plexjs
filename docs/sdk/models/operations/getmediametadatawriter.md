# GetMediaMetaDataWriter

## Example Usage

```typescript
import { GetMediaMetaDataWriter } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataWriter = {
  id: 126522,
  tag: "Jamie P. Hanson",
  filter: "writer=126522",
  thumb:
    "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
  tagKey: "5d77683d85719b001f3a535e",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *number*                                                                        | :heavy_check_mark:                                                              | Unique identifier for the writer.                                               | 126522                                                                          |
| `tag`                                                                           | *string*                                                                        | :heavy_check_mark:                                                              | The role of Writer                                                              | Jamie P. Hanson                                                                 |
| `filter`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | The filter string used to query this writer.                                    | writer=126522                                                                   |
| `thumb`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The URL of the thumbnail image for the writer.                                  | https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg   |
| `tagKey`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | A unique key associated with the writers tag, used for internal identification. | 5d77683d85719b001f3a535e                                                        |