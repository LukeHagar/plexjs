# ProcessingState

The state of processing if this generator is part of an optimizer playlist

## Example Usage

```typescript
import { ProcessingState } from "@lukehagar/plexjs/models/operations";

let value: ProcessingState = ProcessingState.Disabled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Processed`            | processed              |
| `Completed`            | completed              |
| `Tombstoned`           | tombstoned             |
| `Disabled`             | disabled               |
| `Error`                | error                  |
| `Pending`              | pending                |
| -                      | `Unrecognized<string>` |