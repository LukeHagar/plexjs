# GetUpdatesStatusResponse

Status of the PMS updater.

## Example Usage

```typescript
import { GetUpdatesStatusResponse } from "@parke.dev/plexjs/models/operations";
import { ReleaseState } from "@parke.dev/plexjs/models/shared";

let value: GetUpdatesStatusResponse = {
  checkedAt: 1,
  downloadURL: "string value",
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
  status: 1,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                       | [operations.GetUpdatesStatusMediaContainer](../../models/operations/getupdatesstatusmediacontainer.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `checkedAt`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Timestamp of the last update check.                                                                    |
| `downloadURL`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The URL where the update is available.                                                                 |
| `release`                                                                                              | [shared.Release](../../models/shared/release.md)[]                                                     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `status`                                                                                               | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The current error code (0 means no error).                                                             |