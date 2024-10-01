# Feature

## Example Usage

```typescript
import { Feature } from "@lukehagar/plexjs/sdk/models/operations";

let value: Feature = {
  type: "<value>",
  flavor: "global",
  scrobbleKey: "/:/scrobble/new",
  unscrobbleKey: "/:/unscrobble/new",
  action: [
    {
      id: "addToContinueWatching",
      key: "/actions/addToContinueWatching",
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                   | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `type`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `flavor`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | global                                                                                                  |
| `scrobbleKey`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | /:/scrobble/new                                                                                         |
| `unscrobbleKey`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | /:/unscrobble/new                                                                                       |
| `directory`                                                                                             | [operations.GetMediaProvidersDirectory](../../../sdk/models/operations/getmediaprovidersdirectory.md)[] | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `action`                                                                                                | [operations.Action](../../../sdk/models/operations/action.md)[]                                         | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |                                                                                                         |