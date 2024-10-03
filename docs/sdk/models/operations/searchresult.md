# SearchResult

## Example Usage

```typescript
import {
  GetSearchAllLibrariesFlattenSeasons,
  GetSearchAllLibrariesHasThumbnail,
  GetSearchAllLibrariesLibraryType,
  GetSearchAllLibrariesOptimizedForStreaming,
  GetSearchAllLibrariesShowOrdering,
  GetSearchAllLibrariesType,
  SearchResult,
} from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: SearchResult = {
  score: 4071.83,
  metadata: {
    ratingKey: "58683",
    key: "/library/metadata/58683",
    guid: "plex://movie/5d7768ba96b655001fdc0408",
    studio: "20th Century Studios",
    skipChildren: false,
    librarySectionID: 1,
    librarySectionTitle: "Movies",
    librarySectionKey: "/library/sections/1",
    type: GetSearchAllLibrariesType.Movie,
    title: "Avatar: The Way of Water",
    slug: "4-for-texas",
    contentRating: "PG-13",
    summary:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    rating: 7.6,
    audienceRating: 9.2,
    year: 2022,
    seasonCount: 2022,
    tagline: "Return to Pandora.",
    flattenSeasons: GetSearchAllLibrariesFlattenSeasons.True,
    showOrdering: GetSearchAllLibrariesShowOrdering.Dvd,
    thumb: "/library/metadata/58683/thumb/1703239236",
    art: "/library/metadata/58683/art/1703239236",
    banner: "/library/metadata/58683/banner/1703239236",
    duration: 11558112,
    originallyAvailableAt: new RFCDate("2022-12-14T00:00:00Z"),
    addedAt: 1556281940,
    updatedAt: 1556281940,
    audienceRatingImage: "rottentomatoes://image.rating.upright",
    chapterSource: "media",
    primaryExtraKey: "/library/metadata/58684",
    ratingImage: "rottentomatoes://image.rating.ripe",
    grandparentRatingKey: "66",
    grandparentGuid: "plex://show/5d9c081b170e24001f2a7be4",
    grandparentKey: "/library/metadata/66",
    grandparentTitle: "Caprica",
    grandparentThumb: "/library/metadata/66/thumb/1705716261",
    parentSlug: "alice-in-borderland-2020",
    grandparentSlug: "alice-in-borderland-2020",
    grandparentArt: "/library/metadata/66/art/1705716261",
    grandparentTheme: "/library/metadata/66/theme/1705716261",
    media: [
      {
        id: 119534,
        duration: 11558112,
        bitrate: 25025,
        width: 3840,
        height: 2072,
        aspectRatio: 1.85,
        audioProfile: "dts",
        audioChannels: 6,
        audioCodec: "eac3",
        videoCodec: "hevc",
        videoResolution: "4k",
        container: "mkv",
        videoFrameRate: "24p",
        videoProfile: "main 10",
        hasVoiceActivity: false,
        optimizedForStreaming:
          GetSearchAllLibrariesOptimizedForStreaming.Enable,
        has64bitOffsets: false,
        part: [
          {
            id: 119542,
            key: "/library/parts/119542/1680457526/file.mkv",
            duration: 11558112,
            file:
              "/movies/Avatar The Way of Water (2022)/Avatar.The.Way.of.Water.2022.2160p.WEB-DL.DDP5.1.Atmos.DV.HDR10.HEVC-CMRG.mkv",
            size: 36158371307,
            container: "mkv",
            audioProfile: "dts",
            has64bitOffsets: false,
            optimizedForStreaming: false,
            videoProfile: "main 10",
            indexes: "sd",
            hasThumbnail: GetSearchAllLibrariesHasThumbnail.True,
            stream: [
              {
                id: 272796,
                streamType: 1,
                default: true,
                selected: true,
                codec: "h264",
                index: 0,
                bitrate: 6273,
                colorPrimaries: "bt709",
                colorRange: "tv",
                colorSpace: "bt709",
                colorTrc: "bt709",
                bitDepth: 8,
                chromaLocation: "left",
                streamIdentifier: "2",
                chromaSubsampling: "4:2:0",
                codedHeight: 1088,
                codedWidth: 1920,
                frameRate: 29.97,
                hasScalingMatrix: false,
                hearingImpaired: false,
                closedCaptions: false,
                embeddedInVideo: "1",
                height: 1080,
                level: 40,
                profile: "main",
                refFrames: 4,
                scanType: "progressive",
                width: 1920,
                displayTitle: "1080p (H.264)",
                extendedDisplayTitle: "1080p (H.264)",
                channels: 2,
                language: "English",
                languageTag: "en",
                languageCode: "eng",
                audioChannelLayout: "stereo",
                samplingRate: 48000,
                title: "English",
                canAutoSync: false,
              },
            ],
          },
        ],
      },
    ],
    genre: [
      {
        tag: "Adventure",
      },
    ],
    country: [
      {
        tag: "United States of America",
      },
    ],
    director: [
      {
        tag: "James Cameron",
      },
    ],
    writer: [
      {
        tag: "James Cameron",
      },
    ],
    collection: [
      {
        tag: "Working NL Subs",
      },
    ],
    role: [
      {
        id: 294129,
        filter: "actor=294129",
        thumb:
          "https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg",
        tag: "Mike Smith",
        tagKey: "668e7e7b22bcad9064350c91",
        role: "Self",
      },
    ],
    location: [
      {
        path: "/TV Shows/House",
      },
    ],
    mediaGuid: [
      {
        id: "imdb://tt13015952",
      },
    ],
    ultraBlurColors: {
      topLeft: "11333b",
      topRight: "0a232d",
      bottomRight: "73958",
      bottomLeft: "1f5066",
    },
    metaDataRating: [
      {
        image: "themoviedb://image.rating",
        value: 3,
        type: "audience",
      },
    ],
    image: [
      {
        alt: "Episode 1",
        type: GetSearchAllLibrariesLibraryType.Background,
        url: "/library/metadata/45521/thumb/1644710589",
      },
    ],
    titleSort: "Whale",
    viewCount: 1,
    lastViewedAt: 1682752242,
    originalTitle: "映画 ブラッククローバー 魔法帝の剣",
    viewOffset: 5222500,
    skipCount: 1,
    index: 1,
    theme: "/library/metadata/1/theme/1705636920",
    leafCount: 14,
    viewedLeafCount: 0,
    childCount: 1,
    hasPremiumExtras: "1",
    hasPremiumPrimaryExtra: "1",
    parentRatingKey: "66",
    parentGuid: "plex://show/5d9c081b170e24001f2a7be4",
    parentStudio: "UCP",
    parentKey: "/library/metadata/66",
    parentTitle: "Caprica",
    parentIndex: 1,
    parentYear: 2010,
    parentThumb: "/library/metadata/66/thumb/1705716261",
    parentTheme: "/library/metadata/66/theme/1705716261",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `score`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `metadata`                                                                                                  | [operations.GetSearchAllLibrariesMetadata](../../../sdk/models/operations/getsearchalllibrariesmetadata.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |