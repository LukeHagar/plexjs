# Restricted

Indicates if the user has restricted access.

## Example Usage

```typescript
import { Restricted } from "@lukehagar/plexjs/models/operations";

let value: Restricted = Restricted.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |