# GetSearchAllLibrariesShowOrdering

Setting that indicates the episode ordering for the show 
None = Library default, 
tmdbAiring = The Movie Database (Aired), 
aired = TheTVDB (Aired), 
dvd = TheTVDB (DVD), 
absolute = TheTVDB (Absolute)).


## Example Usage

```typescript
import { GetSearchAllLibrariesShowOrdering } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesShowOrdering =
  GetSearchAllLibrariesShowOrdering.Dvd;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `None`       | None         |
| `TmdbAiring` | tmdbAiring   |
| `Aired`      | aired        |
| `Dvd`        | dvd          |
| `Absolute`   | absolute     |