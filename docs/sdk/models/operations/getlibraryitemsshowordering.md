# GetLibraryItemsShowOrdering

Setting that indicates the episode ordering for the show 
None = Library default, 
tmdbAiring = The Movie Database (Aired), 
aired = TheTVDB (Aired), 
dvd = TheTVDB (DVD), 
absolute = TheTVDB (Absolute)).


## Example Usage

```typescript
import { GetLibraryItemsShowOrdering } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsShowOrdering = GetLibraryItemsShowOrdering.Dvd;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `None`       | None         |
| `TmdbAiring` | tmdbAiring   |
| `Aired`      | aired        |
| `Dvd`        | dvd          |
| `Absolute`   | absolute     |