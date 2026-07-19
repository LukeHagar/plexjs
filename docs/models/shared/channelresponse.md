# ChannelResponse

## Example Usage

```typescript
import { ChannelResponse } from "@parke.dev/plexjs/models/shared";

let value: ChannelResponse = {
  mediaContainer: {
    size: 1,
    channel: [
      {
        title: "Example Channel",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                             | [shared.ChannelResponseMediaContainer](../../models/shared/channelresponsemediacontainer.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>} |