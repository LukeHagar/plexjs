# GetServerResourcesPlexErrors

## Example Usage

```typescript
import { GetServerResourcesPlexErrors } from "@lukehagar/plexjs/sdk/models/errors";

let value: GetServerResourcesPlexErrors = {
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