# Owned

Indicates if the user owns the server.

## Example Usage

```typescript
import { Owned } from "@parke.dev/plexjs/models/operations";

let value: Owned = Owned.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |