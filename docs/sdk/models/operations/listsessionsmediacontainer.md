# ListSessionsMediaContainer

`MediaContainer` is the root element of most Plex API responses. It serves as a generic container for various types of content (Metadata, Hubs, Directories, etc.) and includes pagination information (offset, size, totalSize) when applicable.
Common attributes: - identifier: Unique identifier for this container - size: Number of items in this response page - totalSize: Total number of items available (for pagination) - offset: Starting index of this page (for pagination)
The container often "hoists" common attributes from its children. For example, if all tracks in a container share the same album title, the `parentTitle` attribute may appear on the MediaContainer rather than being repeated on each track.


## Example Usage

```typescript
import { ListSessionsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: ListSessionsMediaContainer = {
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
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                             | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `offset`                                                                                                                                 | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The offset of where this container page starts among the total objects available. Also provided in the `X-Plex-Container-Start` header.<br/> |
| `size`                                                                                                                                   | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `totalSize`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The total size of objects available. Also provided in the `X-Plex-Container-Total-Size` header.<br/>                                     |
| `metadata`                                                                                                                               | [operations.ListSessionsMetadatum](../../../sdk/models/operations/listsessionsmetadatum.md)[]                                            | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |