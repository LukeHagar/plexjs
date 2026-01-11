# MediaContainerWithDecisionMediaContainer

`MediaContainer` is the root element of most Plex API responses. It serves as a generic container for various types of content (Metadata, Hubs, Directories, etc.) and includes pagination information (offset, size, totalSize) when applicable.
Common attributes: - identifier: Unique identifier for this container - size: Number of items in this response page - totalSize: Total number of items available (for pagination) - offset: Starting index of this page (for pagination)
The container often "hoists" common attributes from its children. For example, if all tracks in a container share the same album title, the `parentTitle` attribute may appear on the MediaContainer rather than being repeated on each track.


## Example Usage

```typescript
import { MediaContainerWithDecisionMediaContainer, MediaContainerWithDecisionStreamType } from "@lukehagar/plexjs/models/shared";

let value: MediaContainerWithDecisionMediaContainer = {
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
                  streamType: MediaContainerWithDecisionStreamType.Video,
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
};
```

## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `offset`                                                                                                                                                                                                       | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | The offset of where this container page starts among the total objects available. Also provided in the `X-Plex-Container-Start` header.<br/>                                                                   |
| `size`                                                                                                                                                                                                         | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `totalSize`                                                                                                                                                                                                    | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | The total size of objects available. Also provided in the `X-Plex-Container-Total-Size` header.<br/>                                                                                                           |
| `availableBandwidth`                                                                                                                                                                                           | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | The maximum available bitrate when the decision was rendered.                                                                                                                                                  |
| `directPlayDecisionCode`                                                                                                                                                                                       | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `directPlayDecisionText`                                                                                                                                                                                       | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `generalDecisionCode`                                                                                                                                                                                          | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | The overall decision. 1xxx are playback can succeed, 2xxx are a general error (such as insufficient bandwidth), 3xxx are errors in direct play, and 4xxx are errors in transcodes. Same codes are used in all. |
| `generalDecisionText`                                                                                                                                                                                          | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `mdeDecisionCode`                                                                                                                                                                                              | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | The code indicating the status of evaluation of playback when client indicates `hasMDE=1`                                                                                                                      |
| `mdeDecisionText`                                                                                                                                                                                              | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | Descriptive text for the above code                                                                                                                                                                            |
| `metadata`                                                                                                                                                                                                     | [shared.MediaContainerWithDecisionMetadatum](../../models/shared/mediacontainerwithdecisionmetadatum.md)[]                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `transcodeDecisionCode`                                                                                                                                                                                        | *number*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `transcodeDecisionText`                                                                                                                                                                                        | *string*                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |