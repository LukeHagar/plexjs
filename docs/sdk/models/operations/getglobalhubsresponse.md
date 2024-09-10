# GetGlobalHubsResponse

## Example Usage

```typescript
import { GetGlobalHubsResponse } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGlobalHubsResponse = {
  contentType: "<value>",
  statusCode: 149675,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  object: {
    mediaContainer: {
      size: 8,
      allowSync: true,
      identifier: "com.plexapp.plugins.library",
      hub: [
        {
          hubKey: "/library/metadata/50768,65523,58188,57341,57302,57070",
          key:
            "/playlists/all?type=15&sort=lastViewedAt:desc&playlistType=video,audio",
          title: "Recent Playlists",
          type: "playlist",
          hubIdentifier: "home.playlists",
          context: "hub.home.playlists",
          size: 6,
          more: true,
          style: "shelf",
          promoted: true,
          metadata: [
            {
              ratingKey: "57070",
              key: "/playlists/57070/items",
              guid:
                "com.plexapp.agents.none://9fee6c5b-3143-4923-813e-57bd0190056c",
              type: "playlist",
              title: "November Movie Day",
              titleSort: "Tracks",
              summary: "",
              smart: false,
              playlistType: "video",
              composite: "/playlists/57070/composite/1668787730",
              icon: "playlist://image.smart",
              viewCount: 2,
              lastViewedAt: 1668787732,
              duration: 16873000,
              leafCount: 3,
              addedAt: 1668779618,
              updatedAt: 1668787730,
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `object`                                                                                            | [operations.GetGlobalHubsResponseBody](../../../sdk/models/operations/getglobalhubsresponsebody.md) | :heavy_minus_sign:                                                                                  | returns global hubs                                                                                 |