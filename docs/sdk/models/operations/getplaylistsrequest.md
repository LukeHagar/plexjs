# GetPlaylistsRequest

## Example Usage

```typescript
import { GetPlaylistsRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistsRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `playlistType`                                                                  | [operations.PlaylistType](../../../sdk/models/operations/playlisttype.md)       | :heavy_minus_sign:                                                              | limit to a type of playlist.                                                    |
| `smart`                                                                         | [operations.QueryParamSmart](../../../sdk/models/operations/queryparamsmart.md) | :heavy_minus_sign:                                                              | type of playlists to return (default is all).                                   |