# GetPlaylistContentsMediaContainer

## Example Usage

```typescript
import { GetPlaylistContentsMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetPlaylistContentsMediaContainer = {
  size: 2,
  composite: "/playlists/95/composite/1705717521",
  duration: 282,
  leafCount: 2,
  playlistType: "video",
  ratingKey: "95",
  smart: true,
  title: "Smart Movie Playlist",
  metadata: [
    {
      ratingKey: "17",
      key: "/library/metadata/17",
      guid: "plex://movie/5d77683f6f4521001ea9dc53",
      studio: "Universal Pictures",
      type: "movie",
      title: "Serenity",
      titleSort: "Amazing Spider-Man 2",
      librarySectionTitle: "Movies",
      librarySectionID: 1,
      librarySectionKey: "/library/sections/1",
      contentRating: "PG-13",
      summary:
        "Serenity continues the story of the TV series it was based upon (\"Firefly\"). River Tam had a secret - one in which she's not even aware - so dangerous, no one's safe, as an Alliance operative's sent to capture her, and all others are considered irrelevant to his job.",
      rating: 8.2,
      audienceRating: 9.1,
      year: 2005,
      tagline: "They aim to misbehave.",
      thumb: "/library/metadata/17/thumb/1705637165",
      art: "/library/metadata/17/art/1705637165",
      duration: 141416,
      originallyAvailableAt: new RFCDate("2005-09-29T00:00:00Z"),
      addedAt: 1705637164,
      updatedAt: 1705637165,
      audienceRatingImage: "rottentomatoes://image.rating.upright",
      hasPremiumExtras: "1",
      hasPremiumPrimaryExtra: "1",
      ratingImage: "rottentomatoes://image.rating.ripe",
      media: [
        {
          id: 15,
          duration: 141416,
          bitrate: 2273,
          width: 1920,
          height: 814,
          aspectRatio: 2.35,
          audioChannels: 2,
          audioCodec: "aac",
          videoCodec: "h264",
          videoResolution: "1080",
          container: "mp4",
          videoFrameRate: "24p",
          optimizedForStreaming: 0,
          audioProfile: "lc",
          has64bitOffsets: false,
          videoProfile: "high",
          part: [
            {
              id: 15,
              key: "/library/parts/15/1705637151/file.mp4",
              duration: 141416,
              file: "/movies/Serenity (2005)/Serenity (2005).mp4",
              size: 40271948,
              audioProfile: "lc",
              container: "mp4",
              has64bitOffsets: false,
              optimizedForStreaming: false,
              videoProfile: "high",
            },
          ],
        },
      ],
      genre: [
        {
          tag: "Action",
        },
      ],
      country: [
        {
          tag: "United States of America",
        },
      ],
      director: [
        {
          tag: "Joss Whedon",
        },
      ],
      writer: [
        {
          tag: "Joss Whedon",
        },
      ],
      role: [
        {
          tag: "Gina Torres",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 2                                                                                                         |
| `composite`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | /playlists/95/composite/1705717521                                                                        |
| `duration`                                                                                                | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 282                                                                                                       |
| `leafCount`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 2                                                                                                         |
| `playlistType`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | video                                                                                                     |
| `ratingKey`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 95                                                                                                        |
| `smart`                                                                                                   | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | true                                                                                                      |
| `title`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | Smart Movie Playlist                                                                                      |
| `metadata`                                                                                                | [operations.GetPlaylistContentsMetadata](../../../sdk/models/operations/getplaylistcontentsmetadata.md)[] | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |