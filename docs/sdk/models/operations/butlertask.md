# ButlerTask

## Example Usage

```typescript
import { ButlerTask } from "@lukehagar/plexjs/sdk/models/operations";

let value: ButlerTask = {
    name: "BackupDatabase",
    interval: 3,
    title: "Backup Database",
    description: "Create a backup copy of the server's database in the configured backup directory",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | BackupDatabase                                                                   |
| `interval`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 3                                                                                |
| `scheduleRandomized`                                                             | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `title`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Backup Database                                                                  |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | Create a backup copy of the server's database in the configured backup directory |