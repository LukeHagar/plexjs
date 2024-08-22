# GetSearchResultsResponse

## Example Usage

```typescript
import { GetSearchResultsResponse } from "@lukehagar/plexjs";

let value: GetSearchResultsResponse = {
    contentType: "<value>",
    statusCode: 105907,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 26,
            identifier: "com.plexapp.plugins.library",
            mediaTagPrefix: "/system/bundle/media/flags/",
            mediaTagVersion: 1680021154,
            metadata: [
                {
                    librarySectionID: 1,
                    librarySectionTitle: "Movies",
                    librarySectionUUID: "322a231a-b7f7-49f5-920f-14c61199cd30",
                    sourceTitle: "Hera",
                    ratingKey: 10398,
                    key: "/library/metadata/10398",
                    guid: "plex://movie/5d7768284de0ee001fcc8f52",
                    studio: "Paramount",
                    type: "movie",
                    title: "Mission: Impossible",
                    contentRating: "PG-13",
                    summary:
                        "When Ethan Hunt the leader of a crack espionage team whose perilous operation has gone awry with no explanation discovers that a mole has penetrated the CIA he's surprised to learn that he's the No. 1 suspect. To clear his name Hunt now must ferret out the real double agent and in the process even the score.",
                    rating: 6.6,
                    audienceRating: 7.1,
                    year: 1996,
                    tagline: "Expect the impossible.",
                    thumb: "/library/metadata/10398/thumb/1679505055",
                    art: "/library/metadata/10398/art/1679505055",
                    duration: 6612628,
                    originallyAvailableAt: new Date("1996-05-22T00:00:00Z"),
                    addedAt: 1589234571,
                    updatedAt: 1679505055,
                    audienceRatingImage: "rottentomatoes://image.rating.upright",
                    chapterSource: "media",
                    primaryExtraKey: "/library/metadata/10501",
                    ratingImage: "rottentomatoes://image.rating.ripe",
                    media: [
                        {
                            id: 26610,
                            duration: 6612628,
                            bitrate: 4751,
                            width: 1916,
                            height: 796,
                            aspectRatio: 2.35,
                            audioChannels: 6,
                            audioCodec: "aac",
                            videoCodec: "hevc",
                            videoResolution: 1080,
                            container: "mkv",
                            videoFrameRate: "24p",
                            audioProfile: "lc",
                            videoProfile: "main 10",
                            part: [
                                {
                                    id: 26610,
                                    key: "/library/parts/26610/1589234571/file.mkv",
                                    duration: 6612628,
                                    file: "/movies/Mission Impossible (1996)/Mission Impossible (1996) Bluray-1080p.mkv",
                                    size: 3926903851,
                                    audioProfile: "lc",
                                    container: "mkv",
                                    videoProfile: "main 10",
                                },
                            ],
                        },
                    ],
                    genre: [
                        {
                            tag: "Action",
                        },
                    ],
                    director: [
                        {
                            tag: "Brian De Palma",
                        },
                    ],
                    writer: [
                        {
                            tag: "David Koepp",
                        },
                    ],
                    country: [
                        {
                            tag: "United States of America",
                        },
                    ],
                    role: [
                        {
                            tag: "Tom Cruise",
                        },
                    ],
                },
            ],
            provider: [
                {
                    key: "/system/search",
                    title: "Local Network",
                    type: "mixed",
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | HTTP response content type for this operation                                    |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP response status code for this operation                                     |
| `rawResponse`                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)            | :heavy_check_mark:                                                               | Raw HTTP response; suitable for custom response parsing                          |
| `object`                                                                         | [models.GetSearchResultsResponseBody](../models/getsearchresultsresponsebody.md) | :heavy_minus_sign:                                                               | Search Results                                                                   |