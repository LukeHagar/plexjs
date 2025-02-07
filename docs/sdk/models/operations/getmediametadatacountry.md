# GetMediaMetaDataCountry

## Example Usage

```typescript
import { GetMediaMetaDataCountry } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataCountry = {
  id: 58591,
  filter: "country=58591",
  tag: "United States of America",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *number*                           | :heavy_check_mark:                 | The unique country identifier.     | 58591                              |
| `filter`                           | *string*                           | :heavy_check_mark:                 | The filter string for the country. | country=58591                      |
| `tag`                              | *string*                           | :heavy_check_mark:                 | The country name.                  | United States of America           |