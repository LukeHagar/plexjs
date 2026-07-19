# ListActivitiesResponse

OK

## Example Usage

```typescript
import { ListActivitiesResponse } from "@parke.dev/plexjs/models/operations";

let value: ListActivitiesResponse = {
  mediaContainer: {
    activity: [
      {
        title: "string value",
        type: "string value",
        cancellable: true,
        context: {},
        progress: 1,
        response: {},
        subtitle: "string value",
        userID: 1,
        uuid: "string value",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                   | [operations.ListActivitiesMediaContainer](../../models/operations/listactivitiesmediacontainer.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |