# TokenExchangeRequest

## Example Usage

```typescript
import { TokenExchangeRequest } from "@parke.dev/plexjs/models/shared";

let value: TokenExchangeRequest = {
  clientIdentifier: "string value",
  jwt: "string value",
  scope: "string value",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `clientIdentifier`                          | *string*                                    | :heavy_minus_sign:                          | Unique client identifier                    |
| `jwt`                                       | *string*                                    | :heavy_minus_sign:                          | JWT token to exchange for a Plex auth token |
| `scope`                                     | *string*                                    | :heavy_minus_sign:                          | Requested scope for the token               |