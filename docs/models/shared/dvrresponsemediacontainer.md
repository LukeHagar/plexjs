# DVRResponseMediaContainer

## Example Usage

```typescript
import { DVRResponseMediaContainer } from "@parke.dev/plexjs/models/shared";

let value: DVRResponseMediaContainer = {
  mediaContainer: {
    identifier: "com.plexapp.system",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                 | [shared.DVRResponseMediaContainerMediaContainer](../../models/shared/dvrresponsemediacontainermediacontainer.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}    |
| `dvr`                                                                                                            | [shared.Dvr](../../models/shared/dvr.md)[]                                                                       | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |