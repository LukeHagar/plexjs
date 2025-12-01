# Activity

## Example Usage

```typescript
import { Activity } from "@lukehagar/plexjs/models/operations";

let value: Activity = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cancellable`                                                             | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether this activity can be cancelled                          |
| `context`                                                                 | Record<string, *any*>                                                     | :heavy_minus_sign:                                                        | An object with additional values                                          |
| `progress`                                                                | *number*                                                                  | :heavy_minus_sign:                                                        | A progress percentage.  A value of -1 means the progress is indeterminate |
| `response`                                                                | Record<string, *any*>                                                     | :heavy_minus_sign:                                                        | An object with the response to the async opperation                       |
| `subtitle`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | A user-friendly sub-title for this activity                               |
| `title`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | A user-friendly title for this activity                                   |
| `type`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The type of activity                                                      |
| `userID`                                                                  | *number*                                                                  | :heavy_minus_sign:                                                        | The user this activity belongs to                                         |
| `uuid`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | The ID of the activity                                                    |