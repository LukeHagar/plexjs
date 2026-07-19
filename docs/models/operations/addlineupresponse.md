# AddLineupResponse

## Example Usage

```typescript
import { AddLineupResponse } from "@parke.dev/plexjs/models/operations";

let value: AddLineupResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    mediaContainer: {
      dvr: [
        {
          key: "/tv.plex.provider.epg",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `result`                                                                                                 | [shared.DVRResponse](../../models/shared/dvrresponse.md)                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | {<br/>"MediaContainer": {<br/>"size": 1,<br/>"DVR": [<br/>{<br/>"key": "/tv.plex.provider.epg",<br/>"title": "HDHomerun"<br/>}<br/>]<br/>}<br/>} |