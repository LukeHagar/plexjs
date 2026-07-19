# MediaContainerWithSorts

## Example Usage

```typescript
import { MediaContainerWithSorts } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithSorts = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                             | [shared.MediaContainerWithSortsMediaContainer](../../models/shared/mediacontainerwithsortsmediacontainer.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>} |