# GetAllMediaLibraryGuids

## Example Usage

```typescript
import { GetAllMediaLibraryGuids } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllMediaLibraryGuids = {
  id: "tvdb://2337",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The unique identifier for the Guid. Can be imdb://tt0286347, tmdb://1763, tvdb://2337<br/> | tvdb://2337                                                                            |