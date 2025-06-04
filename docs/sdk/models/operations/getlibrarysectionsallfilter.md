# GetLibrarySectionsAllFilter

## Example Usage

```typescript
import { GetLibrarySectionsAllFilter } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibrarySectionsAllFilter = {
  filter: "genre",
  filterType: "string",
  key: "/library/sections/2/genre?type=2",
  title: "Genre",
  type: "filter",
  advanced: true,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `filter`                         | *string*                         | :heavy_check_mark:               | N/A                              | genre                            |
| `filterType`                     | *string*                         | :heavy_check_mark:               | N/A                              | string                           |
| `key`                            | *string*                         | :heavy_check_mark:               | N/A                              | /library/sections/2/genre?type=2 |
| `title`                          | *string*                         | :heavy_check_mark:               | N/A                              | Genre                            |
| `type`                           | *string*                         | :heavy_check_mark:               | N/A                              | filter                           |
| `advanced`                       | *boolean*                        | :heavy_minus_sign:               | N/A                              | true                             |