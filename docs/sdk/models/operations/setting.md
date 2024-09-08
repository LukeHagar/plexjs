# Setting

## Example Usage

```typescript
import { Setting } from "@lukehagar/plexjs/sdk/models/operations";

let value: Setting = {
    id: "EnableDatabaseTrace",
    label: "",
    summary: "",
    type: "bool",
    default: false,
    value: false,
    hidden: true,
    advanced: false,
    group: "",
    enumValues: "1:admin only|2:everyone",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_minus_sign:      | N/A                     | EnableDatabaseTrace     |
| `label`                 | *string*                | :heavy_minus_sign:      | N/A                     |                         |
| `summary`               | *string*                | :heavy_minus_sign:      | N/A                     |                         |
| `type`                  | *string*                | :heavy_minus_sign:      | N/A                     | bool                    |
| `default`               | *boolean*               | :heavy_minus_sign:      | N/A                     | false                   |
| `value`                 | *boolean*               | :heavy_minus_sign:      | N/A                     | false                   |
| `hidden`                | *boolean*               | :heavy_minus_sign:      | N/A                     | true                    |
| `advanced`              | *boolean*               | :heavy_minus_sign:      | N/A                     | false                   |
| `group`                 | *string*                | :heavy_minus_sign:      | N/A                     |                         |
| `enumValues`            | *string*                | :heavy_minus_sign:      | N/A                     | 1:admin only\|2:everyone |