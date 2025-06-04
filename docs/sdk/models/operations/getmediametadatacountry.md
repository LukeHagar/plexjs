# GetMediaMetaDataCountry

The filter query string for country media items.

## Example Usage

```typescript
import { GetMediaMetaDataCountry } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataCountry = {
  id: 259,
  tag: "United States of America",
  filter: "country=19",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier for the country.<br/>NOTE: This is different for each Plex server and is not globally unique.<br/> | 259                                                                                                              |
| `tag`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The country of origin of this media item                                                                         | United States of America                                                                                         |
| `filter`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | country=19                                                                                                       |