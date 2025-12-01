# ListDownloadQueueItemsStatus

The state of the item:
  - deciding: The item decision is pending
  - waiting: The item is waiting for transcode
  - processing: The item is being transcoded
  - available: The item is available for download
  - error: The item encountered an error in the decision or transcode
  - expired: The transcoded item has timed out and is no longer available


## Example Usage

```typescript
import { ListDownloadQueueItemsStatus } from "@lukehagar/plexjs/models/operations";

let value: ListDownloadQueueItemsStatus =
  ListDownloadQueueItemsStatus.Processing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Deciding`             | deciding               |
| `Waiting`              | waiting                |
| `Processing`           | processing             |
| `Available`            | available              |
| `Error`                | error                  |
| `Expired`              | expired                |
| -                      | `Unrecognized<string>` |