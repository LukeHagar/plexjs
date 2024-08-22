# GetPlaylistsRequest

## Example Usage

```typescript
import { GetPlaylistsRequest } from "@lukehagar/plexjs";

let value: GetPlaylistsRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `playlistType`                                         | [models.PlaylistType](../models/playlisttype.md)       | :heavy_minus_sign:                                     | limit to a type of playlist.                           |
| `smart`                                                | [models.QueryParamSmart](../models/queryparamsmart.md) | :heavy_minus_sign:                                     | type of playlists to return (default is all).          |