# HomeVisibility

Whether this hub is visible on the home screen
  - all: Visible to all users
  - none: Visible to no users
  - admin: Visible to only admin users
  - shared: Visible to shared users


## Example Usage

```typescript
import { HomeVisibility } from "@lukehagar/plexjs/sdk/models/shared";

let value: HomeVisibility = HomeVisibility.All;
```

## Values

| Name     | Value    |
| -------- | -------- |
| `All`    | all      |
| `None`   | none     |
| `Admin`  | admin    |
| `Shared` | shared   |