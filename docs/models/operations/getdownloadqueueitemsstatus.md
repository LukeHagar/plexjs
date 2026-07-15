# GetDownloadQueueItemsStatus

The state of the item:
  - deciding: The item decision is pending
  - waiting: The item is waiting for transcode
  - processing: The item is being transcoded
  - available: The item is available for download
  - error: The item encountered an error in the decision or transcode
  - expired: The transcoded item has timed out and is no longer available


## Example Usage

```typescript
import { GetDownloadQueueItemsStatus } from "@parke.dev/plexjs/models/operations";

let value: GetDownloadQueueItemsStatus = GetDownloadQueueItemsStatus.Processing;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Deciding`             | deciding               |
| `Waiting`              | waiting                |
| `Processing`           | processing             |
| `Available`            | available              |
| `Error`                | error                  |
| `Expired`              | expired                |
| -                      | `Unrecognized<string>` |