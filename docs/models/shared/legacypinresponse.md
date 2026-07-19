# LegacyPinResponse

## Example Usage

```typescript
import { LegacyPinResponse } from "@parke.dev/plexjs/models/shared";

let value: LegacyPinResponse = {
  authToken: "string value",
  clientIdentifier: "string value",
  code: "string value",
  expiresIn: 1,
  id: 1,
  trusted: true,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `authToken`              | *string*                 | :heavy_minus_sign:       | The authentication token |
| `clientIdentifier`       | *string*                 | :heavy_minus_sign:       | N/A                      |
| `code`                   | *string*                 | :heavy_minus_sign:       | The 4-character PIN code |
| `expiresIn`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `id`                     | *number*                 | :heavy_minus_sign:       | The PIN ID               |
| `trusted`                | *boolean*                | :heavy_minus_sign:       | N/A                      |