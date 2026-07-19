# MediaContainerWithDecisionBitrateMode

Audio bitrate mode (cbr or vbr).

## Example Usage

```typescript
import { MediaContainerWithDecisionBitrateMode } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDecisionBitrateMode =
  MediaContainerWithDecisionBitrateMode.Vbr;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Cbr`                  | cbr                    |
| `Vbr`                  | vbr                    |
| -                      | `Unrecognized<string>` |