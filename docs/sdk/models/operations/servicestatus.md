# ServiceStatus

## Example Usage

```typescript
import { ServiceStatus } from "@lukehagar/plexjs/sdk/models/operations";

let value: ServiceStatus = ServiceStatus.Online;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Online`               | online                 |
| `Offline`              | offline                |
| -                      | `Unrecognized<string>` |