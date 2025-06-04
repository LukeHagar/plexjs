# Writer

## Example Usage

```typescript
import { Writer } from "@lukehagar/plexjs/sdk/models/operations";

let value: Writer = {
  id: 126522,
  filter: "writer=126522",
  tag: "Jamie P. Hanson",
  tagKey: "5d77683d85719b001f3a535e",
  thumb:
    "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Unique identifier for the writer.                                                                         | 126522                                                                                                    |
| `filter`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The filter string used to query this writer.                                                              | writer=126522                                                                                             |
| `tag`                                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The role of Writer                                                                                        | Jamie P. Hanson                                                                                           |
| `tagKey`                                                                                                  | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | A 24-character hexadecimal unique key associated with the writer’s tag, used for internal identification. | 5d77683d85719b001f3a535e                                                                                  |
| `thumb`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The absolute URL of the thumbnail image for the writer.                                                   | https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg                             |