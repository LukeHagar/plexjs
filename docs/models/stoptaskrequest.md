# StopTaskRequest

## Example Usage

```typescript
import { PathParamTaskName, StopTaskRequest } from "@lukehagar/plexjs";

let value: StopTaskRequest = {
    taskName: PathParamTaskName.BackupDatabase,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `taskName`                                                 | [models.PathParamTaskName](../models/pathparamtaskname.md) | :heavy_check_mark:                                         | The name of the task to be started.                        |