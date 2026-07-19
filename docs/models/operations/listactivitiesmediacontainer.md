# ListActivitiesMediaContainer

## Example Usage

```typescript
import { ListActivitiesMediaContainer } from "@parke.dev/plexjs/models/operations";

let value: ListActivitiesMediaContainer = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `activity`                                           | [shared.Activity](../../models/shared/activity.md)[] | :heavy_minus_sign:                                   | N/A                                                  |