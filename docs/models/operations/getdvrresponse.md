# GetDVRResponse

## Example Usage

```typescript
import { GetDVRResponse } from "@lukehagar/plexjs/models/operations";

let value: GetDVRResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [operations.GetDVRResponseBody](../../models/operations/getdvrresponsebody.md) | :heavy_check_mark:                                                             | N/A                                                                            |