# GetGenresLibraryDirectory

## Example Usage

```typescript
import { GetGenresLibraryDirectory } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGenresLibraryDirectory = {
  fastKey: "/library/sections/10/all?genre=89",
  key: "89",
  title: "Action",
  type: "genre",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `fastKey`                         | *string*                          | :heavy_check_mark:                | N/A                               | /library/sections/10/all?genre=89 |
| `key`                             | *string*                          | :heavy_check_mark:                | N/A                               | 89                                |
| `title`                           | *string*                          | :heavy_check_mark:                | N/A                               | Action                            |
| `type`                            | *string*                          | :heavy_check_mark:                | N/A                               | genre                             |