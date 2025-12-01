# GetPlaylistGeneratorPolicy

## Example Usage

```typescript
import { GetPlaylistGeneratorPolicy } from "@lukehagar/plexjs/models/operations";

let value: GetPlaylistGeneratorPolicy = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scope`                                                                                      | [operations.GetPlaylistGeneratorScope](../../models/operations/getplaylistgeneratorscope.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `unwatched`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | True if only unwatched items are optimized                                                   |
| `value`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | If the scope is count, the number of items to optimize                                       |