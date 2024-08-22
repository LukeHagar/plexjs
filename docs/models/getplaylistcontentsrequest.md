# GetPlaylistContentsRequest

## Example Usage

```typescript
import { GetPlaylistContentsRequest } from "@lukehagar/plexjs";

let value: GetPlaylistContentsRequest = {
    playlistID: 9883.74,
    type: 9589.5,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `playlistID`                            | *number*                                | :heavy_check_mark:                      | the ID of the playlist                  |
| `type`                                  | *number*                                | :heavy_check_mark:                      | the metadata type of the item to return |