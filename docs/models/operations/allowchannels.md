# AllowChannels

Indicates if the user has access to channels.

## Example Usage

```typescript
import { AllowChannels } from "@lukehagar/plexjs/models/operations";

let value: AllowChannels = AllowChannels.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |