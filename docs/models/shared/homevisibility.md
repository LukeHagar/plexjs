# HomeVisibility

Whether this hub is visible on the home screen
  - all: Visible to all users
  - none: Visible to no users
  - admin: Visible to only admin users
  - shared: Visible to shared users

## Example Usage

```typescript
import { HomeVisibility } from "@parke.dev/plexjs/models/shared";

let value: HomeVisibility = HomeVisibility.All;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `All`                  | all                    |
| `None`                 | none                   |
| `Admin`                | admin                  |
| `Shared`               | shared                 |
| -                      | `Unrecognized<string>` |