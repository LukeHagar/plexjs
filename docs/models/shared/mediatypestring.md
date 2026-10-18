# MediaTypeString

The Plex media type name, corresponding to the numeric MediaType schema.

## Example Usage

```typescript
import { MediaTypeString } from "@parke.dev/plexjs/models/shared";

let value: MediaTypeString = MediaTypeString.Movie;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Movie`                | movie                  |
| `TvShow`               | show                   |
| `Season`               | season                 |
| `Episode`              | episode                |
| `Trailer`              | trailer                |
| `Person`               | person                 |
| `Artist`               | artist                 |
| `Album`                | album                  |
| `Track`                | track                  |
| `Clip`                 | clip                   |
| `Photo`                | photo                  |
| `PhotoAlbum`           | photoalbum             |
| `Playlist`             | playlist               |
| `PlaylistFolder`       | playlistfolder         |
| `Collection`           | collection             |
| -                      | `Unrecognized<string>` |