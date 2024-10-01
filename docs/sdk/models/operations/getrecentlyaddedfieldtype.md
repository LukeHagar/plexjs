# GetRecentlyAddedFieldType

## Example Usage

```typescript
import { GetRecentlyAddedFieldType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedFieldType = {
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

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 | tag                                                                                                 |
| `operator`                                                                                          | [operations.GetRecentlyAddedOperator](../../../sdk/models/operations/getrecentlyaddedoperator.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |