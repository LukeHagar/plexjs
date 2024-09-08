# DeleteLibraryErrors

## Example Usage

```typescript
import { DeleteLibraryErrors } from "@lukehagar/plexjs/sdk/models/errors";

let value: DeleteLibraryErrors = {
    code: 1001,
    message: "User could not be authenticated",
    status: 401,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `code`                          | *number*                        | :heavy_minus_sign:              | N/A                             | 1001                            |
| `message`                       | *string*                        | :heavy_minus_sign:              | N/A                             | User could not be authenticated |
| `status`                        | *number*                        | :heavy_minus_sign:              | N/A                             | 401                             |