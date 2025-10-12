# Player

Information about the player being used for playback

## Example Usage

```typescript
import { Player } from "@lukehagar/plexjs/sdk/models/shared";

let value: Player = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `title`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The title of the client                                     |
| `address`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The remote address                                          |
| `local`                                                     | *boolean*                                                   | :heavy_minus_sign:                                          | Indicating if the client is playing from the local LAN      |
| `machineIdentifier`                                         | *string*                                                    | :heavy_minus_sign:                                          | The identifier of the client                                |
| `model`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The model of the client                                     |
| `platform`                                                  | *string*                                                    | :heavy_minus_sign:                                          | The platform of the client                                  |
| `platformVersion`                                           | *string*                                                    | :heavy_minus_sign:                                          | The platformVersion of the client                           |
| `product`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The product name of the client                              |
| `relayed`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | Indicating if the client is playing over a relay connection |
| `remotePublicAddress`                                       | *string*                                                    | :heavy_minus_sign:                                          | The client's public address                                 |
| `secure`                                                    | *boolean*                                                   | :heavy_minus_sign:                                          | Indicating if the client is playing over HTTPS              |
| `state`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The client's last reported state                            |
| `userID`                                                    | *number*                                                    | :heavy_minus_sign:                                          | The id of the user                                          |
| `vendor`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The vendor of the client                                    |
| `version`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The version of the client                                   |