# GetDownloadQueueStatus

The state of this queue
  - deciding: At least one item is still being decided
  - waiting: At least one item is waiting for transcode and none are currently transcoding
  - processing: At least one item is being transcoded
  - done: All items are available (or potentially expired)
  - error: At least one item has encountered an error


## Example Usage

```typescript
import { GetDownloadQueueStatus } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetDownloadQueueStatus = GetDownloadQueueStatus.Done;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `Deciding`   | deciding     |
| `Waiting`    | waiting      |
| `Processing` | processing   |
| `Done`       | done         |
| `Error`      | error        |