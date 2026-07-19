# RemoveDeviceFromDVRResponseBody

OK

## Example Usage

```typescript
import { RemoveDeviceFromDVRResponseBody } from "@parke.dev/plexjs/models/operations";

let value: RemoveDeviceFromDVRResponseBody = {
  mediaContainer: {
    mediaContainer: {
      identifier: "com.plexapp.system",
      size: 1,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mediaContainer`                                                                                             | [operations.RemoveDeviceFromDVRMediaContainer](../../models/operations/removedevicefromdvrmediacontainer.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system",<br/>"size": 1,<br/>"Status": []<br/>}<br/>} |