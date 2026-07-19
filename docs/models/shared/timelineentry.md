# TimelineEntry

A timeline update entry delivered via WebSocket or EventSource

## Example Usage

```typescript
import { TimelineEntry } from "@parke.dev/plexjs/models/shared";

let value: TimelineEntry = {
  title: "string value",
  type: 1,
  itemID: 1,
  metadataState: "string value",
  playQueueItemID: 1,
  state: 1,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `type`             | *number*           | :heavy_minus_sign: | N/A                |
| `itemID`           | *number*           | :heavy_minus_sign: | N/A                |
| `metadataState`    | *string*           | :heavy_minus_sign: | N/A                |
| `playQueueItemID`  | *number*           | :heavy_minus_sign: | N/A                |
| `state`            | *number*           | :heavy_minus_sign: | N/A                |