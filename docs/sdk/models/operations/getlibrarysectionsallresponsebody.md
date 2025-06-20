# GetLibrarySectionsAllResponseBody

Successful response containing media container data.

## Example Usage

```typescript
import {
  GetLibrarySectionsAllHasThumbnail,
  GetLibrarySectionsAllLibraryResponseType,
  GetLibrarySectionsAllLibraryType,
  GetLibrarySectionsAllResponseBody,
} from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetLibrarySectionsAllResponseBody = {
  mediaContainer: {
    size: 50,
    totalSize: 50,
    offset: 0,
    allowSync: false,
    art: "/:/resources/show-fanart.jpg",
    content: "secondary",
    identifier: "com.plexapp.plugins.library",
    librarySectionID: 2,
    librarySectionTitle: "TV Series",
    librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1734362201,
    thumb: "/:/resources/show.png",
    nocache: true,
    title1: "TV Series",
    title2: "By Starring Actor",
    viewGroup: "secondary",
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
        ratingKey: "58683",
        key: "/library/metadata/58683",
        guid: "plex://movie/5d7768ba96b655001fdc0408",
        slug: "4-for-texas",
        studio: "20th Century Studios",
        type: GetLibrarySectionsAllLibraryType.Movie,
        title: "Avatar: The Way of Water",
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
            type: GetLibrarySectionsAllLibraryResponseType.Background,
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
                hasThumbnail: GetLibrarySectionsAllHasThumbnail.True,
                stream: [
                  {
                    id: 1002625,
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
            tag: "Crime",
          },
        ],
        country: [
          {
            tag: "United States of America",
          },
        ],
        director: [
          {
            tag: "Danny Boyle",
          },
        ],
        writer: [
          {
            tag: "Jamie P. Hanson",
          },
        ],
        role: [
          {
            tag: "Teller",
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

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                        | [operations.GetLibrarySectionsAllMediaContainer](../../../sdk/models/operations/getlibrarysectionsallmediacontainer.md) | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |