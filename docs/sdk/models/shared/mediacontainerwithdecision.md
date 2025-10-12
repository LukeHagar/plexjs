# MediaContainerWithDecision

`MediaContainer` is commonly found as the root of a response and is a pretty generic container. Common attributes include `identifier` and things related to paging (`offset`, `size`, `totalSize`).

It is also common for a `MediaContainer` to contain attributes "hoisted" from its children. If every element in the container would have had the same attribute, then that attribute can be present on the container instead of being repeated on every element. For example, an album's list of tracks might include `parentTitle` on the container since all of the tracks have the same album title. A container may have a `source` attribute when all of the items came from the same source. Generally speaking, when looking for an attribute on an item, if the attribute wasn't found then the container should be checked for that attribute as well.


## Example Usage

```typescript
import { MediaContainerWithDecision } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaContainerWithDecision = {
  mediaContainer: {
    metadata: [
      {
        autotag: [
          {
            filter: "actor=49",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        country: [
          {
            filter: "actor=49",
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
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        guid: [
          {
            filter: "actor=49",
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
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
                audioProfile: "lc",
                container: "mov",
                duration: 150192,
                file: "/home/schuyler/Videos/Trailers/Cloud Atlas (2012).mov",
                has64bitOffsets: false,
                id: 1,
                key: "/library/parts/1/1531779263/file.mov",
                optimizedForStreaming: false,
                size: 105355654,
                stream: [
                  {
                    default: true,
                    audioChannelLayout: "stereo",
                    bitDepth: 8,
                    bitrate: 5466,
                    canAutoSync: true,
                    chromaLocation: "topleft",
                    chromaSubsampling: "4:2:0",
                    codec: "h264",
                    colorPrimaries: "bt709",
                    colorRange: "tv",
                    colorSpace: "bt709",
                    colorTrc: "bt709",
                    displayTitle: "English (H.264 Main)",
                    frameRate: 23.976,
                    hasScalingMatrix: false,
                    height: 544,
                    id: 1,
                    index: 0,
                    key: "/library/streams/1",
                    language: "English",
                    languageCode: "eng",
                    level: 31,
                    profile: "main",
                    refFrames: 2,
                    samplingRate: 48000,
                    streamIdentifier: 1,
                    streamType: 1,
                    width: 1280,
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
        ratingArray: [
          {
            filter: "actor=49",
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
            role: "Secretary",
            tag: "Shaun Lawton",
            tagKey: "5d3ee12c4cde6a001c3e0b27",
            thumb:
              "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
          },
        ],
        writer: [
          {
            filter: "actor=49",
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

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                          | [shared.MediaContainerWithDecisionMediaContainer](../../../sdk/models/shared/mediacontainerwithdecisionmediacontainer.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |