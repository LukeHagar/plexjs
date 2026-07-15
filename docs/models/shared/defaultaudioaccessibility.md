# DefaultAudioAccessibility

The audio accessibility mode (0 = Prefer non-accessibility audio, 1 = Prefer accessibility audio, 2 = Only show accessibility audio, 3 = Only show non-accessibility audio)

## Example Usage

```typescript
import { DefaultAudioAccessibility } from "@parke.dev/plexjs/models/shared";

let value: DefaultAudioAccessibility =
  DefaultAudioAccessibility.PreferNonAccessibility;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `PreferNonAccessibility` | 0                        |
| `PreferAccessibility`    | 1                        |
| `OnlyAccessibility`      | 2                        |
| `OnlyNonAccessibility`   | 3                        |
| -                        | `Unrecognized<number>`   |