# NotificationContainer

## Example Usage

```typescript
import { NotificationContainer, PlaySessionStateNotificationState } from "@parke.dev/plexjs/models/shared";

let value: NotificationContainer = {
  type: "string value",
  playSessionStateNotification: [
    {
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
    },
  ],
  reachabilityNotification: [
    {
      status: "string value",
    },
  ],
  size: 1,
  statusNotification: [
    {
      title: "string value",
      description: "string value",
      type: "string value",
    },
  ],
  timelineEntry: [
    {
      title: "string value",
      type: 1,
      itemID: 1,
      metadataState: "string value",
      playQueueItemID: 1,
      state: 1,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The notification type                                                                        |
| `playSessionStateNotification`                                                               | [shared.PlaySessionStateNotification](../../models/shared/playsessionstatenotification.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `reachabilityNotification`                                                                   | [shared.ReachabilityNotification](../../models/shared/reachabilitynotification.md)[]         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `size`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of notifications                                                                      |
| `statusNotification`                                                                         | [shared.StatusNotification](../../models/shared/statusnotification.md)[]                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `timelineEntry`                                                                              | [shared.TimelineEntry](../../models/shared/timelineentry.md)[]                               | :heavy_minus_sign:                                                                           | N/A                                                                                          |