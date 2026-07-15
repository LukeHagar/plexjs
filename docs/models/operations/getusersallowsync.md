# GetUsersAllowSync

Indicates if the user is allowed to sync media.

## Example Usage

```typescript
import { GetUsersAllowSync } from "@parke.dev/plexjs/models/operations";

let value: GetUsersAllowSync = GetUsersAllowSync.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |