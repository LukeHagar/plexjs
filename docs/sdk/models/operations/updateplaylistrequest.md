# UpdatePlaylistRequest

## Example Usage

```typescript
import { UpdatePlaylistRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: UpdatePlaylistRequest = {
  playlistID: 3172.02,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `playlistID`                        | *number*                            | :heavy_check_mark:                  | the ID of the playlist              |
| `title`                             | *string*                            | :heavy_minus_sign:                  | name of the playlist                |
| `summary`                           | *string*                            | :heavy_minus_sign:                  | summary description of the playlist |