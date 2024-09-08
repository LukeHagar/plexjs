# GetTopWatchedContentQueryParamType

The type of media to retrieve.
1 = movie
2 = show
3 = season
4 = episode
E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries


## Example Usage

```typescript
import { GetTopWatchedContentQueryParamType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTopWatchedContentQueryParamType = GetTopWatchedContentQueryParamType.Two;
```

## Values

| Name    | Value   |
| ------- | ------- |
| `One`   | 1       |
| `Two`   | 2       |
| `Three` | 3       |
| `Four`  | 4       |