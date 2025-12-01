# AllowTuners

Indicates if the user is allowed to use tuners.

## Example Usage

```typescript
import { AllowTuners } from "@lukehagar/plexjs/models/operations";

let value: AllowTuners = AllowTuners.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |