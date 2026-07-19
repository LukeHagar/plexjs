# MediaContainerWithMetadata

A MediaContainer that includes metadata items. When `includeCollections=1` is passed to endpoints such as `/library/sections/{sectionId}/all`, this container may also include `Collection` items.

## Example Usage

```typescript
import { MediaContainerWithMetadata } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithMetadata = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
    metadata: [],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                   | [shared.MediaContainerWithMetadataMediaContainer](../../models/shared/mediacontainerwithmetadatamediacontainer.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}      |