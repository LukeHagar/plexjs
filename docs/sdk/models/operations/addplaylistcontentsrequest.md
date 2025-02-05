# AddPlaylistContentsRequest

## Example Usage

```typescript
import { AddPlaylistContentsRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddPlaylistContentsRequest = {
  playlistID: 1856.36,
  uri: "server://12345/com.plexapp.plugins.library/library/metadata/1",
  playQueueID: 123,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `playlistID`                                                  | *number*                                                      | :heavy_check_mark:                                            | the ID of the playlist                                        |                                                               |
| `uri`                                                         | *string*                                                      | :heavy_check_mark:                                            | the content URI for the playlist                              | server://12345/com.plexapp.plugins.library/library/metadata/1 |
| `playQueueID`                                                 | *number*                                                      | :heavy_minus_sign:                                            | the play queue to add to a playlist                           | 123                                                           |