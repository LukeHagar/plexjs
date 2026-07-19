# GetFirstCharactersResponse

OK

## Example Usage

```typescript
import { GetFirstCharactersResponse } from "@parke.dev/plexjs/models/operations";

let value: GetFirstCharactersResponse = {
  mediaContainer: {
    identifier: "com.plexapp.plugins.library",
    offset: 0,
    size: 1,
    totalSize: 100,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                           | [operations.GetFirstCharactersMediaContainer](../../models/operations/getfirstcharactersmediacontainer.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | {<br/>"identifier": "com.plexapp.plugins.library",<br/>"offset": 0,<br/>"size": 1,<br/>"totalSize": 100<br/>} |