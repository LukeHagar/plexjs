# GetRecentlyAddedMediaContainer

## Example Usage

```typescript
import { GetRecentlyAddedMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedMediaContainer = {
    size: 50,
    identifier: "com.plexapp.plugins.library",
    mediaTagPrefix: "/system/bundle/media/flags/",
    mediaTagVersion: 1680021154,
    metadata: [
        {
            librarySectionID: 1,
            librarySectionTitle: "Movies",
            librarySectionUUID: "322a231a-b7f7-49f5-920f-14c61199cd30",
            ratingKey: 59398,
            key: "/library/metadata/59398",
            guid: "plex://movie/5e161a83bea6ac004126e148",
            studio: "Marvel Studios",
            type: "movie",
            title: "Ant-Man and the Wasp: Quantumania",
            contentRating: "PG-13",
            summary:
                "Scott Lang and Hope Van Dyne along with Hank Pym and Janet Van Dyne explore the Quantum Realm where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
            rating: 4.7,
            audienceRating: 8.3,
            year: 2023,
            tagline: "Witness the beginning of a new dynasty.",
            thumb: "/library/metadata/59398/thumb/1681888010",
            art: "/library/metadata/59398/art/1681888010",
            duration: 7474422,
            originallyAvailableAt: new Date("2023-02-15T00:00:00Z"),
            addedAt: 1681803215,
            updatedAt: 1681888010,
            audienceRatingImage: "rottentomatoes://image.rating.upright",
            chapterSource: "media",
            primaryExtraKey: "/library/metadata/59399",
            ratingImage: "rottentomatoes://image.rating.rotten",
            media: [
                {
                    id: 120345,
                    duration: 7474422,
                    bitrate: 3623,
                    width: 1920,
                    height: 804,
                    aspectRatio: 2.35,
                    audioChannels: 6,
                    audioCodec: "ac3",
                    videoCodec: "h264",
                    videoResolution: 1080,
                    container: "mp4",
                    videoFrameRate: "24p",
                    optimizedForStreaming: 0,
                    videoProfile: "high",
                    part: [
                        {
                            id: 120353,
                            key: "/library/parts/120353/1681803203/file.mp4",
                            duration: 7474422,
                            file: "/movies/Ant-Man and the Wasp Quantumania (2023)/Ant-Man.and.the.Wasp.Quantumania.2023.1080p.mp4",
                            size: 3395307162,
                            container: "mp4",
                            hasThumbnail: 1,
                            videoProfile: "high",
                        },
                    ],
                },
            ],
            genre: [
                {
                    tag: "Comedy",
                },
            ],
            director: [
                {
                    tag: "Peyton Reed",
                },
            ],
            writer: [
                {
                    tag: "Jeff Loveness",
                },
            ],
            country: [
                {
                    tag: "United States of America",
                },
            ],
            role: [
                {
                    tag: "Paul Rudd",
                },
            ],
        },
    ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `size`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | 50                                                                                                  |
| `allowSync`                                                                                         | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `identifier`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | com.plexapp.plugins.library                                                                         |
| `mediaTagPrefix`                                                                                    | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | /system/bundle/media/flags/                                                                         |
| `mediaTagVersion`                                                                                   | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | 1680021154                                                                                          |
| `mixedParents`                                                                                      | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `metadata`                                                                                          | [operations.GetRecentlyAddedMetadata](../../../sdk/models/operations/getrecentlyaddedmetadata.md)[] | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |