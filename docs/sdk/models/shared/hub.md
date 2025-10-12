# Hub

## Example Usage

```typescript
import { Hub } from "@lukehagar/plexjs/sdk/models/shared";

let value: Hub = {
  type: "track",
  context: "hub.home.onDeck",
  hubIdentifier: "home.onDeck",
  key: "/hubs/sections/home/onDeck",
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
| `metadata`                                                                                                                                                                                                             | [shared.Metadata](../../../sdk/models/shared/metadata.md)[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |                                                                                                                                                                                                                        |
| `more`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | "A boolean indicating that the hub contains more than what's included in the current response."<br/>                                                                                                                   |                                                                                                                                                                                                                        |
| `promoted`                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | Indicating if the hub should be promoted to the user's homescreen                                                                                                                                                      |                                                                                                                                                                                                                        |
| `random`                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | Indicating that the contents of the hub may change on each request                                                                                                                                                     |                                                                                                                                                                                                                        |
| `size`                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    | 1                                                                                                                                                                                                                      |
| `style`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A suggestion on how this hub's contents might be displayed by a client. Some examples include `hero`, `list`, `spotlight`, and `upsell`                                                                                |                                                                                                                                                                                                                        |
| `subtype`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | The subtype of the items contained in this hub, or possibly `mixed` if there are multiple types                                                                                                                        | podcast                                                                                                                                                                                                                |
| `totalSize`                                                                                                                                                                                                            | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    | 8                                                                                                                                                                                                                      |
| `additionalProperties`                                                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |                                                                                                                                                                                                                        |