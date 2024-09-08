# GetMetadataChildrenRequest

## Example Usage

```typescript
import { GetMetadataChildrenRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMetadataChildrenRequest = {
    ratingKey: 1289.26,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ratingKey`                                                             | *number*                                                                | :heavy_check_mark:                                                      | the id of the library item to return the children of.                   |
| `includeElements`                                                       | *string*                                                                | :heavy_minus_sign:                                                      | Adds additional elements to the response. Supported types are (Stream)<br/> |