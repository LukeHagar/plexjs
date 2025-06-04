# GetActorsLibraryQueryParamType

The type of media to retrieve or filter by.
1 = movie
2 = show
3 = season
4 = episode
E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries


## Example Usage

```typescript
import { GetActorsLibraryQueryParamType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetActorsLibraryQueryParamType =
  GetActorsLibraryQueryParamType.TvShow;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Movie`                | 1                      |
| `TvShow`               | 2                      |
| `Season`               | 3                      |
| `Episode`              | 4                      |
| `Artist`               | 5                      |
| `Album`                | 6                      |
| `Track`                | 7                      |
| `PhotoAlbum`           | 8                      |
| `Photo`                | 9                      |
| -                      | `Unrecognized<number>` |