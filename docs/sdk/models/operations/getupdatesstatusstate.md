# GetUpdatesStatusState

The status of this update.

- available - This release is available
- downloading - This release is downloading
- downloaded - This release has been downloaded
- installing - This release is installing
- tonight - This release will be installed tonight
- skipped - This release has been skipped
- error - This release has an error
- notify - This release is only notifying it is available (typically because it cannot be installed on this setup)
- done - This release is complete


## Example Usage

```typescript
import { GetUpdatesStatusState } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetUpdatesStatusState = GetUpdatesStatusState.Done;
```

## Values

| Name          | Value         |
| ------------- | ------------- |
| `Available`   | available     |
| `Downloading` | downloading   |
| `Downloaded`  | downloaded    |
| `Installing`  | installing    |
| `Tonight`     | tonight       |
| `Skipped`     | skipped       |
| `Error`       | error         |
| `Notify`      | notify        |
| `Done`        | done          |