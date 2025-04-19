# GetAllLibrariesType

The library type

## Example Usage

```typescript
import { GetAllLibrariesType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllLibrariesType = GetAllLibrariesType.Movie;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Movie`                | movie                  |
| `TvShow`               | show                   |
| `Season`               | season                 |
| `Episode`              | episode                |
| `Artist`               | artist                 |
| `Album`                | album                  |
| -                      | `Unrecognized<string>` |