# MediaContainerWithDecision

`MediaContainer` is commonly found as the root of a response and is a pretty generic container. Common attributes include `identifier` and things related to paging (`offset`, `size`, `totalSize`).

It is also common for a `MediaContainer` to contain attributes "hoisted" from its children. If every element in the container would have had the same attribute, then that attribute can be present on the container instead of being repeated on every element. For example, an album's list of tracks might include `parentTitle` on the container since all of the tracks have the same album title. A container may have a `source` attribute when all of the items came from the same source. Generally speaking, when looking for an attribute on an item, if the attribute wasn't found then the container should be checked for that attribute as well.

## Example Usage

```typescript
import { MediaContainerWithDecision } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDecision = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                   | [shared.MediaContainerWithDecisionMediaContainer](../../models/shared/mediacontainerwithdecisionmediacontainer.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}      |