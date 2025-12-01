# CreateDVRResponse

## Example Usage

```typescript
import { CreateDVRResponse } from "@lukehagar/plexjs/models/operations";

let value: CreateDVRResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [shared.DvrRequestHandlerSlashGetResponses200](../../models/shared/dvrrequesthandlerslashgetresponses200.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |