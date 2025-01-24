# GetLibraryItemsEpisodeSort

Setting that indicates how episodes are sorted for the show. (-1 = Library default, 0 = Oldest first, 1 = Newest first).

## Example Usage

```typescript
import { GetLibraryItemsEpisodeSort } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsEpisodeSort = GetLibraryItemsEpisodeSort.OldestFirst;
```

## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `LibraryDefault` | -1               |
| `OldestFirst`    | 0                |
| `NewestFirst`    | 1                |