# JWKRegistrationRequest

## Example Usage

```typescript
import { JWKRegistrationRequest } from "@parke.dev/plexjs/models/shared";

let value: JWKRegistrationRequest = {
  jwk: {
    crv: "string value",
    kid: "string value",
    kty: "string value",
    x: "string value",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `jwk`                                    | [shared.Jwk](../../models/shared/jwk.md) | :heavy_minus_sign:                       | JSON Web Key for device authentication   |
| `strong`                                 | *boolean*                                | :heavy_minus_sign:                       | Request strong authentication            |