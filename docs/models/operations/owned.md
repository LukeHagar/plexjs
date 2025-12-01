# Owned

Indicates if the user owns the server.

## Example Usage

```typescript
import { Owned } from "@lukehagar/plexjs/models/operations";

let value: Owned = Owned.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |