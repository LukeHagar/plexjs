# ProcessingState

The state of processing if this generator is part of an optimizer playlist

## Example Usage

```typescript
import { ProcessingState } from "@lukehagar/plexjs/sdk/models/operations";

let value: ProcessingState = ProcessingState.Disabled;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `Processed`  | processed    |
| `Completed`  | completed    |
| `Tombstoned` | tombstoned   |
| `Disabled`   | disabled     |
| `Error`      | error        |
| `Pending`    | pending      |