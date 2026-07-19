# GetUpdatesStatusMediaContainer

## Example Usage

```typescript
import { GetUpdatesStatusMediaContainer } from "@parke.dev/plexjs/models/operations";
import { ReleaseState } from "@parke.dev/plexjs/models/shared";

let value: GetUpdatesStatusMediaContainer = {
  release: [
    {
      added: "string value",
      downloadURL: "string value",
      fixed: "string value",
      key: "string value",
      state: ReleaseState.Available,
      version: "string value",
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `autoUpdateVersion`                                                                                         | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The version of the updater (currently `1`)                                                                  |
| `canInstall`                                                                                                | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Indicates whether this install can be updated through these endpoints (typically only on MacOS and Windows) |
| `checkedAt`                                                                                                 | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The last time a check for updates was performed                                                             |
| `downloadURL`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The URL where the update is available                                                                       |
| `release`                                                                                                   | [shared.Release](../../models/shared/release.md)[]                                                          | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The current error code (`0` means no error)                                                                 |