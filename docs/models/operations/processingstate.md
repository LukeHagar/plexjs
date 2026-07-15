# ProcessingState

The state of processing if this generator is part of an optimizer playlist

## Example Usage

```typescript
import { ProcessingState } from "@parke.dev/plexjs/models/operations";

let value: ProcessingState = ProcessingState.Disabled;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Processed`            | processed              |
| `Completed`            | completed              |
| `Tombstoned`           | tombstoned             |
| `Disabled`             | disabled               |
| `Error`                | error                  |
| `Pending`              | pending                |
| -                      | `Unrecognized<string>` |