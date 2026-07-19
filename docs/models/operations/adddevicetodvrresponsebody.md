# AddDeviceToDVRResponseBody

OK

## Example Usage

```typescript
import { AddDeviceToDVRResponseBody } from "@parke.dev/plexjs/models/operations";

let value: AddDeviceToDVRResponseBody = {
  mediaContainer: {
    mediaContainer: {
      identifier: "com.plexapp.system",
      size: 1,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                   | [operations.AddDeviceToDVRMediaContainer](../../models/operations/adddevicetodvrmediacontainer.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {<br/>"MediaContainer": {<br/>"identifier": "com.plexapp.system",<br/>"size": 1,<br/>"Status": []<br/>}<br/>} |