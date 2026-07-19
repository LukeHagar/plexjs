# DeleteLineupResponse

## Example Usage

```typescript
import { DeleteLineupResponse } from "@parke.dev/plexjs/models/operations";

let value: DeleteLineupResponse = {
  headers: {},
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