# GetPlaylistGeneratorState

## Example Usage

```typescript
import { GetPlaylistGeneratorState } from "@lukehagar/plexjs/models/operations";

let value: GetPlaylistGeneratorState = GetPlaylistGeneratorState.Failed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pending`              | pending                |
| `Complete`             | complete               |
| `Failed`               | failed                 |
| -                      | `Unrecognized<string>` |