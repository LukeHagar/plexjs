# GetMediaArtsResponseBody

The available background artwork for the library item.

## Example Usage

```typescript
import { GetMediaArtsResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaArtsResponseBody = {
  mediaContainer: {
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
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                      | [operations.GetMediaArtsMediaContainer](../../../sdk/models/operations/getmediaartsmediacontainer.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |