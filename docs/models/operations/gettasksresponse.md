# GetTasksResponse

Butler tasks

## Example Usage

```typescript
import { GetTasksResponse } from "@parke.dev/plexjs/models/operations";

let value: GetTasksResponse = {
  butlerTasks: {
    butlerTask: [
      {
        title: "string value",
        description: "string value",
        enabled: true,
        interval: 1,
        name: "string value",
        scheduleRandomized: true,
      },
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `butlerTasks`                                                    | [operations.ButlerTasks](../../models/operations/butlertasks.md) | :heavy_minus_sign:                                               | N/A                                                              |