# PlaySessionStateNotificationState

## Example Usage

```typescript
import { PlaySessionStateNotificationState } from "@parke.dev/plexjs/models/shared";

let value: PlaySessionStateNotificationState =
  PlaySessionStateNotificationState.Paused;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Playing`              | playing                |
| `Paused`               | paused                 |
| `Stopped`              | stopped                |
| -                      | `Unrecognized<string>` |