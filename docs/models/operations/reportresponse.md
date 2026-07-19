# ReportResponse

OK

## Example Usage

```typescript
import { ReportResponse } from "@parke.dev/plexjs/models/operations";

let value: ReportResponse = {
  mediaContainer: {
    friendlyName: "My Plex Server",
    machineIdentifier: "abc123",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mediaContainer`                                                                   | [operations.ReportMediaContainer](../../models/operations/reportmediacontainer.md) | :heavy_minus_sign:                                                                 | N/A                                                                                | {<br/>"friendlyName": "My Plex Server",<br/>"machineIdentifier": "abc123"<br/>}    |