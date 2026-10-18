# TimedEnum

## Example Usage

```typescript
import { TimedEnum } from "@parke.dev/plexjs/models/shared";

let value: TimedEnum = TimedEnum.Zero;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| -                      | `Unrecognized<string>` |