# MediaTypeString

The type of media content in the Plex library. This can represent videos, music, or photos.


## Example Usage

```typescript
import { MediaTypeString } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaTypeString = MediaTypeString.Movie;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `Movie`      | movie        |
| `TvShow`     | show         |
| `Season`     | season       |
| `Episode`    | episode      |
| `Artist`     | artist       |
| `Album`      | album        |
| `Track`      | track        |
| `PhotoAlbum` | photoalbum   |
| `Photo`      | photo        |
| `Collection` | collection   |