# GetLibraryDetailsFieldType

## Example Usage

```typescript
import { GetLibraryDetailsFieldType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryDetailsFieldType = {
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `type`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | resolution                                                                                            |
| `operator`                                                                                            | [operations.GetLibraryDetailsOperator](../../../sdk/models/operations/getlibrarydetailsoperator.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |