# GetDVRResponse

## Example Usage

```typescript
import { GetDVRResponse } from "@parke.dev/plexjs/models/operations";

let value: GetDVRResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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