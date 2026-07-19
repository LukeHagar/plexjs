# GetHistoryItemResponse

## Example Usage

```typescript
import { GetHistoryItemResponse } from "@parke.dev/plexjs/models/operations";

let value: GetHistoryItemResponse = {
  headers: {},
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      offset: 0,
      size: 1,
      totalSize: 100,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [shared.HistoryAllGetResponses200](../../models/shared/historyallgetresponses200.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |