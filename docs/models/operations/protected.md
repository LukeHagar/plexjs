# Protected

Indicates whether the account is protected.

## Example Usage

```typescript
import { Protected } from "@lukehagar/plexjs/models/operations";

let value: Protected = Protected.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |