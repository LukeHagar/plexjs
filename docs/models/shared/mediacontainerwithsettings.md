# MediaContainerWithSettings

## Example Usage

```typescript
import { MediaContainerWithSettings } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithSettings = {
  mediaContainer: {
    identifier: "com.plexapp.system.settings",
    size: 1,
    setting: [],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                   | [shared.MediaContainerWithSettingsMediaContainer](../../models/shared/mediacontainerwithsettingsmediacontainer.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}      |