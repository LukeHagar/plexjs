# GetRelatedHubsResponse

## Example Usage

```typescript
import { GetRelatedHubsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetRelatedHubsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    mediaContainer: {
      identifier: "com.plexapp.plugins.library",
      size: 1,
      hub: [],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `result`                                                                                    | [shared.MediaContainerWithHubs](../../models/shared/mediacontainerwithhubs.md)              | :heavy_check_mark:                                                                          | N/A                                                                                         | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.plugins.library",<br/>"size": 1,<br/>"Hub": []<br/>}<br/>} |