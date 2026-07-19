# ServerAccessTokensResponse

## Example Usage

```typescript
import { ServerAccessTokensResponse } from "@parke.dev/plexjs/models/shared";

let value: ServerAccessTokensResponse = {
  accessTokens: [
    {
      expiresAt: "string value",
      scope: "string value",
      token: "string value",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accessTokens`                                             | [shared.AccessToken](../../models/shared/accesstoken.md)[] | :heavy_minus_sign:                                         | N/A                                                        |