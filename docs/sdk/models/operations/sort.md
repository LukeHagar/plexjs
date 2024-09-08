# Sort

## Example Usage

```typescript
import { Sort } from "@lukehagar/plexjs/sdk/models/operations";

let value: Sort = {
    default: "asc",
    defaultDirection: "desc",
    descKey: "random:desc",
    firstCharacterKey: "/library/sections/1/firstCharacter",
    key: "random",
    title: "Randomly",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `default`                          | *string*                           | :heavy_minus_sign:                 | N/A                                | asc                                |
| `defaultDirection`                 | *string*                           | :heavy_minus_sign:                 | N/A                                | desc                               |
| `descKey`                          | *string*                           | :heavy_minus_sign:                 | N/A                                | random:desc                        |
| `firstCharacterKey`                | *string*                           | :heavy_minus_sign:                 | N/A                                | /library/sections/1/firstCharacter |
| `key`                              | *string*                           | :heavy_minus_sign:                 | N/A                                | random                             |
| `title`                            | *string*                           | :heavy_minus_sign:                 | N/A                                | Randomly                           |