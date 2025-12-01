# GetTasksButlerTask

## Example Usage

```typescript
import { GetTasksButlerTask } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTasksButlerTask = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A user-friendly description of the task                                                                |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Whether this task is enabled or not                                                                    |
| `interval`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The interval (in days) of when this task is run.  A value of 1 is run every day, 7 is every week, etc. |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The name of the task                                                                                   |
| `scheduleRandomized`                                                                                   | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Indicates whether the timing of the task is randomized within the butler interval                      |
| `title`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | A user-friendly title of the task                                                                      |