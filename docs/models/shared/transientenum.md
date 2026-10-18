# TransientEnum

## Example Usage

```typescript
import { TransientEnum } from "@parke.dev/plexjs/models/shared";

let value: TransientEnum = TransientEnum.One;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| -                      | `Unrecognized<string>` |