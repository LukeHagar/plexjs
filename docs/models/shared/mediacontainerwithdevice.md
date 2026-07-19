# MediaContainerWithDevice

## Example Usage

```typescript
import { MediaContainerWithDevice } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDevice = {
  mediaContainer: {
    identifier: "com.plexapp.system.devices",
    size: 1,
    device: [],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                               | [shared.MediaContainerWithDeviceMediaContainer](../../models/shared/mediacontainerwithdevicemediacontainer.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>}  |