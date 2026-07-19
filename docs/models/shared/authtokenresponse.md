# AuthTokenResponse

## Example Usage

```typescript
import { AuthTokenResponse } from "@parke.dev/plexjs/models/shared";

let value: AuthTokenResponse = {
  authToken: "string value",
  clientIdentifier: "string value",
  jwt: "string value",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `authToken`                         | *string*                            | :heavy_minus_sign:                  | The Plex authentication token       |
| `clientIdentifier`                  | *string*                            | :heavy_minus_sign:                  | N/A                                 |
| `jwt`                               | *string*                            | :heavy_minus_sign:                  | JWT token for device authentication |