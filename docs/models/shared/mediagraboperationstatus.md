# MediaGrabOperationStatus

## Example Usage

```typescript
import { MediaGrabOperationStatus } from "@lukehagar/plexjs/models/shared";

let value: MediaGrabOperationStatus = MediaGrabOperationStatus.Error;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Inactive`             | inactive               |
| `Scheduled`            | scheduled              |
| `Inprogress`           | inprogress             |
| `Complete`             | complete               |
| `Cancelled`            | cancelled              |
| `Error`                | error                  |
| `Postprocessing`       | postprocessing         |
| `Paused`               | paused                 |
| -                      | `Unrecognized<string>` |