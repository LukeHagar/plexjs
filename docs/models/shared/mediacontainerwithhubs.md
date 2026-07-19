# MediaContainerWithHubs

## Example Usage

```typescript
import { MediaContainerWithHubs } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithHubs = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
    hub: [],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                           | [shared.MediaContainerWithHubsMediaContainer](../../models/shared/mediacontainerwithhubsmediacontainer.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>} |