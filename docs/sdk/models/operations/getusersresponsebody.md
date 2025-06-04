# GetUsersResponseBody

Successful response with media container data in XML

## Example Usage

```typescript
import {
  AllLibraries,
  AllowCameraUpload,
  AllowChannels,
  AllowSubtitleAdmin,
  AllowSync,
  AllowTuners,
  GetUsersResponseBody,
  Home,
  Owned,
  Pending,
  Protected,
  Restricted,
} from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUsersResponseBody = {
  mediaContainer: {
    friendlyName: "myPlex",
    identifier: "com.plexapp.plugins.myplex",
    machineIdentifier: "3dff4c4da3b1229a649aa574a9e2b419a684a20e",
    totalSize: 30,
    size: 30,
    user: [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                              | [operations.GetUsersMediaContainer](../../../sdk/models/operations/getusersmediacontainer.md) | :heavy_minus_sign:                                                                            | Container holding user and server details.                                                    |