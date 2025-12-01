# GetIdentityMediaContainer

## Example Usage

```typescript
import { GetIdentityMediaContainer } from "@lukehagar/plexjs/models/operations";

let value: GetIdentityMediaContainer = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `claimed`                                                | *boolean*                                                | :heavy_minus_sign:                                       | Indicates whether this server has been claimed by a user |
| `machineIdentifier`                                      | *string*                                                 | :heavy_minus_sign:                                       | A unique identifier of the computer                      |
| `size`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_minus_sign:                                       | The full version string of the PMS                       |