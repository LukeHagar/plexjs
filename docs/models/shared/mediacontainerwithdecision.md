# MediaContainerWithDecision

`MediaContainer` is commonly found as the root of a response and is a pretty generic container. Common attributes include `identifier` and things related to paging (`offset`, `size`, `totalSize`).

It is also common for a `MediaContainer` to contain attributes "hoisted" from its children. If every element in the container would have had the same attribute, then that attribute can be present on the container instead of being repeated on every element. For example, an album's list of tracks might include `parentTitle` on the container since all of the tracks have the same album title. A container may have a `source` attribute when all of the items came from the same source. Generally speaking, when looking for an attribute on an item, if the attribute wasn't found then the container should be checked for that attribute as well.


## Example Usage

```typescript
import { MediaContainerWithDecision } from "@lukehagar/plexjs/models/shared";

let value: MediaContainerWithDecision = {
  mediaContainer: {
    metadata: [
      {
        title: "<value>",
        type: "<value>",
        addedAt: 260702,
        art: "/library/metadata/58683/art/1703239236",
        autotag: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        chapterSource: "media",
        childCount: 1,
        country: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        director: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        genre: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        grandparentGuid: "plex://show/5d9c081b170e24001f2a7be4",
        guid: "plex://movie/5d7768ba96b655001fdc0408",
        guids: [
          {
            id:
              "{\"imdbExample\":{\"summary\":\"IMDB example\",\"value\":\"imdb://tt13015952\"},\"tmdbExample\":{\"summary\":\"TMDB example\",\"value\":\"tmdb://2434012\"},\"tvdbExample\":{\"summary\":\"TVDB example\",\"value\":\"tvdb://7945991\"}}",
          },
        ],
        key: "<key>",
        lastViewedAt: 1556281940,
        media: [
          {
            aspectRatio: 2.35,
            audioChannels: 2,
            audioCodec: "aac",
            audioProfile: "lc",
            bitrate: 5612,
            container: "mov",
            duration: 150192,
            has64bitOffsets: false,
            hasVoiceActivity: true,
            height: 544,
            id: 1,
            optimizedForStreaming: false,
            part: [
              {
                accessible: true,
                audioProfile: "lc",
                container: "mov",
                duration: 150192,
                exists: true,
                file: "/home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov",
                has64bitOffsets: false,
                id: 1,
                indexes: "sd",
                key: "/library/parts/1/1531779263/file.mov",
                optimizedForStreaming: false,
                size: 105355654,
                stream: [
                  {
                    default: true,
                    audioChannelLayout: "5.1(side)",
                    channels: 6,
                    bitDepth: 10,
                    doviblCompatID: 1,
                    doviblPresent: true,
                    dovielPresent: false,
                    doviLevel: 6,
                    doviPresent: true,
                    doviProfile: 8,
                    dovirpuPresent: true,
                    doviVersion: "1.0",
                    bitrate: 24743,
                    canAutoSync: false,
                    chromaLocation: "topleft",
                    chromaSubsampling: "4:2:0",
                    codedHeight: 1608,
                    codedWidth: 3840,
                    closedCaptions: true,
                    codec: "hevc",
                    colorPrimaries: "bt2020",
                    colorRange: "tv",
                    colorSpace: "bt2020nc",
                    colorTrc: "smpte2084",
                    displayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
                    extendedDisplayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
                    frameRate: 23.976,
                    hasScalingMatrix: false,
                    height: 1602,
                    id: 1002625,
                    index: 0,
                    key: "/library/streams/216389",
                    language: "English",
                    languageCode: "eng",
                    languageTag: "en",
                    format: "srt",
                    headerCompression: true,
                    level: 150,
                    original: true,
                    profile: "main 10",
                    refFrames: 1,
                    samplingRate: 48000,
                    scanType: "progressive",
                    embeddedInVideo: "progressive",
                    selected: true,
                    forced: true,
                    hearingImpaired: true,
                    dub: true,
                    title: "SDH",
                    streamIdentifier: 1,
                    width: 3840,
                  },
                ],
                videoProfile: "main",
              },
            ],
            videoCodec: "h264",
            videoFrameRate: "24p",
            videoProfile: "main",
            videoResolution: "720",
            width: 1280,
          },
        ],
        originallyAvailableAt: new Date("2022-12-14"),
        parentGuid: "plex://show/5d9c081b170e24001f2a7be4",
        ratingArray: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        role: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        theme: "/library/metadata/1/theme/1705636920",
        thumb: "/library/metadata/58683/thumb/1703239236",
        writer: [
          {
            filter: "actor=49",
            ratingKey: "58683",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                   | [shared.MediaContainerWithDecisionMediaContainer](../../models/shared/mediacontainerwithdecisionmediacontainer.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |