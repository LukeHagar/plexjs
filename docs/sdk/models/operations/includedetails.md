# IncludeDetails

Whether or not to include details for a section (types, filters, and sorts).
Only exists for backwards compatibility, media providers other than the server libraries have it on always.


## Example Usage

```typescript
import { IncludeDetails } from "@lukehagar/plexjs/sdk/models/operations";

let value: IncludeDetails = IncludeDetails.One;
```

## Values

| Name   | Value  |
| ------ | ------ |
| `Zero` | 0      |
| `One`  | 1      |