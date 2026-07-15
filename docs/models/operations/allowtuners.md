# AllowTuners

Indicates if the user is allowed to use tuners.

## Example Usage

```typescript
import { AllowTuners } from "@parke.dev/plexjs/models/operations";

let value: AllowTuners = AllowTuners.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |