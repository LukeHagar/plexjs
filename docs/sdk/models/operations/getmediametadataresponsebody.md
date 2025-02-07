# GetMediaMetaDataResponseBody

The metadata of the library item.

## Example Usage

```typescript
import { GetMediaMetaDataResponseBody } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetMediaMetaDataResponseBody = {
  mediaContainer: {
    size: 50,
    allowSync: false,
    identifier: "com.plexapp.plugins.library",
    librarySectionID: 2,
    librarySectionTitle: "TV Series",
    librarySectionUUID: "e69655a2-ef48-4aba-bb19-0cc34d1e7d36",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1734362201,
    metadata: [
      {
        ratingKey: "44288",
        parentRatingKey: "48047",
        grandparentRatingKey: "45520",
        parentGuid: "plex://season/618b89208dde18df707ad15c",
        grandparentGuid: "plex://show/5e16253691c20300412003a8",
        grandparentSlug: "alice-in-borderland-2020",
        grandparentKey: "/library/metadata/45520",
        parentKey: "/library/metadata/48047",
        key: "/library/metadata/44288/children",
        guid: "plex://show/5d9c08254eefaa001f5d6dcb",
        slug: "better-call-saul",
        studio: "Sony Pictures Television",
        type: "show",
        title: "Better Call Saul",
        originalTitle: "Wicked: Part I",
        librarySectionTitle: "TV Series ",
        librarySectionID: 2,
        librarySectionKey: "/library/sections/2",
        contentRating: "TV-MA",
        summary:
          "Before Saul Goodman, he was Jimmy McGill. And if you're calling Jimmy, you're in real trouble. The prequel to \"Breaking Bad\" follows small-time attorney, Jimmy McGill, as he transforms into Walter White's morally challenged lawyer, Saul Goodman.",
        index: 1,
        grandparentTitle: "Alice in Borderland",
        parentTitle: "Season 2",
        audienceRating: 8.7,
        viewCount: 4,
        skipCount: 1,
        lastViewedAt: 1625764795,
        year: 2015,
        tagline: "Make the call",
        chapterSource: "media",
        primaryExtraKey: "/library/metadata/134704",
        thumb: "/library/metadata/44288/thumb/1736487993",
        art: "/library/metadata/44288/art/1736487993",
        theme: "/library/metadata/44288/theme/1736487993",
        duration: 2700000,
        originallyAvailableAt: new RFCDate("2015-02-08"),
        leafCount: 63,
        viewedLeafCount: 4,
        childCount: 6,
        addedAt: 1625505101,
        updatedAt: 1736487993,
        audienceRatingImage: "themoviedb://image.rating",
        parentIndex: 2,
        parentThumb: "/library/metadata/48047/thumb/1671800243",
        grandparentThumb: "/library/metadata/45520/thumb/1736488003",
        grandparentArt: "/library/metadata/45520/art/1736488003",
        media: [
          {
            id: 387322,
            duration: 9610350,
            bitrate: 25512,
            width: 3840,
            height: 1602,
            aspectRatio: 2.35,
            audioChannels: 6,
            audioCodec: "eac3",
            videoCodec: "hevc",
            videoResolution: "4k",
            container: "mkv",
            videoFrameRate: "24p",
            videoProfile: "main 10",
            hasVoiceActivity: false,
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
                container: "mkv",
                videoProfile: "main 10",
                stream: [
                  {
                    id: 1002625,
                    streamType: 1,
                    default: true,
                    codec: "hevc",
                    index: 0,
                    bitrate: 24743,
                    language: "English",
                    languageTag: "en",
                    languageCode: "eng",
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
                    colorPrimaries: "bt2020",
                    colorRange: "tv",
                    colorSpace: "bt2020nc",
                    colorTrc: "smpte2084",
                    frameRate: 23.976,
                    height: 1602,
                    level: 150,
                    original: true,
                    hasScalingMatrix: false,
                    profile: "main 10",
                    scanType: "progressive",
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
        image: [
          {
            alt: "Better Call Saul",
            type: "coverPoster",
            url: "/library/metadata/44288/thumb/1736487993",
          },
        ],
        ultraBlurColors: {
          topLeft: "11333a",
          topRight: "1d2721",
          bottomRight: "5c451d",
          bottomLeft: "372c10",
        },
        genre: [
          {
            id: 1057,
            filter: "genre=1057",
            tag: "Crime",
          },
        ],
        country: [
          {
            id: 58591,
            filter: "country=58591",
            tag: "United States of America",
          },
        ],
        guids: [
          {
            id: "imdb://tt3032476",
          },
        ],
        rating: [
          {
            image: "imdb://image.rating",
            value: 9,
            type: "audience",
          },
        ],
        role: [
          {
            id: 109501,
            filter: "actor=109501",
            tag: "Bob Odenkirk",
            tagKey: "5d77683254f42c001f8c3f69",
            role: "Jimmy McGill",
            thumb:
              "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg",
          },
        ],
        director: [
          {
            id: 109501,
            filter: "actor=109501",
            tag: "Bob Odenkirk",
            tagKey: "5d77683254f42c001f8c3f69",
            role: "Jimmy McGill",
            thumb:
              "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg",
          },
        ],
        writer: [
          {
            id: 109501,
            filter: "actor=109501",
            tag: "Bob Odenkirk",
            tagKey: "5d77683254f42c001f8c3f69",
            role: "Jimmy McGill",
            thumb:
              "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg",
          },
        ],
        producer: [
          {
            id: 109501,
            filter: "actor=109501",
            tag: "Bob Odenkirk",
            tagKey: "5d77683254f42c001f8c3f69",
            role: "Jimmy McGill",
            thumb:
              "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg",
          },
        ],
        similar: [
          {
            id: 26,
            filter: "similar=26",
            tag: "Breaking Bad",
          },
        ],
        location: [
          {
            path: "/TV Shows/Better Call Saul",
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
| `mediaContainer`                                                                                              | [operations.GetMediaMetaDataMediaContainer](../../../sdk/models/operations/getmediametadatamediacontainer.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |