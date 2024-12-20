# GetSearchAllLibrariesShowOrdering

Setting that indicates the episode ordering for the show
None = Library default,
tmdbAiring = The Movie Database (Aired),
tvdbAiring = TheTVDB (Aired),
tvdbDvd = TheTVDB (DVD),
tvdbAbsolute = TheTVDB (Absolute)).


## Example Usage

```typescript
import { GetSearchAllLibrariesShowOrdering } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesShowOrdering =
  GetSearchAllLibrariesShowOrdering.TvdbDvd;
```

## Values

| Name           | Value          |
| -------------- | -------------- |
| `None`         | None           |
| `TmdbAiring`   | tmdbAiring     |
| `TvdbAiring`   | tvdbAiring     |
| `TvdbDvd`      | tvdbDvd        |
| `TvdbAbsolute` | tvdbAbsolute   |