# GetSearchAllLibrariesCountry

## Example Usage

```typescript
import { GetSearchAllLibrariesCountry } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesCountry = {
  id: 259,
  tag: "United States of America",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The unique identifier for the country.<br/>NOTE: This is different for each Plex server and is not globally unique.<br/> | 259                                                                                                              |
| `tag`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The country of origin of this media item                                                                         | United States of America                                                                                         |