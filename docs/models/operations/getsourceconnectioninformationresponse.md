# GetSourceConnectionInformationResponse

OK

## Example Usage

```typescript
import { GetSourceConnectionInformationResponse } from "@parke.dev/plexjs/models/operations";

let value: GetSourceConnectionInformationResponse = {
  mediaContainer: {
    device: {
      connection: [
        {
          uri: "http://192.168.1.1:32400",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                                   | [operations.GetSourceConnectionInformationMediaContainer](../../models/operations/getsourceconnectioninformationmediacontainer.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | {<br/>"Device": {<br/>"Connection": [<br/>{<br/>"uri": "http://192.168.1.1:32400"<br/>}<br/>]<br/>}<br/>}                          |