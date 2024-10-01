# GetMediaProvidersResponseBody

Media providers and their features

## Example Usage

```typescript
import { GetMediaProvidersResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaProvidersResponseBody = {
  mediaContainer: {
    mediaProvider: [
      {
        feature: [
          {
            type: "<value>",
            flavor: "global",
            scrobbleKey: "/:/scrobble/new",
            unscrobbleKey: "/:/unscrobble/new",
            action: [
              {
                id: "addToContinueWatching",
                key: "/actions/addToContinueWatching",
              },
            ],
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                | [operations.GetMediaProvidersMediaContainer](../../../sdk/models/operations/getmediaprovidersmediacontainer.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |