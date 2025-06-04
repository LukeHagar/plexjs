# GetRecentlyAddedResponseBody

A successful response with recently added content.

## Example Usage

```typescript
import {
  GetRecentlyAddedHubsResponseType,
  GetRecentlyAddedHubsType,
  GetRecentlyAddedResponseBody,
  HasThumbnail,
  StreamType,
} from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetRecentlyAddedResponseBody = {
  mediaContainer: {
    size: 50,
    totalSize: 50,
    offset: 0,
    allowSync: false,
    identifier: "com.plexapp.plugins.library",
    meta: {
      type: [
        {
          key: "/library/sections/2/all?type=2",
          type: "filter",
          subtype: "clip",
          title: "TV Shows",
          active: false,
          filter: [
            {
              filter: "genre",
              filterType: "string",
              key: "/library/sections/2/genre?type=2",
              title: "Genre",
              type: "filter",
              advanced: true,
            },
          ],
          sort: [
            {
              default: "asc",
              active: false,
              descKey: "titleSort:desc",
              firstCharacterKey: "/library/sections/2/firstCharacter",
              key: "titleSort",
              title: "Title",
            },
          ],
          field: [
            {
              key: "show.title",
              title: "Show Title",
              type: "string",
              subType: "rating",
            },
          ],
        },
      ],
      fieldType: [
        {
          type: "tag",
          operator: [
            {
              key: "=",
              title: "is",
            },
          ],
        },
      ],
    },
    metadata: [
      {
        addedAt: 1556281940,
        art: "/library/metadata/58683/art/1703239236",
        audienceRatingImage: "rottentomatoes://image.rating.upright",
        audienceRating: 9.2,
        chapterSource: "media",
        childCount: 1,
        contentRating: "PG-13",
        createdAtAccuracy: "epoch,local",
        createdAtTZOffset: "0",
        duration: 11558112,
        grandparentArt: "/library/metadata/66/art/1705716261",
        grandparentGuid: "plex://show/5d9c081b170e24001f2a7be4",
        grandparentKey: "/library/metadata/66",
        grandparentRatingKey: "66",
        grandparentSlug: "alice-in-borderland-2020",
        grandparentTheme: "/library/metadata/66/theme/1705716261",
        grandparentThumb: "/library/metadata/66/thumb/1705716261",
        grandparentTitle: "Caprica",
        guid: "plex://movie/5d7768ba96b655001fdc0408",
        index: 1,
        key: "/library/metadata/58683",
        lastRatedAt: 1721813113,
        lastViewedAt: 1682752242,
        leafCount: 14,
        librarySectionID: 1,
        librarySectionKey: "/library/sections/1",
        librarySectionTitle: "Movies",
        originalTitle: "映画 ブラッククローバー 魔法帝の剣",
        originallyAvailableAt: new RFCDate("2022-12-14"),
        parentGuid: "plex://show/5d9c081b170e24001f2a7be4",
        parentIndex: 1,
        parentKey: "/library/metadata/66",
        parentRatingKey: "66",
        parentSlug: "alice-in-borderland-2020",
        parentStudio: "UCP",
        parentTheme: "/library/metadata/66/theme/1705716261",
        parentThumb: "/library/metadata/66/thumb/1705716261",
        parentTitle: "Caprica",
        parentYear: 2010,
        primaryExtraKey: "/library/metadata/58684",
        ratingImage: "rottentomatoes://image.rating.ripe",
        ratingKey: "58683",
        rating: 7.6,
        seasonCount: 2022,
        skipCount: 1,
        slug: "4-for-texas",
        studio: "20th Century Studios",
        subtype: "clip",
        summary:
          "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.\n"
          + "Once a familiar threat returns to finish what was previously started, Jake must\n"
          + "work with Neytiri and the army of the Na'vi race to protect their home.\n"
          + "",
        tagline: "Return to Pandora.",
        theme: "/library/metadata/1/theme/1705636920",
        thumb: "/library/metadata/58683/thumb/1703239236",
        titleSort: "Whale",
        title: "Avatar: The Way of Water",
        type: GetRecentlyAddedHubsType.Movie,
        updatedAt: 1556281940,
        userRating: 10,
        viewCount: 1,
        viewOffset: 5222500,
        viewedLeafCount: 0,
        year: 2022,
        image: [
          {
            alt: "Episode 1",
            type: GetRecentlyAddedHubsResponseType.Background,
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
            audioCodec: "eac3",
            videoCodec: "hevc",
            videoResolution: "4k",
            container: "mkv",
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
                hasThumbnail: HasThumbnail.True,
                stream: [
                  {
                    id: 1002625,
                    streamType: StreamType.Video,
                    format: "srt",
                    default: true,
                    codec: "hevc",
                    index: 0,
                    bitrate: 24743,
                    language: "English",
                    languageTag: "en",
                    languageCode: "eng",
                    headerCompression: true,
                    doviblCompatID: 1,
                    doviblPresent: true,
                    dovielPresent: false,
                    doviLevel: 6,
                    doviPresent: true,
                    doviProfile: 8,
                    dovirpuPresent: true,
                    doviVersion: "1.0",
                    bitDepth: 10,
                    chromaLocation: "topleft",
                    chromaSubsampling: "4:2:0",
                    codedHeight: 1608,
                    codedWidth: 3840,
                    closedCaptions: true,
                    colorPrimaries: "bt2020",
                    colorRange: "tv",
                    colorSpace: "bt2020nc",
                    colorTrc: "smpte2084",
                    frameRate: 23.976,
                    key: "/library/streams/216389",
                    height: 1602,
                    level: 150,
                    original: true,
                    hasScalingMatrix: false,
                    profile: "main 10",
                    scanType: "progressive",
                    embeddedInVideo: "progressive",
                    refFrames: 1,
                    width: 3840,
                    displayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
                    extendedDisplayTitle: "4K DoVi/HDR10 (HEVC Main 10)",
                    selected: true,
                    forced: true,
                    channels: 6,
                    audioChannelLayout: "5.1(side)",
                    samplingRate: 48000,
                    canAutoSync: false,
                    hearingImpaired: true,
                    dub: true,
                    title: "SDH",
                  },
                ],
              },
            ],
          },
        ],
        genre: [
          {
            id: 259,
            filter: "genre=19",
            tag: "Crime",
          },
        ],
        country: [
          {
            id: 259,
            tag: "United States of America",
            filter: "country=19",
          },
        ],
        director: [
          {
            id: 126522,
            filter: "director=235876",
            tag: "Danny Boyle",
            tagKey: "5d776831151a60001f24d031",
            thumb:
              "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
          },
        ],
        writer: [
          {
            id: 126522,
            filter: "writer=126522",
            tag: "Jamie P. Hanson",
            tagKey: "5d77683d85719b001f3a535e",
            thumb:
              "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
          },
        ],
        role: [
          {
            id: 126522,
            filter: "actor=126522",
            tag: "Teller",
            tagKey: "5d77683d85719b001f3a535e",
            role: "Self - Judge",
            thumb:
              "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
          },
        ],
        producer: [
          {
            id: 126522,
            filter: "producer=126522",
            tag: "Amelia Knapp",
            tagKey: "5d77683d85719b001f3a535e",
            thumb:
              "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
          },
        ],
        rating1: [
          {
            image: "imdb://image.rating",
            value: 5.1,
            type: "audience",
          },
        ],
        similar: [
          {
            id: 259,
            filter: "similar=259",
            tag: "Criss Angel Mindfreak",
          },
        ],
        location: [
          {
            path: "/TV Shows/Clarkson's Farm",
          },
        ],
        collection: [
          {
            tag: "My Awesome Collection",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                              | [operations.GetRecentlyAddedMediaContainer](../../../sdk/models/operations/getrecentlyaddedmediacontainer.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |