# GetUsersServer

## Example Usage

```typescript
import { GetUsersServer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUsersServer = {
  id: 907759180,
  serverId: 9999999,
  machineIdentifier: "fbb8aa6be6e0c997c6268bc2b4431c8807f70a3",
  name: "ConnectedUserFlix",
  lastSeenAt: 1556281940,
  numLibraries: 16,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `id`                                                                      | *number*                                                                  | :heavy_check_mark:                                                        | Unique ID of the server of the connected user                             | 907759180                                                                 |
| `serverId`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | ID of the actual Plex server.                                             | 9999999                                                                   |
| `machineIdentifier`                                                       | *string*                                                                  | :heavy_check_mark:                                                        | Machine identifier of the Plex server.                                    | fbb8aa6be6e0c997c6268bc2b4431c8807f70a3                                   |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Name of the Plex server of the connected user.                            | ConnectedUserFlix                                                         |
| `lastSeenAt`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       | 1556281940                                                                |
| `numLibraries`                                                            | *number*                                                                  | :heavy_check_mark:                                                        | Number of libraries in the server this user has access to.                | 16                                                                        |
| `allLibraries`                                                            | [operations.AllLibraries](../../../sdk/models/operations/alllibraries.md) | :heavy_minus_sign:                                                        | N/A                                                                       | 1                                                                         |
| `owned`                                                                   | [operations.Owned](../../../sdk/models/operations/owned.md)               | :heavy_minus_sign:                                                        | N/A                                                                       | 1                                                                         |
| `pending`                                                                 | [operations.Pending](../../../sdk/models/operations/pending.md)           | :heavy_minus_sign:                                                        | N/A                                                                       | 1                                                                         |