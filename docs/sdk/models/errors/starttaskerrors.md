# StartTaskErrors

## Example Usage

```typescript
import { StartTaskErrors } from "@lukehagar/plexjs/sdk/models/errors";

let value: StartTaskErrors = {
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