# LineupType

- `-1`: N/A
- `0`: Over the air
- `1`: Cable
- `2`: Satellite
- `3`: IPTV
- `4`: Virtual


## Example Usage

```typescript
import { LineupType } from "@parke.dev/plexjs/models/shared";

let value: LineupType = LineupType.Two;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minus1`               | -1                     |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| `Two`                  | 2                      |
| `Three`                | 3                      |
| `Four`                 | 4                      |
| -                      | `Unrecognized<number>` |