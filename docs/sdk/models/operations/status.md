# Status

Current friend request status

## Example Usage

```typescript
import { Status } from "@lukehagar/plexjs/sdk/models/operations";

let value: Status = Status.Accepted;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Accepted`             | accepted               |
| -                      | `Unrecognized<string>` |