# ServiceStatus

## Example Usage

```typescript
import { ServiceStatus } from "@parke.dev/plexjs/models/operations";

let value: ServiceStatus = ServiceStatus.Online;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Online`               | online                 |
| `Offline`              | offline                |
| -                      | `Unrecognized<string>` |