# AddedQueueItem

## Example Usage

```typescript
import { AddedQueueItem } from "@parke.dev/plexjs/models/shared";

let value: AddedQueueItem = {
  id: 1,
  key: "string value",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | The queue item id that was added or the existing one if an item already exists in this queue with the same parameters |
| `key`                                                                                                                 | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The key added to the queue                                                                                            |