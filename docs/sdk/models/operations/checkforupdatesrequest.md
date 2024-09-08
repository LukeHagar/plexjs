# CheckForUpdatesRequest

## Example Usage

```typescript
import { CheckForUpdatesRequest, Download } from "@lukehagar/plexjs/sdk/models/operations";

let value: CheckForUpdatesRequest = {
    download: Download.One,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `download`                                                        | [operations.Download](../../../sdk/models/operations/download.md) | :heavy_minus_sign:                                                | Indicate that you want to start download any updates found.       | 1                                                                 |