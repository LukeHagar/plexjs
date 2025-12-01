# HomeVisibility

Whether this hub is visible on the home screen
  - all: Visible to all users
  - none: Visible to no users
  - admin: Visible to only admin users
  - shared: Visible to shared users


## Example Usage

```typescript
import { HomeVisibility } from "@lukehagar/plexjs/models/shared";

let value: HomeVisibility = HomeVisibility.All;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `All`                  | all                    |
| `None`                 | none                   |
| `Admin`                | admin                  |
| `Shared`               | shared                 |
| -                      | `Unrecognized<string>` |