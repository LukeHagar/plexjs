# StartUniversalTranscodeRequest


## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `hasMDE`                                      | *number*                                      | :heavy_check_mark:                            | Whether the media item has MDE                |
| `path`                                        | *string*                                      | :heavy_check_mark:                            | The path to the media item to transcode       |
| `mediaIndex`                                  | *number*                                      | :heavy_check_mark:                            | The index of the media item to transcode      |
| `partIndex`                                   | *number*                                      | :heavy_check_mark:                            | The index of the part to transcode            |
| `protocol`                                    | *string*                                      | :heavy_check_mark:                            | The protocol to use for the transcode session |
| `fastSeek`                                    | *number*                                      | :heavy_minus_sign:                            | Whether to use fast seek or not               |
| `directPlay`                                  | *number*                                      | :heavy_minus_sign:                            | Whether to use direct play or not             |
| `directStream`                                | *number*                                      | :heavy_minus_sign:                            | Whether to use direct stream or not           |
| `subtitleSize`                                | *number*                                      | :heavy_minus_sign:                            | The size of the subtitles                     |
| `subtites`                                    | *string*                                      | :heavy_minus_sign:                            | The subtitles                                 |
| `audioBoost`                                  | *number*                                      | :heavy_minus_sign:                            | The audio boost                               |
| `location`                                    | *string*                                      | :heavy_minus_sign:                            | The location of the transcode session         |
| `mediaBufferSize`                             | *number*                                      | :heavy_minus_sign:                            | The size of the media buffer                  |
| `session`                                     | *string*                                      | :heavy_minus_sign:                            | The session ID                                |
| `addDebugOverlay`                             | *number*                                      | :heavy_minus_sign:                            | Whether to add a debug overlay or not         |
| `autoAdjustQuality`                           | *number*                                      | :heavy_minus_sign:                            | Whether to auto adjust quality or not         |