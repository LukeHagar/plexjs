# Server

## Example Usage

```typescript
import { AllLibraries, Owned, Pending, Server } from "@parke.dev/plexjs/models/operations";

let value: Server = {
  allLibraries: AllLibraries.Enable,
  id: 907759180,
  lastSeenAt: 1556281940,
  machineIdentifier: "fbb8aa6be6e0c997c6268bc2b4431c8807f70a3",
  name: "ConnectedUserFlix",
  numLibraries: 16,
  owned: Owned.Enable,
  pending: Pending.Enable,
  serverId: 9999999,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `allLibraries`                                                     | [operations.AllLibraries](../../models/operations/alllibraries.md) | :heavy_minus_sign:                                                 | N/A                                                                | 1                                                                  |
| `id`                                                               | *number*                                                           | :heavy_check_mark:                                                 | Unique ID of the server of the connected user                      | 907759180                                                          |
| `lastSeenAt`                                                       | *number*                                                           | :heavy_check_mark:                                                 | Unix epoch datetime in seconds                                     | 1556281940                                                         |
| `machineIdentifier`                                                | *string*                                                           | :heavy_check_mark:                                                 | Machine identifier of the Plex server.                             | fbb8aa6be6e0c997c6268bc2b4431c8807f70a3                            |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Name of the Plex server of the connected user.                     | ConnectedUserFlix                                                  |
| `numLibraries`                                                     | *number*                                                           | :heavy_check_mark:                                                 | Number of libraries in the server this user has access to.         | 16                                                                 |
| `owned`                                                            | [operations.Owned](../../models/operations/owned.md)               | :heavy_minus_sign:                                                 | N/A                                                                | 1                                                                  |
| `pending`                                                          | [operations.Pending](../../models/operations/pending.md)           | :heavy_minus_sign:                                                 | N/A                                                                | 1                                                                  |
| `serverId`                                                         | *number*                                                           | :heavy_check_mark:                                                 | ID of the actual Plex server.                                      | 9999999                                                            |