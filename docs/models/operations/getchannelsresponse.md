# GetChannelsResponse

## Example Usage

```typescript
import { GetChannelsResponse } from "@parke.dev/plexjs/models/operations";

let value: GetChannelsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    mediaContainer: {
      size: 1,
      channel: [
        {
          title: "Example Channel",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `result`                                                                                    | [shared.ChannelResponse](../../models/shared/channelresponse.md)                            | :heavy_check_mark:                                                                          | N/A                                                                                         | {<br/>"MediaContainer": {<br/>"size": 1,<br/>"Channel": [<br/>{<br/>"id": 1,<br/>"title": "Example Channel"<br/>}<br/>]<br/>}<br/>} |