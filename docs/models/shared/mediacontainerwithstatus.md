# MediaContainerWithStatus

## Example Usage

```typescript
import { MediaContainerWithStatus } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithStatus = {
  mediaContainer: {
    identifier: "com.plexapp.system",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                               | [shared.MediaContainerWithStatusMediaContainer](../../models/shared/mediacontainerwithstatusmediacontainer.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}  |