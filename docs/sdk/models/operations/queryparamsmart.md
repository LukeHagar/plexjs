# QueryParamSmart

type of playlists to return (default is all).

## Example Usage

```typescript
import { QueryParamSmart } from "@lukehagar/plexjs/sdk/models/operations";

let value: QueryParamSmart = QueryParamSmart.Zero;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Zero`                 | 0                      |
| `One`                  | 1                      |
| -                      | `Unrecognized<number>` |