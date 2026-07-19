# CreatePlayQueueResponse

## Example Usage

```typescript
import { CreatePlayQueueResponse } from "@parke.dev/plexjs/models/operations";

let value: CreatePlayQueueResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    playQueueID: 1,
    playQueueSelectedItemID: 1,
    playQueueSelectedItemOffset: 0,
    playQueueTotalCount: 10,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `result`                                                                                                        | [shared.MediaContainerWithPlayQueue](../../models/shared/mediacontainerwithplayqueue.md)                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             | {<br/>"playQueueID": 1,<br/>"playQueueSelectedItemID": 1,<br/>"playQueueSelectedItemOffset": 0,<br/>"playQueueTotalCount": 10<br/>} |