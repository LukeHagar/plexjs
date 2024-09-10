# GetSearchResultsMedia

## Example Usage

```typescript
import { GetSearchResultsMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchResultsMedia = {
  id: 26610,
  duration: 6612628,
  bitrate: 4751,
  width: 1916,
  height: 796,
  aspectRatio: 2.35,
  audioChannels: 6,
  audioCodec: "aac",
  videoCodec: "hevc",
  videoResolution: 1080,
  container: "mkv",
  videoFrameRate: "24p",
  audioProfile: "lc",
  videoProfile: "main 10",
  part: [
    {
      id: 26610,
      key: "/library/parts/26610/1589234571/file.mkv",
      duration: 6612628,
      file:
        "/movies/Mission Impossible (1996)/Mission Impossible (1996) Bluray-1080p.mkv",
      size: 3926903851,
      audioProfile: "lc",
      container: "mkv",
      videoProfile: "main 10",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 26610                                                                                       |
| `duration`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 6612628                                                                                     |
| `bitrate`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 4751                                                                                        |
| `width`                                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 1916                                                                                        |
| `height`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 796                                                                                         |
| `aspectRatio`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 2.35                                                                                        |
| `audioChannels`                                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 6                                                                                           |
| `audioCodec`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | aac                                                                                         |
| `videoCodec`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | hevc                                                                                        |
| `videoResolution`                                                                           | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 1080                                                                                        |
| `container`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | mkv                                                                                         |
| `videoFrameRate`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | 24p                                                                                         |
| `audioProfile`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | lc                                                                                          |
| `videoProfile`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | main 10                                                                                     |
| `part`                                                                                      | [operations.GetSearchResultsPart](../../../sdk/models/operations/getsearchresultspart.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |