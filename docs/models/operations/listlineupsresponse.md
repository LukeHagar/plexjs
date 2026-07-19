# ListLineupsResponse

## Example Usage

```typescript
import { ListLineupsResponse } from "@parke.dev/plexjs/models/operations";

let value: ListLineupsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    mediaContainer: {
      identifier: "tv.plex.provider.epg",
      size: 1,
      lineup: [],
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `result`                                                                                | [shared.MediaContainerWithLineup](../../models/shared/mediacontainerwithlineup.md)      | :heavy_check_mark:                                                                      | N/A                                                                                     | {<br/>"MediaContainer": {<br/>"identifier": "tv.plex.provider.epg",<br/>"size": 1,<br/>"Lineup": []<br/>}<br/>} |