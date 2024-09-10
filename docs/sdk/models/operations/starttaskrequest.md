# StartTaskRequest

## Example Usage

```typescript
import { StartTaskRequest, TaskName } from "@lukehagar/plexjs/sdk/models/operations";

let value: StartTaskRequest = {
  taskName: TaskName.DeepMediaAnalysis,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `taskName`                                                        | [operations.TaskName](../../../sdk/models/operations/taskname.md) | :heavy_check_mark:                                                | the name of the task to be started.                               |