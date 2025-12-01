# DefaultSubtitleAccessibility

The subtitles for the deaf or hard-of-hearing (SDH) searches mode (0 = Prefer non-SDH subtitles, 1 = Prefer SDH subtitles, 2 = Only show SDH subtitles, 3 = Only show non-SDH subtitles)

## Example Usage

```typescript
import { DefaultSubtitleAccessibility } from "@lukehagar/plexjs/models/shared";

let value: DefaultSubtitleAccessibility =
  DefaultSubtitleAccessibility.PreferSdh;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PreferNonSdh`         | 0                      |
| `PreferSdh`            | 1                      |
| `OnlySdh`              | 2                      |
| `OnlyNonSdh`           | 3                      |
| -                      | `Unrecognized<number>` |