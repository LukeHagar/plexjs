# Genre

The filter query string for similar items.

## Example Usage

```typescript
import { Genre } from "@lukehagar/plexjs/sdk/models/operations";

let value: Genre = {
  id: 259,
  filter: "genre=19",
  tag: "Crime",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The unique identifier for the genre.<br/>NOTE: This is different for each Plex server and is not globally unique.<br/> | 259                                                                                                            |
| `filter`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | genre=19                                                                                                       |
| `tag`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The genre name of this media-item<br/>                                                                         | Crime                                                                                                          |