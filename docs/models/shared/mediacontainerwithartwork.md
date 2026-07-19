# MediaContainerWithArtwork

## Example Usage

```typescript
import { MediaContainerWithArtwork } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithArtwork = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                 | [shared.MediaContainerWithArtworkMediaContainer](../../models/shared/mediacontainerwithartworkmediacontainer.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}    |