# Media

## Example Usage

```typescript
import { Media } from "@lukehagar/plexjs/sdk/models/operations";

let value: Media = {
    id: 120345,
    duration: 7474422,
    bitrate: 3623,
    width: 1920,
    height: 804,
    aspectRatio: 2.35,
    audioChannels: 6,
    audioCodec: "ac3",
    videoCodec: "h264",
    videoResolution: 1080,
    container: "mp4",
    videoFrameRate: "24p",
    optimizedForStreaming: 0,
    videoProfile: "high",
    part: [
        {
            id: 120353,
            key: "/library/parts/120353/1681803203/file.mp4",
            duration: 7474422,
            file: "/movies/Ant-Man and the Wasp Quantumania (2023)/Ant-Man.and.the.Wasp.Quantumania.2023.1080p.mp4",
            size: 3395307162,
            container: "mp4",
            hasThumbnail: 1,
            videoProfile: "high",
        },
    ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 120345                                                      |
| `duration`                                                  | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 7474422                                                     |
| `bitrate`                                                   | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 3623                                                        |
| `width`                                                     | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 1920                                                        |
| `height`                                                    | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 804                                                         |
| `aspectRatio`                                               | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 2.35                                                        |
| `audioChannels`                                             | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 6                                                           |
| `audioCodec`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | ac3                                                         |
| `videoCodec`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | h264                                                        |
| `videoResolution`                                           | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 1080                                                        |
| `container`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | mp4                                                         |
| `videoFrameRate`                                            | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 24p                                                         |
| `optimizedForStreaming`                                     | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         | 0                                                           |
| `has64bitOffsets`                                           | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `videoProfile`                                              | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | high                                                        |
| `part`                                                      | [operations.Part](../../../sdk/models/operations/part.md)[] | :heavy_minus_sign:                                          | N/A                                                         |                                                             |