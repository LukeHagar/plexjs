# GetLibraryItemsMediaGuid

## Example Usage

```typescript
import { GetLibraryItemsMediaGuid } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsMediaGuid = {
  id: "imdb://tt13015952",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Can be one of the following formats:<br/>imdb://tt13015952, tmdb://2434012, tvdb://7945991<br/> | imdb://tt13015952                                                                       |