# GetTemplateResponse

## Example Usage

```typescript
import { GetTemplateResponse } from "@parke.dev/plexjs/models/operations";

let value: GetTemplateResponse = {
  headers: {},
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      offset: 0,
      size: 1,
      totalSize: 100,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [operations.GetTemplateResponseBody](../../models/operations/gettemplateresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |