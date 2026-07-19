# BitrateMode

Audio bitrate mode (cbr or vbr).

## Example Usage

```typescript
import { BitrateMode } from "@parke.dev/plexjs/models/shared";

let value: BitrateMode = BitrateMode.Vbr;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Cbr`                  | cbr                    |
| `Vbr`                  | vbr                    |
| -                      | `Unrecognized<string>` |