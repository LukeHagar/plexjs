# AddDownloadQueueItemsResponse

OK

## Example Usage

```typescript
import { AddDownloadQueueItemsResponse } from "@parke.dev/plexjs/models/operations";

let value: AddDownloadQueueItemsResponse = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    offset: 0,
    size: 1,
    totalSize: 100,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                 | [operations.AddDownloadQueueItemsMediaContainer](../../models/operations/adddownloadqueueitemsmediacontainer.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}    |