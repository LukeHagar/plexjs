# Pending

Indicates if the server is pending approval.

## Example Usage

```typescript
import { Pending } from "@parke.dev/plexjs/models/operations";

let value: Pending = Pending.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |