# ApplyUpdatesRequest

## Example Usage

```typescript
import { ApplyUpdatesRequest, Skip, Tonight } from "@lukehagar/plexjs";

let value: ApplyUpdatesRequest = {
    tonight: Tonight.One,
    skip: Skip.One,
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tonight`                                                                                                                                                | [models.Tonight](../models/tonight.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                       | Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install | 1                                                                                                                                                        |
| `skip`                                                                                                                                                   | [models.Skip](../models/skip.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                       | Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.               | 1                                                                                                                                                        |