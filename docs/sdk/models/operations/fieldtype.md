# FieldType

## Example Usage

```typescript
import { FieldType } from "@lukehagar/plexjs/sdk/models/operations";

let value: FieldType = {
  type: "tag",
  operator: [
    {
      key: "=",
      title: "is",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `type`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 | tag                                                                 |
| `operator`                                                          | [operations.Operator](../../../sdk/models/operations/operator.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |