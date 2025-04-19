# GetSearchAllLibrariesShowOrdering

Setting that indicates the episode ordering for the show.
None = Library default,
tmdbAiring = The Movie Database (Aired),
aired = TheTVDB (Aired),
dvd = TheTVDB (DVD),
absolute = TheTVDB (Absolute)).


## Example Usage

```typescript
import { GetSearchAllLibrariesShowOrdering } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesShowOrdering =
  GetSearchAllLibrariesShowOrdering.TvdbAbsolute;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `None`                 | None                   |
| `TmdbAiring`           | tmdbAiring             |
| `TvdbAired`            | aired                  |
| `TvdbDvd`              | dvd                    |
| `TvdbAbsolute`         | absolute               |
| -                      | `Unrecognized<string>` |