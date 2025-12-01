# RecommendationsVisibility

The visibility of this hub in recommendations:
  - all: Visible to all users
  - none: Visible to no users
  - admin: Visible to only admin users
  - shared: Visible to shared users


## Example Usage

```typescript
import { RecommendationsVisibility } from "@lukehagar/plexjs/models/operations";

let value: RecommendationsVisibility = RecommendationsVisibility.Admin;
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