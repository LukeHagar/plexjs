# GetMetaDataByRatingKeyResponse

## Example Usage

```typescript
import { GetMetaDataByRatingKeyResponse } from "@lukehagar/plexjs";
import { RFCDate } from "@lukehagar/plexjs/types";

let value: GetMetaDataByRatingKeyResponse = {
    contentType: "<value>",
    statusCode: 358152,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
    object: {
        mediaContainer: {
            size: 1,
            allowSync: true,
            identifier: "com.plexapp.plugins.library",
            librarySectionID: 1,
            librarySectionTitle: "Movies",
            librarySectionUUID: "cfc899d7-3000-46f6-8489-b9592714ada5",
            mediaTagPrefix: "/system/bundle/media/flags/",
            mediaTagVersion: 1698860922,
            metadata: [
                {
                    ratingKey: "17",
                    key: "/library/metadata/17",
                    guid: "plex://movie/5d77683f6f4521001ea9dc53",
                    studio: "Universal Pictures",
                    type: "movie",
                    title: "Serenity",
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
                    duration: 141417,
                    originallyAvailableAt: new RFCDate("2005-09-29T00:00:00Z"),
                    addedAt: 1705637164,
                    updatedAt: 1705637165,
                    audienceRatingImage: "rottentomatoes://image.rating.upright",
                    hasPremiumPrimaryExtra: "1",
                    ratingImage: "rottentomatoes://image.rating.ripe",
                    media: [
                        {
                            id: 15,
                            duration: 141417,
                            bitrate: 2278,
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
                                    duration: 141417,
                                    file: "/movies/Serenity (2005)/Serenity (2005).mp4",
                                    size: 40271948,
                                    audioProfile: "lc",
                                    container: "mp4",
                                    has64bitOffsets: false,
                                    optimizedForStreaming: false,
                                    videoProfile: "high",
                                    stream: [
                                        {
                                            id: 29,
                                            streamType: 2,
                                            default: true,
                                            codec: "aac",
                                            index: 0,
                                            bitrate: 128,
                                            bitDepth: 8,
                                            chromaLocation: "left",
                                            chromaSubsampling: "14520",
                                            codedHeight: 816,
                                            codedWidth: 1920,
                                            colorPrimaries: "bt709",
                                            colorRange: "tv",
                                            colorSpace: "bt709",
                                            colorTrc: "bt709",
                                            frameRate: 24,
                                            hasScalingMatrix: false,
                                            height: 814,
                                            level: 40,
                                            profile: "lc",
                                            refFrames: 4,
                                            scanType: "progressive",
                                            streamIdentifier: "1",
                                            width: 1920,
                                            displayTitle: "English (AAC Stereo)",
                                            extendedDisplayTitle: "English (AAC Stereo)",
                                            selected: true,
                                            channels: 2,
                                            language: "English",
                                            languageTag: "en",
                                            languageCode: "eng",
                                            samplingRate: 44100,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
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
                    ratings: [
                        {
                            image: "themoviedb://image.rating",
                            value: 7.4,
                            type: "audience",
                        },
                    ],
                    director: [
                        {
                            id: 130,
                            filter: "director=130",
                            tag: "Joss Whedon",
                            tagKey: "5d776828880197001ec90e8f",
                            thumb: "https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg",
                        },
                    ],
                    writer: [
                        {
                            id: 132,
                            filter: "writer=132",
                            tag: "Joss Whedon",
                            tagKey: "5d776828880197001ec90e8f",
                            thumb: "https://metadata-static.plex.tv/people/5d776828880197001ec90e8f.jpg",
                        },
                    ],
                    role: [
                        {
                            id: 220,
                            filter: "actor=220",
                            tag: "Dennis Keiffer",
                            tagKey: "5d77683554f42c001f8c4708",
                            role: "Bar Guy (uncredited)",
                            thumb: "https://metadata-static.plex.tv/6/people/648e9a7ea1d537bccfcd7615134b78ce.jpg",
                        },
                    ],
                    producer: [
                        {
                            id: 221,
                            filter: "producer=221",
                            tag: "Barry Mendel",
                            tagKey: "5d776826961905001eb90e2b",
                            thumb: "https://metadata-static.plex.tv/8/people/87877371326a964634d18556d94547e1.jpg",
                        },
                    ],
                },
            ],
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `contentType`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP response content type for this operation                                                |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP response status code for this operation                                                 |
| `rawResponse`                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                        | :heavy_check_mark:                                                                           | Raw HTTP response; suitable for custom response parsing                                      |
| `object`                                                                                     | [models.GetMetaDataByRatingKeyResponseBody](../models/getmetadatabyratingkeyresponsebody.md) | :heavy_minus_sign:                                                                           | The metadata of the library item.                                                            |