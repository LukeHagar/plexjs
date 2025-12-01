# SetDVRPreferencesResponse

## Example Usage

```typescript
import { SetDVRPreferencesResponse } from "@lukehagar/plexjs/models/operations";

let value: SetDVRPreferencesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [operations.SetDVRPreferencesResponseBody](../../models/operations/setdvrpreferencesresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |