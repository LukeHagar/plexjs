# FieldType

## Example Usage

```typescript
import { FieldType } from "@lukehagar/plexjs";

let value: FieldType = {
    type: "resolution",
    operator: [
        {
            key: "=",
            title: "is",
        },
    ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `type`                                     | *string*                                   | :heavy_minus_sign:                         | N/A                                        | resolution                                 |
| `operator`                                 | [models.Operator](../models/operator.md)[] | :heavy_minus_sign:                         | N/A                                        |                                            |