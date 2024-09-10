# GetLibraryItemsMedia

## Example Usage

```typescript
import { GetLibraryItemsMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsMedia = {
  id: 119534,
  duration: 11558112,
  bitrate: 25025,
  width: 3840,
  height: 2072,
  aspectRatio: 1.85,
  audioChannels: 6,
  audioCodec: "eac3",
  videoCodec: "hevc",
  videoResolution: "4k",
  container: "mkv",
  videoFrameRate: "24p",
  videoProfile: "main 10",
  part: [
    {
      id: 119542,
      key: "/library/parts/119542/1680457526/file.mkv",
      duration: 11558112,
      file:
        "/movies/Avatar The Way of Water (2022)/Avatar.The.Way.of.Water.2022.2160p.WEB-DL.DDP5.1.Atmos.DV.HDR10.HEVC-CMRG.mkv",
      size: 36158371307,
      container: "mkv",
      videoProfile: "main 10",
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 119534                                                                                    |
| `duration`                                                                                | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 11558112                                                                                  |
| `bitrate`                                                                                 | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 25025                                                                                     |
| `width`                                                                                   | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 3840                                                                                      |
| `height`                                                                                  | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 2072                                                                                      |
| `aspectRatio`                                                                             | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 1.85                                                                                      |
| `audioChannels`                                                                           | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 6                                                                                         |
| `audioCodec`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | eac3                                                                                      |
| `videoCodec`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | hevc                                                                                      |
| `videoResolution`                                                                         | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 4k                                                                                        |
| `container`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | mkv                                                                                       |
| `videoFrameRate`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 24p                                                                                       |
| `videoProfile`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | main 10                                                                                   |
| `part`                                                                                    | [operations.GetLibraryItemsPart](../../../sdk/models/operations/getlibraryitemspart.md)[] | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |