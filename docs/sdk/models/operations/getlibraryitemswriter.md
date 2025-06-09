# GetLibraryItemsWriter

## Example Usage

```typescript
import { GetLibraryItemsWriter } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsWriter = {
  id: 126522,
  tag: "Jamie P. Hanson",
  thumb:
    "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | Unique identifier for the writer.                                             | 126522                                                                        |
| `tag`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The role of Writer                                                            | Jamie P. Hanson                                                               |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The absolute URL of the thumbnail image for the writer.                       | https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg |