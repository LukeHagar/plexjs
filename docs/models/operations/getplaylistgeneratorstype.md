# GetPlaylistGeneratorsType

The type of playlist generator.

  - -1: A smart playlist generator
  - 42: A optimized version generator


## Example Usage

```typescript
import { GetPlaylistGeneratorsType } from "@lukehagar/plexjs/models/operations";

let value: GetPlaylistGeneratorsType = GetPlaylistGeneratorsType.FortyTwo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minus1`               | -1                     |
| `FortyTwo`             | 42                     |
| -                      | `Unrecognized<number>` |