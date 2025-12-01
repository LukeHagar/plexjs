# MediaType

The type of media to retrieve or filter by.

1 = movie
2 = show
3 = season
4 = episode
5 = artist
6 = album
7 = track
8 = photo_album
9 = photo

E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries


## Example Usage

```typescript
import { MediaType } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaType = MediaType.TvShow;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `Movie`      | 1            |
| `TvShow`     | 2            |
| `Season`     | 3            |
| `Episode`    | 4            |
| `Artist`     | 5            |
| `Album`      | 6            |
| `Track`      | 7            |
| `PhotoAlbum` | 8            |
| `Photo`      | 9            |