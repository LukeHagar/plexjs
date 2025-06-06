# GetTopWatchedContentMediaContainer

## Example Usage

```typescript
import { GetTopWatchedContentMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetTopWatchedContentMediaContainer = {
  size: 50,
  allowSync: false,
  identifier: "com.plexapp.plugins.library",
  mediaTagPrefix: "/system/bundle/media/flags/",
  mediaTagVersion: 1734362201,
  metadata: [
    {
      ratingKey: "17",
      key: "/library/metadata/17",
      guid: "plex://movie/5d77683f6f4521001ea9dc53",
      slug: "waterloo-road",
      studio: "Universal Pictures",
      type: "movie",
      title: "Serenity",
      librarySectionTitle: "Movies",
      librarySectionID: 1,
      librarySectionKey: "/library/sections/1",
      contentRating: "PG-13",
      summary:
        "Serenity continues the story of the TV series it was based upon (\"Firefly\"). River Tam had a secret - one in which she's not even aware - so dangerous, no one's safe, as an Alliance operative's sent to capture her, and all others are considered irrelevant to his job.",
      index: 1,
      audienceRating: 9.1,
      year: 2005,
      tagline: "They aim to misbehave.",
      thumb: "/library/metadata/17/thumb/1705637165",
      art: "/library/metadata/17/art/1705637165",
      duration: 141417,
      originallyAvailableAt: new RFCDate("2005-09-29T00:00:00Z"),
      leafCount: 222,
      viewedLeafCount: 100,
      childCount: 13,
      addedAt: 1705637164,
      updatedAt: 1705637165,
      globalViewCount: 80,
      audienceRatingImage: "rottentomatoes://image.rating.upright",
      genre: [
        {
          id: 184,
          filter: "genre=184",
          tag: "Thriller",
        },
      ],
      country: [
        {
          id: 116,
          filter: "country=116",
          tag: "United States of America",
        },
      ],
      guids: [
        {
          id: "tvdb://2337",
        },
      ],
      role: [
        {
          id: 220,
          filter: "actor=220",
          tag: "Dennis Keiffer",
          tagKey: "5d77683554f42c001f8c4708",
          role: "Bar Guy (uncredited)",
          thumb:
            "https://metadata-static.plex.tv/6/people/648e9a7ea1d537bccfcd7615134b78ce.jpg",
        },
      ],
      user: [
        {
          id: 220,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `size`                                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | Number of media items returned in this response.                                                            | 50                                                                                                          |
| `allowSync`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | Indicates whether syncing is allowed.                                                                       | false                                                                                                       |
| `identifier`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | An plugin identifier for the media container.                                                               | com.plexapp.plugins.library                                                                                 |
| `mediaTagPrefix`                                                                                            | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The prefix used for media tag resource paths.                                                               | /system/bundle/media/flags/                                                                                 |
| `mediaTagVersion`                                                                                           | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The version number for media tags.                                                                          | 1734362201                                                                                                  |
| `metadata`                                                                                                  | [operations.GetTopWatchedContentMetadata](../../../sdk/models/operations/gettopwatchedcontentmetadata.md)[] | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |                                                                                                             |