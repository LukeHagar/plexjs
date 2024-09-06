# GetLibraryItemsResponse

## Example Usage

```typescript
import { GetLibraryItemsResponse } from "@lukehagar/plexjs";
import { RFCDate } from "@lukehagar/plexjs/types";

let value: GetLibraryItemsResponse = {
    contentType: "<value>",
    statusCode: 666767,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 70,
            allowSync: true,
            art: "/:/resources/movie-fanart.jpg",
            identifier: "com.plexapp.plugins.library",
            librarySectionTitle: "Movies",
            librarySectionUUID: "322a231a-b7f7-49f5-920f-14c61199cd30",
            mediaTagPrefix: "/system/bundle/media/flags/",
            mediaTagVersion: 1701731894,
            thumb: "/:/resources/movie.png",
            title1: "Movies",
            title2: "Recently Released",
            viewGroup: "movie",
            viewMode: 65592,
            mixedParents: true,
            metadata: [
                {
                    ratingKey: "58683",
                    key: "/library/metadata/58683",
                    guid: "plex://movie/5d7768ba96b655001fdc0408",
                    studio: "20th Century Studios",
                    type: "movie",
                    title: "Avatar: The Way of Water",
                    contentRating: "PG-13",
                    summary:
                        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
                    rating: 7.6,
                    audienceRating: 9.2,
                    year: 2022,
                    tagline: "Return to Pandora.",
                    thumb: "/library/metadata/58683/thumb/1703239236",
                    art: "/library/metadata/58683/art/1703239236",
                    duration: 11558112,
                    originallyAvailableAt: new RFCDate("2022-12-14T00:00:00Z"),
                    addedAt: 1680457607,
                    updatedAt: 1703239236,
                    audienceRatingImage: "rottentomatoes://image.rating.upright",
                    chapterSource: "media",
                    primaryExtraKey: "/library/metadata/58684",
                    ratingImage: "rottentomatoes://image.rating.ripe",
                    grandparentRatingKey: "66",
                    grandparentGuid: "plex://show/5d9c081b170e24001f2a7be4",
                    grandparentKey: "/library/metadata/66",
                    grandparentTitle: "Caprica",
                    grandparentThumb: "/library/metadata/66/thumb/1705716261",
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
                            audioChannels: 6,
                            audioCodec: "eac3",
                            videoCodec: "hevc",
                            videoResolution: "4k",
                            container: "mkv",
                            videoFrameRate: "24p",
                            videoProfile: "main 10",
                            part: [
                                {
                                    id: 119542,
                                    key: "/library/parts/119542/1680457526/file.mkv",
                                    duration: 11558112,
                                    file: "/movies/Avatar The Way of Water (2022)/Avatar.The.Way.of.Water.2022.2160p.WEB-DL.DDP5.1.Atmos.DV.HDR10.HEVC-CMRG.mkv",
                                    size: 36158371307,
                                    container: "mkv",
                                    videoProfile: "main 10",
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
                    role: [
                        {
                            tag: "Sigourney Weaver",
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
            ],
        },
    },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contentType`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | HTTP response content type for this operation                                  |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP response status code for this operation                                   |
| `rawResponse`                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)          | :heavy_check_mark:                                                             | Raw HTTP response; suitable for custom response parsing                        |
| `object`                                                                       | [models.GetLibraryItemsResponseBody](../models/getlibraryitemsresponsebody.md) | :heavy_minus_sign:                                                             | The contents of the library by section and tag                                 |