# PerfectMatchEnum

## Example Usage

```typescript
import { PerfectMatchEnum } from "@parke.dev/plexjs/models/shared";

let value: PerfectMatchEnum = PerfectMatchEnum.One;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| -                      | `Unrecognized<string>` |