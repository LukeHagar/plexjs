# MediaContainerWithMediaGrabOperation

## Example Usage

```typescript
import { MediaContainerWithMediaGrabOperation } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithMediaGrabOperation = {
  mediaContainer: {
    identifier: "com.plexapp.system",
    size: 1,
    mediaGrabOperation: [],
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                                       | [shared.MediaContainerWithMediaGrabOperationMediaContainer](../../models/shared/mediacontainerwithmediagraboperationmediacontainer.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}                          |