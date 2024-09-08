# GetMetaDataByRatingKeyDirector

## Example Usage

```typescript
import { GetMetaDataByRatingKeyDirector } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMetaDataByRatingKeyDirector = {
    id: 130,
    filter: "director=130",
    tag: "Joss Whedon",
    tagKey: "5d776828880197001ec90e8f",
    thumb: "https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 130                                                                 |
| `filter`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | director=130                                                        |
| `tag`                                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | Joss Whedon                                                         |
| `tagKey`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | 5d776828880197001ec90e8f                                            |
| `thumb`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 | https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg |