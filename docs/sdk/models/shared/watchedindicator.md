# WatchedIndicator

Whether or not media watched indicators are enabled (little orange dot on media)

## Example Usage

```typescript
import { WatchedIndicator } from "@lukehagar/plexjs/sdk/models/shared";

let value: WatchedIndicator = WatchedIndicator.MoviesAndTvShows;
```

## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `None`             | 0                  |
| `MoviesAndTvShows` | 1                  |
| `Movies`           | 2                  |
| `TvShows`          | 3                  |