# Pending

Indicates if the server is pending approval.

## Example Usage

```typescript
import { Pending } from "@lukehagar/plexjs/models/operations";

let value: Pending = Pending.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |