# DeleteHistoryResponse

## Example Usage

```typescript
import { DeleteHistoryResponse } from "@parke.dev/plexjs/models/operations";

let value: DeleteHistoryResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    identifier: "com.plexapp.plugins.library",
    offset: 0,
    size: 1,
    totalSize: 100,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |
| `result`                                                                                  | [shared.MediaContainer](../../models/shared/mediacontainer.md)                            | :heavy_check_mark:                                                                        | N/A                                                                                       | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>} |