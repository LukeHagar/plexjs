# GetPlaylistContentsMedia

## Example Usage

```typescript
import { GetPlaylistContentsMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetPlaylistContentsMedia = {
  id: 15,
  duration: 141416,
  bitrate: 2273,
  width: 1920,
  height: 814,
  aspectRatio: 2.35,
  audioChannels: 2,
  audioCodec: "aac",
  videoCodec: "h264",
  videoResolution: "1080",
  container: "mp4",
  videoFrameRate: "24p",
  optimizedForStreaming: 0,
  audioProfile: "lc",
  has64bitOffsets: false,
  videoProfile: "high",
  part: [
    {
      id: 15,
      key: "/library/parts/15/1705637151/file.mp4",
      duration: 141416,
      file: "/movies/Serenity (2005)/Serenity (2005).mp4",
      size: 40271948,
      audioProfile: "lc",
      container: "mp4",
      has64bitOffsets: false,
      optimizedForStreaming: false,
      videoProfile: "high",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 15                                                                                                |
| `duration`                                                                                        | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 141416                                                                                            |
| `bitrate`                                                                                         | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2273                                                                                              |
| `width`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1920                                                                                              |
| `height`                                                                                          | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 814                                                                                               |
| `aspectRatio`                                                                                     | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2.35                                                                                              |
| `audioChannels`                                                                                   | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2                                                                                                 |
| `audioCodec`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | aac                                                                                               |
| `videoCodec`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | h264                                                                                              |
| `videoResolution`                                                                                 | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1080                                                                                              |
| `container`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | mp4                                                                                               |
| `videoFrameRate`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 24p                                                                                               |
| `optimizedForStreaming`                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 0                                                                                                 |
| `audioProfile`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | lc                                                                                                |
| `has64bitOffsets`                                                                                 | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | false                                                                                             |
| `videoProfile`                                                                                    | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | high                                                                                              |
| `part`                                                                                            | [operations.GetPlaylistContentsPart](../../../sdk/models/operations/getplaylistcontentspart.md)[] | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |