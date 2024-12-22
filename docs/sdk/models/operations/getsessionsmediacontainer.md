# GetSessionsMediaContainer

## Example Usage

```typescript
import { GetSessionsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSessionsMediaContainer = {
  size: 1,
  metadata: [
    {
      addedAt: 1705543312,
      art: "/library/metadata/39904/art/1705310687",
      duration: 186240,
      grandparentArt: "/library/metadata/39904/art/1705310687",
      grandparentGuid: "plex://artist/5d07bbfd403c6402904a6480",
      grandparentKey: "/library/metadata/39904",
      grandparentRatingKey: "39904",
      grandparentThumb: "/library/metadata/39904/thumb/1705310687",
      grandparentTitle: "Green Day",
      guid: "plex://track/6535834f71f22f36f71a8e8f",
      index: 1,
      key: "/library/metadata/67085",
      librarySectionID: "3",
      librarySectionKey: "/library/sections/3",
      librarySectionTitle: "Music",
      musicAnalysisVersion: "1",
      originalTitle: "The American Dream Is Killing Me",
      parentGuid: "plex://album/65394d6d472b8ab03ef47f12",
      parentIndex: 1,
      parentKey: "/library/metadata/67084",
      parentRatingKey: "67084",
      parentStudio: "Reprise Records",
      parentThumb: "/library/metadata/67084/thumb/1705543314",
      parentTitle: "Saviors",
      parentYear: 2024,
      ratingCount: 45885,
      ratingKey: "67085",
      sessionKey: "203",
      thumb: "/library/metadata/67084/thumb/1705543314",
      title: "The American Dream Is Killing Me",
      titleSort: "American Dream Is Killing Me",
      type: "track",
      updatedAt: 1705543314,
      viewOffset: 1000,
      media: [
        {
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
        },
      ],
      user: {
        id: "1",
        thumb: "https://plex.tv/users/844780fc6f8a26b5/avatar?c=1705853661",
        title: "Blindkitty38",
      },
      player: {
        address: "10.10.10.171",
        machineIdentifier: "3tsdzir85m2onc3qyr255aq1",
        model: "standalone",
        platform: "windows",
        platformVersion: "10.0.22621",
        product: "Plex for Windows",
        profile: "Plex Desktop",
        remotePublicAddress: "68.248.140.20",
        state: "playing",
        title: "DESKTOP-BL80MTD",
        version: "1.85.0.4071-21128b56",
        local: true,
        relayed: false,
        secure: true,
        userID: 1,
      },
      session: {
        id: "93h7e00ncblxncqw9lkfaoxi",
        bandwidth: 1050,
        location: "lan",
      },
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `size`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 1                                                                                         |
| `metadata`                                                                                | [operations.GetSessionsMetadata](../../../sdk/models/operations/getsessionsmetadata.md)[] | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |