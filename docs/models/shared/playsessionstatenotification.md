# PlaySessionStateNotification

Real-time playback state change notification

## Example Usage

```typescript
import { PlaySessionStateNotification, PlaySessionStateNotificationState } from "@parke.dev/plexjs/models/shared";

let value: PlaySessionStateNotification = {
  controllable: "string value",
  guid: "string value",
  key: "string value",
  playQueueID: 1,
  playQueueItemID: 1,
  ratingKey: "string value",
  sessionKey: "string value",
  state: PlaySessionStateNotificationState.Playing,
  transcodeSession: "string value",
  url: "string value",
  viewOffset: 1,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `controllable`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `guid`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `key`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `playQueueID`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `playQueueItemID`                                                                                    | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `ratingKey`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `sessionKey`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `state`                                                                                              | [shared.PlaySessionStateNotificationState](../../models/shared/playsessionstatenotificationstate.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `transcodeSession`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `url`                                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `viewOffset`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |