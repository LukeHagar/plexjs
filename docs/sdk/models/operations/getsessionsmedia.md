# GetSessionsMedia

## Example Usage

```typescript
import { GetSessionsMedia } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSessionsMedia = {
  audioChannels: 2,
  audioCodec: "flac",
  bitrate: 1014,
  container: "flac",
  duration: 186240,
  id: "130355",
  selected: true,
  part: [
    {
      container: "flac",
      duration: 186240,
      file:
        "/music/Green Day/Saviors (2024)/Green Day - Saviors - 01 - The American Dream Is Killing Me.flac",
      hasThumbnail: "1",
      id: "130625",
      key: "/library/parts/130625/1705543268/file.flac",
      size: 23644000,
      decision: "directplay",
      selected: true,
      stream: [
        {
          albumGain: "-12.94",
          albumPeak: "1.000000",
          albumRange: "4.751014",
          audioChannelLayout: "stereo",
          bitDepth: 16,
          bitrate: 1014,
          channels: 2,
          codec: "flac",
          displayTitle: "FLAC (Stereo)",
          extendedDisplayTitle: "FLAC (Stereo)",
          gain: "-12.94",
          id: "352487",
          index: 0,
          loudness: "-5.94",
          lra: "1.74",
          peak: "1.000000",
          samplingRate: 44100,
          selected: true,
          streamType: 2,
          location: "direct",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `audioChannels`                                                                   | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 2                                                                                 |
| `audioCodec`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | flac                                                                              |
| `bitrate`                                                                         | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 1014                                                                              |
| `container`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | flac                                                                              |
| `duration`                                                                        | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 186240                                                                            |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | 130355                                                                            |
| `selected`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               | true                                                                              |
| `part`                                                                            | [operations.GetSessionsPart](../../../sdk/models/operations/getsessionspart.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |