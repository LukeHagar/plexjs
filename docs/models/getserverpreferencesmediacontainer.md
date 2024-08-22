# GetServerPreferencesMediaContainer

## Example Usage

```typescript
import { GetServerPreferencesMediaContainer } from "@lukehagar/plexjs";

let value: GetServerPreferencesMediaContainer = {
    size: 161,
    setting: [
        {
            id: "EnableDatabaseTrace",
            label: "",
            summary: "",
            type: "bool",
            default: false,
            value: false,
            hidden: true,
            advanced: false,
            group: "",
            enumValues: "1:admin only|2:everyone",
        },
    ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `size`                                   | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 161                                      |
| `setting`                                | [models.Setting](../models/setting.md)[] | :heavy_minus_sign:                       | N/A                                      |                                          |