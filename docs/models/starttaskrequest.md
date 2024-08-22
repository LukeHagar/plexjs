# StartTaskRequest

## Example Usage

```typescript
import { StartTaskRequest, TaskName } from "@lukehagar/plexjs";

let value: StartTaskRequest = {
    taskName: TaskName.GenerateChapterThumbs,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `taskName`                               | [models.TaskName](../models/taskname.md) | :heavy_check_mark:                       | the name of the task to be started.      |