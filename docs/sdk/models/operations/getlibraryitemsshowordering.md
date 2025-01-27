# GetLibraryItemsShowOrdering

Setting that indicates the episode ordering for the show.
None = Library default,
tmdbAiring = The Movie Database (Aired),
aired = TheTVDB (Aired),
dvd = TheTVDB (DVD),
absolute = TheTVDB (Absolute)).


## Example Usage

```typescript
import { GetLibraryItemsShowOrdering } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsShowOrdering =
  GetLibraryItemsShowOrdering.TvdbAbsolute;
```

## Values

| Name           | Value          |
| -------------- | -------------- |
| `None`         | None           |
| `TmdbAiring`   | tmdbAiring     |
| `TvdbAired`    | aired          |
| `TvdbDvd`      | dvd            |
| `TvdbAbsolute` | absolute       |