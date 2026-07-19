# GetPlaylistGeneratorsType

The type of playlist generator.

  - -1: A smart playlist generator
  - 42: A optimized version generator

## Example Usage

```typescript
import { GetPlaylistGeneratorsType } from "@parke.dev/plexjs/models/operations";

let value: GetPlaylistGeneratorsType = GetPlaylistGeneratorsType.FortyTwo;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Minus1`               | -1                     |
| `FortyTwo`             | 42                     |
| -                      | `Unrecognized<number>` |