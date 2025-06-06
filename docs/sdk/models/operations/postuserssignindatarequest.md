# PostUsersSignInDataRequest

## Example Usage

```typescript
import { PostUsersSignInDataRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: PostUsersSignInDataRequest = {
  clientID: "3381b62b-9ab7-4e37-827b-203e9809eb58",
  clientName: "Plex for Roku",
  deviceNickname: "Roku 3",
  clientVersion: "2.4.1",
  platform: "Roku",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `clientID`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | An opaque identifier unique to the client (UUID, serial number, or other unique device ID)                    | 3381b62b-9ab7-4e37-827b-203e9809eb58                                                                          |
| `clientName`                                                                                                  | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The name of the client application. (Plex Web, Plex Media Server, etc.)                                       | Plex for Roku                                                                                                 |
| `deviceNickname`                                                                                              | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | A relatively friendly name for the client device                                                              | Roku 3                                                                                                        |
| `clientVersion`                                                                                               | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The version of the client application.                                                                        | 2.4.1                                                                                                         |
| `platform`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The platform of the client application.                                                                       | Roku                                                                                                          |
| `requestBody`                                                                                                 | [operations.PostUsersSignInDataRequestBody](../../../sdk/models/operations/postuserssignindatarequestbody.md) | :heavy_minus_sign:                                                                                            | Login credentials                                                                                             |                                                                                                               |