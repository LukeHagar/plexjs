# FlattenSeasons

Setting that indicates if seasons are set to hidden for the show. (-1 = Library default, 0 = Hide, 1 = Show).

## Example Usage

```typescript
import { FlattenSeasons } from "@lukehagar/plexjs/sdk/models/operations";

let value: FlattenSeasons = FlattenSeasons.Show;
```

## Values

| Name             | Value            |
| ---------------- | ---------------- |
| `LibraryDefault` | -1               |
| `Hide`           | 0                |
| `Show`           | 1                |