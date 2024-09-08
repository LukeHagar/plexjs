# Player

## Example Usage

```typescript
import { Player } from "@lukehagar/plexjs/sdk/models/operations";

let value: Player = {
    address: "10.10.10.171",
    machineIdentifier: "3tsdzir85m2onc3qyr255aq1",
    model: "standalone",
    platform: "windows",
    platformVersion: "10.0.22621",
    product: "Plex for Windows",
    profile: "Plex Desktop",
    remotePublicAddress: "68.248.140.20",
    state: "playing",
    title: "DESKTOP-BL80MTD",
    version: "1.85.0.4071-21128b56",
    local: true,
    relayed: false,
    secure: true,
    userID: 1,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `address`                | *string*                 | :heavy_minus_sign:       | N/A                      | 10.10.10.171             |
| `machineIdentifier`      | *string*                 | :heavy_minus_sign:       | N/A                      | 3tsdzir85m2onc3qyr255aq1 |
| `model`                  | *string*                 | :heavy_minus_sign:       | N/A                      | standalone               |
| `platform`               | *string*                 | :heavy_minus_sign:       | N/A                      | windows                  |
| `platformVersion`        | *string*                 | :heavy_minus_sign:       | N/A                      | 10.0.22621               |
| `product`                | *string*                 | :heavy_minus_sign:       | N/A                      | Plex for Windows         |
| `profile`                | *string*                 | :heavy_minus_sign:       | N/A                      | Plex Desktop             |
| `remotePublicAddress`    | *string*                 | :heavy_minus_sign:       | N/A                      | 68.248.140.20            |
| `state`                  | *string*                 | :heavy_minus_sign:       | N/A                      | playing                  |
| `title`                  | *string*                 | :heavy_minus_sign:       | N/A                      | DESKTOP-BL80MTD          |
| `version`                | *string*                 | :heavy_minus_sign:       | N/A                      | 1.85.0.4071-21128b56     |
| `local`                  | *boolean*                | :heavy_minus_sign:       | N/A                      | true                     |
| `relayed`                | *boolean*                | :heavy_minus_sign:       | N/A                      | false                    |
| `secure`                 | *boolean*                | :heavy_minus_sign:       | N/A                      | true                     |
| `userID`                 | *number*                 | :heavy_minus_sign:       | N/A                      | 1                        |