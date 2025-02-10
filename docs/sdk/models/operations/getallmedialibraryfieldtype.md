# GetAllMediaLibraryFieldType

## Example Usage

```typescript
import { GetAllMediaLibraryFieldType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetAllMediaLibraryFieldType = {
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

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     | tag                                                                                                     |
| `operator`                                                                                              | [operations.GetAllMediaLibraryOperator](../../../sdk/models/operations/getallmedialibraryoperator.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |