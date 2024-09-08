# GetTokenByPinIdPlexErrors

## Example Usage

```typescript
import { GetTokenByPinIdPlexErrors } from "@lukehagar/plexjs/sdk/models/errors";

let value: GetTokenByPinIdPlexErrors = {
    code: 1020,
    message: "Code not found or expired",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `code`                    | *number*                  | :heavy_minus_sign:        | N/A                       | 1020                      |
| `message`                 | *string*                  | :heavy_minus_sign:        | N/A                       | Code not found or expired |