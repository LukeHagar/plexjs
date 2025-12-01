# AllowSync

Indicates if the user is allowed to sync media.

## Example Usage

```typescript
import { AllowSync } from "@lukehagar/plexjs/models/operations";

let value: AllowSync = AllowSync.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |