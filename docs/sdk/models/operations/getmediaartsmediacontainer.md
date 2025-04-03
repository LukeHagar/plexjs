# GetMediaArtsMediaContainer

## Example Usage

```typescript
import { GetMediaArtsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaArtsMediaContainer = {
  size: 50,
  mediaTagVersion: 1734362201,
  mediaTagPrefix: "/system/bundle/media/flags/",
  identifier: "com.plexapp.plugins.library",
  metadata: [
    {
      key:
        "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
      provider: "tmdb",
      ratingKey:
        "https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
      selected: true,
      thumb:
        "https://images.plex.tv/photo?height=270&width=480&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FixgFmf1X59PUZam2qbAfskx2gQr%2Ejpg",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `size`                                                                                      | *number*                                                                                    | :heavy_check_mark:                                                                          | Number of media items returned in this response.                                            | 50                                                                                          |
| `mediaTagVersion`                                                                           | *number*                                                                                    | :heavy_check_mark:                                                                          | The version number for media tags.                                                          | 1734362201                                                                                  |
| `mediaTagPrefix`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | The prefix used for media tag resource paths.                                               | /system/bundle/media/flags/                                                                 |
| `identifier`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | An plugin identifier for the media container.                                               | com.plexapp.plugins.library                                                                 |
| `metadata`                                                                                  | [operations.GetMediaArtsMetadata](../../../sdk/models/operations/getmediaartsmetadata.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |