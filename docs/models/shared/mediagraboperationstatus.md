# MediaGrabOperationStatus

## Example Usage

```typescript
import { MediaGrabOperationStatus } from "@parke.dev/plexjs/models/shared";

let value: MediaGrabOperationStatus = MediaGrabOperationStatus.Error;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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