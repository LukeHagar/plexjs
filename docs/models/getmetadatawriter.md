# GetMetadataWriter

## Example Usage

```typescript
import { GetMetadataWriter } from "@lukehagar/plexjs";

let value: GetMetadataWriter = {
    id: 132,
    filter: "writer=132",
    tag: "Joss Whedon",
    tagKey: "5d776828880197001ec90e8f",
    thumb: "https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 132                                                                 |
| `filter`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | writer=132                                                          |
| `tag`                                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | Joss Whedon                                                         |
| `tagKey`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 5d776828880197001ec90e8f                                            |
| `thumb`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg |