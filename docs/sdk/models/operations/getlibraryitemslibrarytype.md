# GetLibraryItemsLibraryType

The type of media content


## Example Usage

```typescript
import { GetLibraryItemsLibraryType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsLibraryType = GetLibraryItemsLibraryType.Movie;
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