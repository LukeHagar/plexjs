# Hub

## Example Usage

```typescript
import { Hub, StreamType } from "@lukehagar/plexjs/models/shared";

let value: Hub = {
  type: "track",
  context: "hub.home.onDeck",
  hubIdentifier: "home.onDeck",
  key: "/hubs/sections/home/onDeck",
  metadata: [
    {
      title: "<value>",
      type: "<value>",
      addedAt: 29550,
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
                  streamType: StreamType.Video,
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
  size: 1,
  subtype: "podcast",
  totalSize: 8,
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            | Example                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A title for this grouping of content                                                                                                                                                                                   |                                                                                                                                                                                                                        |
| `type`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | The type of the items contained in this hub, or possibly `mixed` if there are multiple types                                                                                                                           | track                                                                                                                                                                                                                  |
| `context`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    | hub.home.onDeck                                                                                                                                                                                                        |
| `hubIdentifier`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A unique identifier for the hub                                                                                                                                                                                        | home.onDeck                                                                                                                                                                                                            |
| `hubKey`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A key at which the exact content currently displayed can be fetched again. This is particularly important when a hub is marked as random and requesting the `key` may get different results. It's otherwise optional.<br/> |                                                                                                                                                                                                                        |
| `key`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | The key at which all of the content for this hub can be retrieved                                                                                                                                                      | /hubs/sections/home/onDeck                                                                                                                                                                                             |
| `metadata`                                                                                                                                                                                                             | [shared.Metadata](../../models/shared/metadata.md)[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |                                                                                                                                                                                                                        |
| `more`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | "A boolean indicating that the hub contains more than what's included in the current response."<br/>                                                                                                                   |                                                                                                                                                                                                                        |
| `promoted`                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | Indicating if the hub should be promoted to the user's homescreen                                                                                                                                                      |                                                                                                                                                                                                                        |
| `random`                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | Indicating that the contents of the hub may change on each request                                                                                                                                                     |                                                                                                                                                                                                                        |
| `size`                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    | 1                                                                                                                                                                                                                      |
| `style`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A suggestion on how this hub's contents might be displayed by a client. Some examples include `hero`, `list`, `spotlight`, and `upsell`                                                                                |                                                                                                                                                                                                                        |
| `subtype`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | The subtype of the items contained in this hub, or possibly `mixed` if there are multiple types                                                                                                                        | podcast                                                                                                                                                                                                                |
| `totalSize`                                                                                                                                                                                                            | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    | 8                                                                                                                                                                                                                      |
| `additionalProperties`                                                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |                                                                                                                                                                                                                        |