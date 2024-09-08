# Skip

Indicate that the latest version should be marked as skipped. The [Release] entry for this version will have the `state` set to `skipped`.

## Example Usage

```typescript
import { Skip } from "@lukehagar/plexjs/sdk/models/operations";

let value: Skip = Skip.One;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |