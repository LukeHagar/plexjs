# DVRResponse

## Example Usage

```typescript
import { DVRResponse } from "@parke.dev/plexjs/models/shared";

let value: DVRResponse = {
  mediaContainer: {
    dvr: [
      {
        key: "/tv.plex.provider.epg",
      },
    ],
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                      | [shared.DVRResponseMediaContainer](../../models/shared/dvrresponsemediacontainer.md)  | :heavy_minus_sign:                                                                    | N/A                                                                                   | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system",<br/>"size": 1,<br/>"Status": []<br/>}<br/>} |