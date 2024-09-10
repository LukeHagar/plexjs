# GetResizedPhotoErrors

## Example Usage

```typescript
import { GetResizedPhotoErrors } from "@lukehagar/plexjs/sdk/models/errors";

let value: GetResizedPhotoErrors = {
  code: 1000,
  message: "X-Plex-Client-Identifier is missing",
  status: 400,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `code`                              | *number*                            | :heavy_minus_sign:                  | N/A                                 | 1000                                |
| `message`                           | *string*                            | :heavy_minus_sign:                  | N/A                                 | X-Plex-Client-Identifier is missing |
| `status`                            | *number*                            | :heavy_minus_sign:                  | N/A                                 | 400                                 |