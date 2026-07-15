# AllowChannels

Indicates if the user has access to channels.

## Example Usage

```typescript
import { AllowChannels } from "@parke.dev/plexjs/models/operations";

let value: AllowChannels = AllowChannels.Enable;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |