# GetRecentlyAddedHubsType

The type of media content


## Example Usage

```typescript
import { GetRecentlyAddedHubsType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedHubsType = GetRecentlyAddedHubsType.Movie;
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