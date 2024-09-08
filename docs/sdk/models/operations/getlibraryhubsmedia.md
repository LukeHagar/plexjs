# GetLibraryHubsMedia

## Example Usage

```typescript
import { GetLibraryHubsMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryHubsMedia = {
    id: 38247,
    duration: 6017237,
    bitrate: 2051,
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    audioChannels: 2,
    audioCodec: "aac",
    videoCodec: "h264",
    videoResolution: "1080",
    container: "mp4",
    videoFrameRate: "24p",
    optimizedForStreaming: 1,
    audioProfile: "lc",
    has64bitOffsets: false,
    videoProfile: "high",
    part: [
        {
            id: 38247,
            key: "/library/parts/38247/1589412494/file.mp4",
            duration: 6017237,
            file: "/movies/Tangled (2010)/Tangled (2010) Bluray-1080p.mp4",
            size: 1545647447,
            audioProfile: "lc",
            container: "mp4",
            has64bitOffsets: false,
            optimizedForStreaming: true,
            videoProfile: "high",
        },
    ],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 38247                                                                                   |
| `duration`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 6017237                                                                                 |
| `bitrate`                                                                               | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 2051                                                                                    |
| `width`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1920                                                                                    |
| `height`                                                                                | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1080                                                                                    |
| `aspectRatio`                                                                           | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1.78                                                                                    |
| `audioChannels`                                                                         | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 2                                                                                       |
| `audioCodec`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | aac                                                                                     |
| `videoCodec`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | h264                                                                                    |
| `videoResolution`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1080                                                                                    |
| `container`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | mp4                                                                                     |
| `videoFrameRate`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 24p                                                                                     |
| `optimizedForStreaming`                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | 1                                                                                       |
| `audioProfile`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | lc                                                                                      |
| `has64bitOffsets`                                                                       | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     | false                                                                                   |
| `videoProfile`                                                                          | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     | high                                                                                    |
| `part`                                                                                  | [operations.GetLibraryHubsPart](../../../sdk/models/operations/getlibraryhubspart.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |