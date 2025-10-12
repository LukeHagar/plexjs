# ReportResponseBody

OK

## Example Usage

```typescript
import { ReportResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: ReportResponseBody = {
  mediaContainer: {
    livetv: 7,
    machineIdentifier: "0123456789abcdef0123456789abcdef012345678",
    musicAnalysis: 2,
    myPlexMappingState: "mapped",
    myPlexSigninState: "ok",
    offlineTranscode: 1,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                          | [operations.ReportMediaContainer](../../../sdk/models/operations/reportmediacontainer.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |