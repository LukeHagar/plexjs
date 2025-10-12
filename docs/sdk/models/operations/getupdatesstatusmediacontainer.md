# GetUpdatesStatusMediaContainer

## Example Usage

```typescript
import { GetUpdatesStatusMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUpdatesStatusMediaContainer = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `autoUpdateVersion`                                                                                         | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The version of the updater (currently `1`)                                                                  |
| `canInstall`                                                                                                | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Indicates whether this install can be updated through these endpoints (typically only on MacOS and Windows) |
| `checkedAt`                                                                                                 | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The last time a check for updates was performed                                                             |
| `downloadURL`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The URL where the update is available                                                                       |
| `release`                                                                                                   | [operations.Release](../../../sdk/models/operations/release.md)[]                                           | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The current error code (`0` means no error)                                                                 |