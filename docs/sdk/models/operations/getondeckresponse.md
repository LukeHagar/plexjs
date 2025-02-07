# GetOnDeckResponse

## Example Usage

```typescript
import { GetOnDeckResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetOnDeckResponse = {
  contentType: "<value>",
  statusCode: 102,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 16,
      identifier: "com.plexapp.plugins.library",
      mediaTagPrefix: "/system/bundle/media/flags/",
      mediaTagVersion: 1680021154,
      metadata: [
        {
          librarySectionID: 2,
          librarySectionTitle: "TV Shows",
          librarySectionUUID: "4bb2521c-8ba9-459b-aaee-8ab8bc35eabd",
          ratingKey: 49564,
          key: "/library/metadata/49564",
          parentRatingKey: 49557,
          grandparentRatingKey: 49556,
          guid: "plex://episode/5ea7d7402e7ab10042e74d4f",
          parentGuid: "plex://season/602e754d67f4c8002ce54b3d",
          grandparentGuid: "plex://show/5d9c090e705e7a001e6e94d8",
          type: "episode",
          title: "Circus",
          grandparentKey: "/library/metadata/49556",
          parentKey: "/library/metadata/49557",
          librarySectionKey: "/library/sections/2",
          grandparentTitle: "Bluey (2018)",
          parentTitle: "Season 2",
          contentRating: "TV-Y",
          summary:
            "Bluey is the ringmaster in a game of circus with her friends but Hercules wants to play his motorcycle game instead. Luckily Bluey has a solution to keep everyone happy.",
          index: 33,
          parentIndex: 2,
          lastViewedAt: 1681908352,
          year: 2018,
          thumb: "/library/metadata/49564/thumb/1654258204",
          art: "/library/metadata/49556/art/1680939546",
          parentThumb: "/library/metadata/49557/thumb/1654258204",
          grandparentThumb: "/library/metadata/49556/thumb/1680939546",
          grandparentArt: "/library/metadata/49556/art/1680939546",
          grandparentTheme: "/library/metadata/49556/theme/1680939546",
          duration: 420080,
          originallyAvailableAt: new Date("2020-10-31T00:00:00Z"),
          addedAt: 1654258196,
          updatedAt: 1654258204,
          media: [
            {
              id: 80994,
              duration: 420080,
              bitrate: 1046,
              width: 1920,
              height: 1080,
              aspectRatio: 1.78,
              audioChannels: 2,
              audioCodec: "aac",
              videoCodec: "hevc",
              videoResolution: "1080",
              container: "mkv",
              videoFrameRate: "PAL",
              audioProfile: "lc",
              videoProfile: "main",
              part: [
                {
                  id: 80994,
                  key: "/library/parts/80994/1655007810/file.mkv",
                  duration: 420080,
                  file:
                    "/tvshows/Bluey (2018)/Bluey (2018) - S02E33 - Circus.mkv",
                  size: 55148931,
                  audioProfile: "lc",
                  container: "mkv",
                  videoProfile: "main",
                  stream: [
                    {
                      id: 211234,
                      streamType: 1,
                      codec: "hevc",
                      index: 0,
                      bitrate: 918,
                      language: "English",
                      languageTag: "en",
                      languageCode: "eng",
                      bitDepth: 8,
                      chromaLocation: "left",
                      chromaSubsampling: "4:2:0",
                      codedHeight: 1080,
                      codedWidth: 1920,
                      colorRange: "tv",
                      frameRate: 25,
                      height: 1080,
                      level: 120,
                      profile: "main",
                      refFrames: 1,
                      width: 1920,
                      displayTitle: "1080p (HEVC Main)",
                      extendedDisplayTitle: "1080p (HEVC Main)",
                    },
                  ],
                },
              ],
            },
          ],
          guids: [
            {
              id: "imdb://tt13303712",
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `object`                                                                                    | [operations.GetOnDeckResponseBody](../../../sdk/models/operations/getondeckresponsebody.md) | :heavy_minus_sign:                                                                          | The on Deck content                                                                         |