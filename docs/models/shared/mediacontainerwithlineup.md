# MediaContainerWithLineup

## Example Usage

```typescript
import { MediaContainerWithLineup } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithLineup = {
  mediaContainer: {
    identifier: "tv.plex.provider.epg",
    size: 1,
    lineup: [],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                               | [shared.MediaContainerWithLineupMediaContainer](../../models/shared/mediacontainerwithlineupmediacontainer.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}  |