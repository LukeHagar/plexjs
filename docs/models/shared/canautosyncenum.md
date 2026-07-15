# CanAutoSyncEnum

## Example Usage

```typescript
import { CanAutoSyncEnum } from "@parke.dev/plexjs/models/shared";

let value: CanAutoSyncEnum = CanAutoSyncEnum.Zero;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| -                      | `Unrecognized<string>` |