# ButlerTasks

## Example Usage

```typescript
import { ButlerTasks } from "@lukehagar/plexjs/sdk/models/operations";

let value: ButlerTasks = {
  butlerTask: [
    {
      name: "BackupDatabase",
      interval: 3,
      title: "Backup Database",
      description:
        "Create a backup copy of the server's database in the configured backup directory",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `butlerTask`                                                            | [operations.ButlerTask](../../../sdk/models/operations/butlertask.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |