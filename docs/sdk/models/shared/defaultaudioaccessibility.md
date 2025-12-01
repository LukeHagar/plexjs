# DefaultAudioAccessibility

The audio accessibility mode (0 = Prefer non-accessibility audio, 1 = Prefer accessibility audio, 2 = Only show accessibility audio, 3 = Only show non-accessibility audio)

## Example Usage

```typescript
import { DefaultAudioAccessibility } from "@lukehagar/plexjs/sdk/models/shared";

let value: DefaultAudioAccessibility =
  DefaultAudioAccessibility.PreferNonAccessibility;
```

## Values

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `PreferNonAccessibility` | 0                        |
| `PreferAccessibility`    | 1                        |
| `OnlyAccessibility`      | 2                        |
| `OnlyNonAccessibility`   | 3                        |