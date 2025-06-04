# GetMediaArtsResponseBody

The available background artwork for the library item.

## Example Usage

```typescript
import { GetMediaArtsResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaArtsResponseBody = {
  mediaContainer: {
    size: 50,
    mediaTagVersion: 1734362201,
    mediaTagPrefix: "/system/bundle/media/flags/",
    identifier: "com.plexapp.plugins.library",
    metadata: [],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                      | [operations.GetMediaArtsMediaContainer](../../../sdk/models/operations/getmediaartsmediacontainer.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |