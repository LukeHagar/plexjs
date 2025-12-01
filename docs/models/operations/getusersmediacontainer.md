# GetUsersMediaContainer

Container holding user and server details.

## Example Usage

```typescript
import { GetUsersMediaContainer } from "@lukehagar/plexjs/models/operations";

let value: GetUsersMediaContainer = {
  friendlyName: "myPlex",
  identifier: "com.plexapp.plugins.myplex",
  machineIdentifier: "3dff4c4da3b1229a649aa574a9e2b419a684a20e",
  totalSize: 30,
  size: 30,
  user: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `friendlyName`                                       | *string*                                             | :heavy_check_mark:                                   | The friendly name of the Plex instance.              | myPlex                                               |
| `identifier`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | com.plexapp.plugins.myplex                           |
| `machineIdentifier`                                  | *string*                                             | :heavy_check_mark:                                   | Unique Machine identifier of the Plex server.        | 3dff4c4da3b1229a649aa574a9e2b419a684a20e             |
| `totalSize`                                          | *number*                                             | :heavy_check_mark:                                   | Total number of users.                               | 30                                                   |
| `size`                                               | *number*                                             | :heavy_check_mark:                                   | Number of users in the current response.             | 30                                                   |
| `user`                                               | [operations.User](../../models/operations/user.md)[] | :heavy_check_mark:                                   | List of users with access to the Plex server.        |                                                      |