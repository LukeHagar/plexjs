# GetLibraryItemsGenre

## Example Usage

```typescript
import { GetLibraryItemsGenre } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsGenre = {
  id: 259,
  tag: "Crime",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The unique identifier for the genre.<br/>NOTE: This is different for each Plex server and is not globally unique.<br/> | 259                                                                                                            |
| `tag`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The genre name of this media-item<br/>                                                                         | Crime                                                                                                          |