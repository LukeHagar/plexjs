# UpdatePlaylistRequest

## Example Usage

```typescript
import { UpdatePlaylistRequest } from "@lukehagar/plexjs";

let value: UpdatePlaylistRequest = {
    playlistID: 4386.01,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `playlistID`                        | *number*                            | :heavy_check_mark:                  | the ID of the playlist              |
| `title`                             | *string*                            | :heavy_minus_sign:                  | name of the playlist                |
| `summary`                           | *string*                            | :heavy_minus_sign:                  | summary description of the playlist |