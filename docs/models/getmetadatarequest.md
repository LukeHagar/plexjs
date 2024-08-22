# GetMetadataRequest

## Example Usage

```typescript
import { GetMetadataRequest } from "@lukehagar/plexjs";

let value: GetMetadataRequest = {
    ratingKey: 6169.34,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `ratingKey`                                           | *number*                                              | :heavy_check_mark:                                    | the id of the library item to return the children of. |