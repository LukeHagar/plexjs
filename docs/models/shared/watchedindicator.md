# WatchedIndicator

Whether or not media watched indicators are enabled (little orange dot on media)

## Example Usage

```typescript
import { WatchedIndicator } from "@lukehagar/plexjs/models/shared";

let value: WatchedIndicator = WatchedIndicator.MoviesAndTvShows;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `None`                 | 0                      |
| `MoviesAndTvShows`     | 1                      |
| `Movies`               | 2                      |
| `TvShows`              | 3                      |
| -                      | `Unrecognized<number>` |