# Friend

## Example Usage

```typescript
import { Friend, Status } from "@lukehagar/plexjs/sdk/models/operations";

let value: Friend = {
  email: "username@email.com",
  friendlyName: "exampleUser",
  home: true,
  id: 0,
  restricted: false,
  sharedServers: [
    {},
  ],
  sharedSources: [
    {},
  ],
  status: Status.Accepted,
  thumb: "https://plex.tv/users/7d1916e0d8f6e76b/avatar?c=1694481578",
  title: "username123",
  username: "username123",
  uuid: "7d1916e0d8f6e76b",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `email`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | The account email address                                                     | username@email.com                                                            |
| `friendlyName`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | The account full name                                                         | exampleUser                                                                   |
| `home`                                                                        | *boolean*                                                                     | :heavy_check_mark:                                                            | If the account is a Plex Home user                                            |                                                                               |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | The Plex account ID                                                           |                                                                               |
| `restricted`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | If the account is a Plex Home managed user                                    |                                                                               |
| `sharedServers`                                                               | [operations.SharedServers](../../../sdk/models/operations/sharedservers.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `sharedSources`                                                               | [operations.SharedSources](../../../sdk/models/operations/sharedsources.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `status`                                                                      | [operations.Status](../../../sdk/models/operations/status.md)                 | :heavy_check_mark:                                                            | Current friend request status                                                 | accepted                                                                      |
| `thumb`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | URL of the account thumbnail                                                  | https://plex.tv/users/7d1916e0d8f6e76b/avatar?c=1694481578                    |
| `title`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | The title of the account (username or friendly name)                          | username123                                                                   |
| `username`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The account username                                                          | username123                                                                   |
| `uuid`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The account Universally Unique Identifier (UUID)                              | 7d1916e0d8f6e76b                                                              |