# User

## Example Usage

```typescript
import {
  AllLibraries,
  AllowCameraUpload,
  AllowChannels,
  AllowSubtitleAdmin,
  AllowSync,
  AllowTuners,
  Home,
  Owned,
  Pending,
  Protected,
  Restricted,
  User,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: User = {
  id: 22526914,
  title: "Plex User",
  username: "zgfuc7krcqfimrmb9lsl5j",
  email: "zgfuc7krcqfimrmb9lsl5j@protonmail.com",
  recommendationsPlaylistId: "",
  thumb: "https://plex.tv/users/3346028014e93acd/avatar?c=1731605021",
  protected: Protected.Enable,
  home: Home.Enable,
  allowTuners: AllowTuners.Enable,
  allowSync: AllowSync.Enable,
  allowCameraUpload: AllowCameraUpload.Enable,
  allowChannels: AllowChannels.Enable,
  allowSubtitleAdmin: AllowSubtitleAdmin.Enable,
  filterAll: "",
  filterMovies: "",
  filterMusic: "",
  filterPhotos: "",
  filterTelevision: "",
  restricted: Restricted.Enable,
  server: [
    {
      id: 907759180,
      serverId: 9999999,
      machineIdentifier: "fbb8aa6be6e0c997c6268bc2b4431c8807f70a3",
      name: "ConnectedUserFlix",
      lastSeenAt: 1556281940,
      numLibraries: 16,
      allLibraries: AllLibraries.Enable,
      owned: Owned.Enable,
      pending: Pending.Enable,
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *number*                                                                              | :heavy_check_mark:                                                                    | User's unique ID.                                                                     | 22526914                                                                              |
| `title`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | User's display name.                                                                  | Plex User                                                                             |
| `username`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | User's username.                                                                      | zgfuc7krcqfimrmb9lsl5j                                                                |
| `email`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | User's email address.                                                                 | zgfuc7krcqfimrmb9lsl5j@protonmail.com                                                 |
| `recommendationsPlaylistId`                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | ID of the user's recommendation playlist.                                             |                                                                                       |
| `thumb`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | URL to the user's avatar image.                                                       | https://plex.tv/users/3346028014e93acd/avatar?c=1731605021                            |
| `protected`                                                                           | [operations.Protected](../../../sdk/models/operations/protected.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `home`                                                                                | [operations.Home](../../../sdk/models/operations/home.md)                             | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `allowTuners`                                                                         | [operations.AllowTuners](../../../sdk/models/operations/allowtuners.md)               | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `allowSync`                                                                           | [operations.AllowSync](../../../sdk/models/operations/allowsync.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `allowCameraUpload`                                                                   | [operations.AllowCameraUpload](../../../sdk/models/operations/allowcameraupload.md)   | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `allowChannels`                                                                       | [operations.AllowChannels](../../../sdk/models/operations/allowchannels.md)           | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `allowSubtitleAdmin`                                                                  | [operations.AllowSubtitleAdmin](../../../sdk/models/operations/allowsubtitleadmin.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `filterAll`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | Filters applied for all content.                                                      |                                                                                       |
| `filterMovies`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | Filters applied for movies.                                                           |                                                                                       |
| `filterMusic`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Filters applied for music.                                                            |                                                                                       |
| `filterPhotos`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | Filters applied for photos.                                                           |                                                                                       |
| `filterTelevision`                                                                    | *string*                                                                              | :heavy_minus_sign:                                                                    | Filters applied for television.                                                       |                                                                                       |
| `restricted`                                                                          | [operations.Restricted](../../../sdk/models/operations/restricted.md)                 | :heavy_minus_sign:                                                                    | N/A                                                                                   | 1                                                                                     |
| `server`                                                                              | [operations.GetUsersServer](../../../sdk/models/operations/getusersserver.md)[]       | :heavy_check_mark:                                                                    | List of servers owned by the user.                                                    |                                                                                       |