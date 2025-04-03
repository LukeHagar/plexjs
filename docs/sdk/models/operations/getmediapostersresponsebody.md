# GetMediaPostersResponseBody

The available posters for the library item.

## Example Usage

```typescript
import { GetMediaPostersResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaPostersResponseBody = {
  mediaContainer: {
    size: 50,
    mediaTagVersion: 1734362201,
    mediaTagPrefix: "/system/bundle/media/flags/",
    identifier: "com.plexapp.plugins.library",
    metadata: [
      {
        key:
          "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
        provider: "tmdb",
        ratingKey:
          "https://image.tmdb.org/t/p/original/hntBJjqbv4m0Iyniqaztv9xaudI.jpg",
        selected: true,
        thumb:
          "https://images.plex.tv/photo?height=336&width=225&minSize=1&upscale=1&url=https%3A%2F%2Fimage%2Etmdb%2Eorg%2Ft%2Fp%2Foriginal%2FhntBJjqbv4m0Iyniqaztv9xaudI%2Ejpg",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                            | [operations.GetMediaPostersMediaContainer](../../../sdk/models/operations/getmediapostersmediacontainer.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |