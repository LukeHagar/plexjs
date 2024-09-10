# GetServerPreferencesResponseBody

Server Preferences

## Example Usage

```typescript
import { GetServerPreferencesResponseBody } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetServerPreferencesResponseBody = {
  mediaContainer: {
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
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `mediaContainer`                                                                                                      | [operations.GetServerPreferencesMediaContainer](../../../sdk/models/operations/getserverpreferencesmediacontainer.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |