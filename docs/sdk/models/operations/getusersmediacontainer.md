# GetUsersMediaContainer

Container holding user and server details.

## Example Usage

```typescript
import { GetUsersMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUsersMediaContainer = {
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
      filterAll: "",
      filterMovies: "",
      filterMusic: "",
      filterPhotos: "",
      filterTelevision: "",
      server: [
        {
          id: 907759180,
          serverId: 9999999,
          machineIdentifier: "fbb8aa6be6e0c997c6268bc2b4431c8807f70a3",
          name: "ConnectedUserFlix",
          lastSeenAt: 1556281940,
          numLibraries: 16,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `friendlyName`                                              | *string*                                                    | :heavy_check_mark:                                          | The friendly name of the Plex instance.                     | myPlex                                                      |
| `identifier`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         | com.plexapp.plugins.myplex                                  |
| `machineIdentifier`                                         | *string*                                                    | :heavy_check_mark:                                          | Unique Machine identifier of the Plex server.               | 3dff4c4da3b1229a649aa574a9e2b419a684a20e                    |
| `totalSize`                                                 | *number*                                                    | :heavy_check_mark:                                          | Total number of users.                                      | 30                                                          |
| `size`                                                      | *number*                                                    | :heavy_check_mark:                                          | Number of users in the current response.                    | 30                                                          |
| `user`                                                      | [operations.User](../../../sdk/models/operations/user.md)[] | :heavy_check_mark:                                          | List of users with access to the Plex server.               |                                                             |