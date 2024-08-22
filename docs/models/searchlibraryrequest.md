# SearchLibraryRequest

## Example Usage

```typescript
import { SearchLibraryRequest, Type } from "@lukehagar/plexjs";

let value: SearchLibraryRequest = {
    sectionId: 149675,
    type: Type.Three,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `sectionId`                      | *number*                         | :heavy_check_mark:               | the Id of the library to query   |
| `type`                           | [models.Type](../models/type.md) | :heavy_check_mark:               | Plex content type to search for  |