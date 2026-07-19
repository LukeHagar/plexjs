# MediaContainerWithPlaylistMetadata

## Example Usage

```typescript
import { MediaContainerWithPlaylistMetadata } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithPlaylistMetadata = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
    metadata: [],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                                   | [shared.MediaContainerWithPlaylistMetadataMediaContainer](../../models/shared/mediacontainerwithplaylistmetadatamediacontainer.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}                      |