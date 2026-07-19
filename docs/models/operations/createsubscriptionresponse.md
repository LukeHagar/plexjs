# CreateSubscriptionResponse

## Example Usage

```typescript
import { CreateSubscriptionResponse } from "@parke.dev/plexjs/models/operations";

let value: CreateSubscriptionResponse = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                              | Record<string, *string*[]>                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `result`                                                                                               | [operations.CreateSubscriptionResponseBody](../../models/operations/createsubscriptionresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |