# Restricted

Indicates if the user has restricted access.

## Example Usage

```typescript
import { Restricted } from "@parke.dev/plexjs/models/operations";

let value: Restricted = Restricted.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |