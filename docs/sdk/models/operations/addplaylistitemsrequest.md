# AddPlaylistItemsRequest

## Example Usage

```typescript
import { AddPlaylistItemsRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: AddPlaylistItemsRequest = {
  playlistId: 174404,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `xPlexClientIdentifier`                                        | *string*                                                       | :heavy_minus_sign:                                             | An opaque identifier unique to the client                      | abc123                                                         |
| `xPlexProduct`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The name of the client product                                 | Plex for Roku                                                  |
| `xPlexVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | The version of the client application                          | 2.4.1                                                          |
| `xPlexPlatform`                                                | *string*                                                       | :heavy_minus_sign:                                             | The platform of the client                                     | Roku                                                           |
| `xPlexPlatformVersion`                                         | *string*                                                       | :heavy_minus_sign:                                             | The version of the platform                                    | 4.3 build 1057                                                 |
| `xPlexDevice`                                                  | *string*                                                       | :heavy_minus_sign:                                             | A relatively friendly name for the client device               | Roku 3                                                         |
| `xPlexModel`                                                   | *string*                                                       | :heavy_minus_sign:                                             | A potentially less friendly identifier for the device model    | 4200X                                                          |
| `xPlexDeviceVendor`                                            | *string*                                                       | :heavy_minus_sign:                                             | The device vendor                                              | Roku                                                           |
| `xPlexDeviceName`                                              | *string*                                                       | :heavy_minus_sign:                                             | A friendly name for the client                                 | Living Room TV                                                 |
| `xPlexMarketplace`                                             | *string*                                                       | :heavy_minus_sign:                                             | The marketplace on which the client application is distributed | googlePlay                                                     |
| `playlistId`                                                   | *number*                                                       | :heavy_check_mark:                                             | The ID of the playlist                                         |                                                                |
| `uri`                                                          | *string*                                                       | :heavy_minus_sign:                                             | The content URI for the playlist.                              |                                                                |
| `playQueueID`                                                  | *number*                                                       | :heavy_minus_sign:                                             | The play queue to add to a playlist.                           |                                                                |