# GetMetadataItemResponse

## Example Usage

```typescript
import { GetMetadataItemResponse } from "@parke.dev/plexjs/models/operations";

let value: GetMetadataItemResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      size: 1,
      metadata: [],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `headers`                                                                                        | Record<string, *string*[]>                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `result`                                                                                         | [shared.MediaContainerWithMetadata](../../models/shared/mediacontainerwithmetadata.md)           | :heavy_check_mark:                                                                               | N/A                                                                                              | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.plugins.library",<br/>"size": 1,<br/>"Metadata": []<br/>}<br/>} |