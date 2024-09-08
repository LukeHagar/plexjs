# GetButlerTasksResponseBody

All butler tasks

## Example Usage

```typescript
import { GetButlerTasksResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetButlerTasksResponseBody = {
    butlerTasks: {
        butlerTask: [
            {
                name: "BackupDatabase",
                interval: 3,
                title: "Backup Database",
                description:
                    "Create a backup copy of the server's database in the configured backup directory",
            },
        ],
    },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `butlerTasks`                                                           | [operations.ButlerTasks](../../../sdk/models/operations/butlertasks.md) | :heavy_minus_sign:                                                      | N/A                                                                     |