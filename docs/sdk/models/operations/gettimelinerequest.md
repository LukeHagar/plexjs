# GetTimelineRequest

## Example Usage

```typescript
import { GetTimelineRequest, State } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetTimelineRequest = {
  ratingKey: 23409,
  key: "/library/metadata/23409",
  state: State.Playing,
  hasMDE: 1,
  time: 2000,
  duration: 10000,
  context: "home:hub.continueWatching",
  playQueueItemID: 1,
  playBackTime: 2000,
  row: 1,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `ratingKey`                                                 | *number*                                                    | :heavy_check_mark:                                          | The rating key of the media item                            | 23409                                                       |
| `key`                                                       | *string*                                                    | :heavy_check_mark:                                          | The key of the media item to get the timeline for           | /library/metadata/23409                                     |
| `state`                                                     | [operations.State](../../../sdk/models/operations/state.md) | :heavy_check_mark:                                          | The state of the media item                                 | playing                                                     |
| `hasMDE`                                                    | *number*                                                    | :heavy_check_mark:                                          | Whether the media item has MDE                              | 1                                                           |
| `time`                                                      | *number*                                                    | :heavy_check_mark:                                          | The time of the media item                                  | 2000                                                        |
| `duration`                                                  | *number*                                                    | :heavy_check_mark:                                          | The duration of the media item                              | 10000                                                       |
| `context`                                                   | *string*                                                    | :heavy_check_mark:                                          | The context of the media item                               | home:hub.continueWatching                                   |
| `playQueueItemID`                                           | *number*                                                    | :heavy_check_mark:                                          | The play queue item ID of the media item                    | 1                                                           |
| `playBackTime`                                              | *number*                                                    | :heavy_check_mark:                                          | The playback time of the media item                         | 2000                                                        |
| `row`                                                       | *number*                                                    | :heavy_check_mark:                                          | The row of the media item                                   | 1                                                           |