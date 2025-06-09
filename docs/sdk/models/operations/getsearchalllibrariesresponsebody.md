# GetSearchAllLibrariesResponseBody

The libraries available on the Server

## Example Usage

```typescript
import {
  GetSearchAllLibrariesFlattenSeasons,
  GetSearchAllLibrariesHasThumbnail,
  GetSearchAllLibrariesLibraryType,
  GetSearchAllLibrariesResponseBody,
  GetSearchAllLibrariesShowOrdering,
  GetSearchAllLibrariesType,
} from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetSearchAllLibrariesResponseBody = {
  mediaContainer: {
    size: 50,
    allowSync: false,
    identifier: "com.plexapp.plugins.library",
    librarySectionID: 2,
    librarySectionTitle: "TV Series",
    librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1734362201,
    searchResult: [
      {
        score: 0.92,
        directory: {
          key: "/library/sections/3/all?actor=197429",
          librarySectionID: 1,
          librarySectionKey: "/library/sections/1",
          librarySectionTitle: "Movies",
          type: "tag",
          id: 197429,
          filter: "actor=197429",
          tag: "Ben Stiller",
          tagKey: "5d776826999c64001ec2c606",
          thumb:
            "https://metadata-static.plex.tv/5/people/57bd7c7d6c5c9e2881251b30e5603d3d.jpg",
          count: 10,
        },
        metadata: {
          ratingKey: "58683",
          key: "/library/metadata/58683",
          guid: "plex://movie/5d7768ba96b655001fdc0408",
          slug: "4-for-texas",
          studio: "20th Century Studios",
          type: GetSearchAllLibrariesType.Movie,
          title: "Avatar: The Way of Water",
          banner: "/library/metadata/58683/banner/1703239236",
          titleSort: "Whale",
          contentRating: "PG-13",
          summary:
            "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.\n"
            + "Once a familiar threat returns to finish what was previously started, Jake must\n"
            + "work with Neytiri and the army of the Na'vi race to protect their home.\n"
            + "",
          rating: 7.6,
          audienceRating: 9.2,
          year: 2022,
          tagline: "Return to Pandora.",
          thumb: "/library/metadata/58683/thumb/1703239236",
          art: "/library/metadata/58683/art/1703239236",
          theme: "/library/metadata/1/theme/1705636920",
          index: 1,
          leafCount: 14,
          viewedLeafCount: 0,
          childCount: 1,
          seasonCount: 2022,
          duration: 11558112,
          originallyAvailableAt: new RFCDate("2022-12-14"),
          addedAt: 1556281940,
          updatedAt: 1556281940,
          parentYear: 2010,
          audienceRatingImage: "rottentomatoes://image.rating.upright",
          chapterSource: "media",
          primaryExtraKey: "/library/metadata/58684",
          originalTitle: "映画 ブラッククローバー 魔法帝の剣",
          parentRatingKey: "66",
          grandparentRatingKey: "66",
          parentGuid: "plex://show/5d9c081b170e24001f2a7be4",
          grandparentGuid: "plex://show/5d9c081b170e24001f2a7be4",
          grandparentSlug: "alice-in-borderland-2020",
          grandparentKey: "/library/metadata/66",
          parentKey: "/library/metadata/66",
          grandparentTitle: "Caprica",
          grandparentThumb: "/library/metadata/66/thumb/1705716261",
          grandparentTheme: "/library/metadata/66/theme/1705716261",
          grandparentArt: "/library/metadata/66/art/1705716261",
          parentTitle: "Caprica",
          parentIndex: 1,
          parentThumb: "/library/metadata/66/thumb/1705716261",
          ratingImage: "rottentomatoes://image.rating.ripe",
          viewCount: 1,
          viewOffset: 5222500,
          skipCount: 1,
          subtype: "clip",
          lastRatedAt: 1721813113,
          createdAtAccuracy: "epoch,local",
          createdAtTZOffset: "0",
          lastViewedAt: 1682752242,
          userRating: 10,
          image: [
            {
              alt: "Episode 1",
              type: GetSearchAllLibrariesLibraryType.Background,
              url: "/library/metadata/45521/thumb/1644710589",
            },
          ],
          ultraBlurColors: {
            topLeft: "11333b",
            topRight: "0a232d",
            bottomRight: "73958",
            bottomLeft: "1f5066",
          },
          guids: [
            {
              id:
                "{\"imdbExample\":{\"summary\":\"IMDB example\",\"value\":\"imdb://tt13015952\"},\"tmdbExample\":{\"summary\":\"TMDB example\",\"value\":\"tmdb://2434012\"},\"tvdbExample\":{\"summary\":\"TVDB example\",\"value\":\"tvdb://7945991\"}}",
            },
          ],
          librarySectionID: 1,
          librarySectionTitle: "Movies",
          librarySectionKey: "/library/sections/1",
          showOrdering: GetSearchAllLibrariesShowOrdering.TvdbAbsolute,
          flattenSeasons: GetSearchAllLibrariesFlattenSeasons.Show,
          skipChildren: false,
          media: [
            {
              id: 387322,
              duration: 9610350,
              bitrate: 25512,
              width: 3840,
              height: 1602,
              aspectRatio: 2.35,
              audioChannels: 6,
              displayOffset: 50,
              audioCodec: "aac",
              videoCodec: "hevc",
              videoResolution: "4k",
              container: "mp4",
              videoFrameRate: "24p",
              videoProfile: "main 10",
              hasVoiceActivity: false,
              audioProfile: "dts",
              has64bitOffsets: false,
              part: [
                {
                  accessible: true,
                  exists: true,
                  id: 418385,
                  key: "/library/parts/418385/1735864239/file.mkv",
                  indexes: "sd",
                  duration: 9610350,
                  file: "/mnt/Movies_1/W/Wicked (2024).mkv",
                  size: 30649952104,
                  packetLength: 188,
                  container: "mkv",
                  videoProfile: "main 10",
                  audioProfile: "dts",
                  has64bitOffsets: false,
                  hasThumbnail: GetSearchAllLibrariesHasThumbnail.True,
                },
              ],
            },
          ],
          genre: [
            {
              id: 259,
              tag: "Crime",
            },
          ],
          country: [
            {
              id: 259,
              tag: "United States of America",
            },
          ],
          director: [
            {
              id: 126522,
              tag: "Danny Boyle",
              thumb:
                "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
            },
          ],
          writer: [
            {
              id: 126522,
              tag: "Jamie P. Hanson",
              thumb:
                "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
            },
          ],
          role: [
            {
              id: 126522,
              tag: "Teller",
              role: "Self - Judge",
              thumb:
                "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
            },
          ],
          location: [
            {
              path: "/TV Shows/Clarkson's Farm",
            },
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                        | [operations.GetSearchAllLibrariesMediaContainer](../../../sdk/models/operations/getsearchalllibrariesmediacontainer.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |