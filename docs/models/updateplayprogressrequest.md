# UpdatePlayProgressRequest

## Example Usage

```typescript
import { UpdatePlayProgressRequest } from "@lukehagar/plexjs";

let value: UpdatePlayProgressRequest = {
    key: "<key>",
    time: 90000,
    state: "played",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `key`                                                               | *string*                                                            | :heavy_check_mark:                                                  | the media key                                                       |                                                                     |
| `time`                                                              | *number*                                                            | :heavy_check_mark:                                                  | The time, in milliseconds, used to set the media playback progress. | 90000                                                               |
| `state`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The playback state of the media item.                               | played                                                              |