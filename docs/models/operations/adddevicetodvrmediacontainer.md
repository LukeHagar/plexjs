# AddDeviceToDVRMediaContainer

## Example Usage

```typescript
import { AddDeviceToDVRMediaContainer } from "@parke.dev/plexjs/models/operations";

let value: AddDeviceToDVRMediaContainer = {
  mediaContainer: {
    identifier: "com.plexapp.system",
    size: 1,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                                               | [operations.AddDeviceToDVRMediaContainerMediaContainer](../../models/operations/adddevicetodvrmediacontainermediacontainer.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}                  |
| `dvr`                                                                                                                          | [shared.Dvr](../../models/shared/dvr.md)[]                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |