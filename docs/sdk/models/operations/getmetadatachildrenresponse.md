# GetMetadataChildrenResponse

## Example Usage

```typescript
import { GetMetadataChildrenResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMetadataChildrenResponse = {
  contentType: "<value>",
  statusCode: 202,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 3,
      allowSync: true,
      art: "/library/metadata/30072/art/1705739923",
      identifier: "com.plexapp.plugins.library",
      key: "30072",
      librarySectionID: 2,
      librarySectionTitle: "TV Shows",
      librarySectionUUID: "4bb2521c-8ba9-459b-aaee-8ab8bc35eabd",
      mediaTagPrefix: "/system/bundle/media/flags/",
      mediaTagVersion: 1701731894,
      nocache: true,
      parentIndex: 1,
      parentTitle: "Reacher",
      parentYear: 2022,
      summary:
        "When retired Military Police Officer Jack Reacher is arrested for a murder he did not commit, he finds himself in the middle of a deadly conspiracy full of dirty cops, shady businessmen, and scheming politicians. With nothing but his wits, he must figure out what is happening in Margrave, Georgia.",
      theme: "/library/metadata/30072/theme/1705739923",
      thumb: "/library/metadata/30072/thumb/1705739923",
      title1: "TV Shows",
      title2: "Reacher",
      viewGroup: "season",
      viewMode: 65593,
      directory: [
        {
          leafCount: 16,
          thumb: "/library/metadata/30072/thumb/1705739923",
          viewedLeafCount: 16,
          key: "/library/metadata/30072/allLeaves",
          title: "All episodes",
        },
      ],
      metadata: [
        {
          ratingKey: "66488",
          key: "/library/metadata/66488/children",
          parentRatingKey: "30072",
          guid: "plex://season/652aea6549508477c34c6000",
          parentGuid: "plex://show/5d9c09190aaccd001f8f42f0",
          parentStudio: "Amazon Studios",
          type: "season",
          title: "Season 2",
          parentKey: "/library/metadata/30072",
          parentTitle: "Reacher",
          summary:
            "Based on\"Bad Luck and Trouble,\" when members of Reacher's old military unit start turning up dead, Reacher has just one thing on his mind-revenge.",
          index: 2,
          parentIndex: 1,
          viewCount: 11,
          lastViewedAt: 1705646565,
          parentYear: 2022,
          thumb: "/library/metadata/66488/thumb/1703065033",
          art: "/library/metadata/30072/art/1705739923",
          parentThumb: "/library/metadata/30072/thumb/1705739923",
          parentTheme: "/library/metadata/30072/theme/1705739923",
          leafCount: 8,
          viewedLeafCount: 8,
          addedAt: 1702602021,
          updatedAt: 1703065033,
          userRating: 9,
          skipCount: 1,
          lastRatedAt: 1703881224,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `object`                                                                                                        | [operations.GetMetadataChildrenResponseBody](../../../sdk/models/operations/getmetadatachildrenresponsebody.md) | :heavy_minus_sign:                                                                                              | The children of the library item.                                                                               |