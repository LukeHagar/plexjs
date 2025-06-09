# GetLibraryItemsDirector

## Example Usage

```typescript
import { GetLibraryItemsDirector } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsDirector = {
  id: 126522,
  tag: "Danny Boyle",
  thumb:
    "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | Unique identifier for the director.                                           | 126522                                                                        |
| `tag`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The role of Director                                                          | Danny Boyle                                                                   |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The absolute URL of the thumbnail image for the director.                     | https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg |