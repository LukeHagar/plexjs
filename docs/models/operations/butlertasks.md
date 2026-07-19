# ButlerTasks

## Example Usage

```typescript
import { ButlerTasks } from "@parke.dev/plexjs/models/operations";

let value: ButlerTasks = {
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
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `butlerTask`                                             | [shared.ButlerTask](../../models/shared/butlertask.md)[] | :heavy_minus_sign:                                       | N/A                                                      |