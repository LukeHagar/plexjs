# WatchedIndicator

Whether or not media watched indicators are enabled (little orange dot on media)

## Example Usage

```typescript
import { WatchedIndicator } from "@parke.dev/plexjs/models/shared";

let value: WatchedIndicator = WatchedIndicator.MoviesAndTvShows;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `None`                 | 0                      |
| `MoviesAndTvShows`     | 1                      |
| `Movies`               | 2                      |
| `TvShows`              | 3                      |
| -                      | `Unrecognized<number>` |