# MediaContainerWithSubscription

## Example Usage

```typescript
import { MediaContainerWithSubscription } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithSubscription = {
  mediaContainer: {
    identifier: "com.plexapp.system",
    size: 1,
    mediaSubscription: [],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                           | [shared.MediaContainerWithSubscriptionMediaContainer](../../models/shared/mediacontainerwithsubscriptionmediacontainer.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}              |