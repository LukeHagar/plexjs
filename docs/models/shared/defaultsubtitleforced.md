# DefaultSubtitleForced

The forced subtitles searches mode (0 = Prefer non-forced subtitles, 1 = Prefer forced subtitles, 2 = Only show forced subtitles, 3 = Only show non-forced subtitles)

## Example Usage

```typescript
import { DefaultSubtitleForced } from "@parke.dev/plexjs/models/shared";

let value: DefaultSubtitleForced = DefaultSubtitleForced.PreferForced;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PreferNonForced`      | 0                      |
| `PreferForced`         | 1                      |
| `OnlyForced`           | 2                      |
| `OnlyNonForced`        | 3                      |
| -                      | `Unrecognized<number>` |