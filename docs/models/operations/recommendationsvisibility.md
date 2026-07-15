# RecommendationsVisibility

The visibility of this hub in recommendations:
  - all: Visible to all users
  - none: Visible to no users
  - admin: Visible to only admin users
  - shared: Visible to shared users


## Example Usage

```typescript
import { RecommendationsVisibility } from "@parke.dev/plexjs/models/operations";

let value: RecommendationsVisibility = RecommendationsVisibility.Admin;

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