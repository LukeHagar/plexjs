# MediaType

The type of media to retrieve or filter by.

1 = movie
2 = show
3 = season
4 = episode
5 = trailer
7 = person
8 = artist
9 = album
10 = track
12 = clip
13 = photo
14 = photoalbum
15 = playlist
16 = playlistfolder
18 = collection

E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries

## Example Usage

```typescript
import { MediaType } from "@parke.dev/plexjs/models/shared";

let value: MediaType = MediaType.TvShow;
```

## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `Movie`          | 1                |
| `TvShow`         | 2                |
| `Season`         | 3                |
| `Episode`        | 4                |
| `Trailer`        | 5                |
| `Person`         | 7                |
| `Artist`         | 8                |
| `Album`          | 9                |
| `Track`          | 10               |
| `Clip`           | 12               |
| `Photo`          | 13               |
| `PhotoAlbum`     | 14               |
| `Playlist`       | 15               |
| `PlaylistFolder` | 16               |
| `Collection`     | 18               |