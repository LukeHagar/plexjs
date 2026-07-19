# GetAllSubscriptionsResponse

## Example Usage

```typescript
import { GetAllSubscriptionsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetAllSubscriptionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    mediaContainer: {
      identifier: "com.plexapp.system",
      size: 1,
      mediaSubscription: [],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `result`                                                                                         | [shared.MediaContainerWithSubscription](../../models/shared/mediacontainerwithsubscription.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system",<br/>"size": 1,<br/>"MediaSubscription": []<br/>}<br/>} |