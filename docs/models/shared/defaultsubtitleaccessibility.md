# DefaultSubtitleAccessibility

The subtitles for the deaf or hard-of-hearing (SDH) searches mode (0 = Prefer non-SDH subtitles, 1 = Prefer SDH subtitles, 2 = Only show SDH subtitles, 3 = Only show non-SDH subtitles)

## Example Usage

```typescript
import { DefaultSubtitleAccessibility } from "@parke.dev/plexjs/models/shared";

let value: DefaultSubtitleAccessibility =
  DefaultSubtitleAccessibility.PreferSdh;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PreferNonSdh`         | 0                      |
| `PreferSdh`            | 1                      |
| `OnlySdh`              | 2                      |
| `OnlyNonSdh`           | 3                      |
| -                      | `Unrecognized<number>` |