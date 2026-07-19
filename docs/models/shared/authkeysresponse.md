# AuthKeysResponse

## Example Usage

```typescript
import { AuthKeysResponse } from "@parke.dev/plexjs/models/shared";

let value: AuthKeysResponse = {
  keys: [
    {
      alg: "string value",
      e: "string value",
      kid: "string value",
      kty: "string value",
      n: "string value",
      use: "string value",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `keys`                                     | [shared.Key](../../models/shared/key.md)[] | :heavy_minus_sign:                         | N/A                                        |