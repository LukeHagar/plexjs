# GetUsersUser

## Example Usage

```typescript
import {
  AllLibraries,
  AllowCameraUpload,
  AllowChannels,
  AllowSubtitleAdmin,
  AllowTuners,
  GetUsersAllowSync,
  GetUsersUser,
  Home,
  Owned,
  Pending,
  Protected,
  Restricted,
} from "@parke.dev/plexjs/models/operations";

let value: GetUsersUser = {
  title: "Plex User",
  allowCameraUpload: AllowCameraUpload.Enable,
  allowChannels: AllowChannels.Enable,
  allowSubtitleAdmin: AllowSubtitleAdmin.Enable,
  allowSync: GetUsersAllowSync.Enable,
  allowTuners: AllowTuners.Enable,
  email: "zgfuc7krcqfimrmb9lsl5j@protonmail.com",
  filterAll: "",
  filterMovies: "",
  filterMusic: "",
  filterPhotos: "",
  filterTelevision: "",
  home: Home.Enable,
  id: 22526914,
  protected: Protected.Enable,
  recommendationsPlaylistId: "",
  restricted: Restricted.Enable,
  server: [
    {
      allLibraries: AllLibraries.Enable,
      id: 907759180,
      lastSeenAt: 1556281940,
      machineIdentifier: "fbb8aa6be6e0c997c6268bc2b4431c8807f70a3",
      name: "ConnectedUserFlix",
      numLibraries: 16,
      owned: Owned.Enable,
      pending: Pending.Enable,
      serverId: 9999999,
    },
  ],
  thumb: "https://plex.tv/users/3346028014e93acd/avatar?c=1731605021",
  username: "zgfuc7krcqfimrmb9lsl5j",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `title`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | User's display name.                                                           | Plex User                                                                      |
| `allowCameraUpload`                                                            | [operations.AllowCameraUpload](../../models/operations/allowcameraupload.md)   | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `allowChannels`                                                                | [operations.AllowChannels](../../models/operations/allowchannels.md)           | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `allowSubtitleAdmin`                                                           | [operations.AllowSubtitleAdmin](../../models/operations/allowsubtitleadmin.md) | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `allowSync`                                                                    | [operations.GetUsersAllowSync](../../models/operations/getusersallowsync.md)   | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `allowTuners`                                                                  | [operations.AllowTuners](../../models/operations/allowtuners.md)               | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `email`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | User's email address.                                                          | zgfuc7krcqfimrmb9lsl5j@protonmail.com                                          |
| `filterAll`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Filters applied for all content.                                               |                                                                                |
| `filterMovies`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | Filters applied for movies.                                                    |                                                                                |
| `filterMusic`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Filters applied for music.                                                     |                                                                                |
| `filterPhotos`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | Filters applied for photos.                                                    |                                                                                |
| `filterTelevision`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | Filters applied for television.                                                |                                                                                |
| `home`                                                                         | [operations.Home](../../models/operations/home.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | User's unique ID.                                                              | 22526914                                                                       |
| `protected`                                                                    | [operations.Protected](../../models/operations/protected.md)                   | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `recommendationsPlaylistId`                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | ID of the user's recommendation playlist.                                      |                                                                                |
| `restricted`                                                                   | [operations.Restricted](../../models/operations/restricted.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            | 1                                                                              |
| `server`                                                                       | [operations.Server](../../models/operations/server.md)[]                       | :heavy_check_mark:                                                             | List of servers owned by the user.                                             |                                                                                |
| `thumb`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | URL to the user's avatar image.                                                | https://plex.tv/users/3346028014e93acd/avatar?c=1731605021                     |
| `username`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | User's username.                                                               | zgfuc7krcqfimrmb9lsl5j                                                         |