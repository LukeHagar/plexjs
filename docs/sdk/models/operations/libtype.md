# Libtype

The type of library to filter. Can be "movie" or "show", or all if not present.


## Example Usage

```typescript
import { Libtype } from "@lukehagar/plexjs/sdk/models/operations";

let value: Libtype = Libtype.Show;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Movie`                | movie                  |
| `Show`                 | show                   |
| -                      | `Unrecognized<string>` |