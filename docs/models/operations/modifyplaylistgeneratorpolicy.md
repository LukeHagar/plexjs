# ModifyPlaylistGeneratorPolicy

## Example Usage

```typescript
import { ModifyPlaylistGeneratorPolicy } from "@lukehagar/plexjs/models/operations";
import { BoolInt } from "@lukehagar/plexjs/models/shared";

let value: ModifyPlaylistGeneratorPolicy = {
  unwatched: BoolInt.True,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `value`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `scope`                                                                                            | [operations.ModifyPlaylistGeneratorScope](../../models/operations/modifyplaylistgeneratorscope.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `unwatched`                                                                                        | [shared.BoolInt](../../models/shared/boolint.md)                                                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 1                                                                                                  |