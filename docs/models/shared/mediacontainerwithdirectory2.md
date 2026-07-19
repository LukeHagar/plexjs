# MediaContainerWithDirectory2

## Example Usage

```typescript
import { MediaContainerWithDirectory2 } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDirectory2 = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    size: 1,
    directory: [],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                       | [shared.MediaContainerWithDirectoryMediaContainer2](../../models/shared/mediacontainerwithdirectorymediacontainer2.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}          |