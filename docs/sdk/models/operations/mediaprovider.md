# MediaProvider

## Example Usage

```typescript
import { MediaProvider } from "@lukehagar/plexjs/sdk/models/operations";

let value: MediaProvider = {
  feature: [
    {
      type: "<value>",
      flavor: "global",
      scrobbleKey: "/:/scrobble/new",
      unscrobbleKey: "/:/unscrobble/new",
      action: [
        {
          id: "addToContinueWatching",
          key: "/actions/addToContinueWatching",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `identifier`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `title`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `types`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `protocols`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `feature`                                                         | [operations.Feature](../../../sdk/models/operations/feature.md)[] | :heavy_minus_sign:                                                | N/A                                                               |