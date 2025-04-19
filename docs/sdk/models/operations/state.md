# State

The state of the media item

## Example Usage

```typescript
import { State } from "@lukehagar/plexjs/sdk/models/operations";

let value: State = State.Playing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Playing`              | playing                |
| `Paused`               | paused                 |
| `Stopped`              | stopped                |
| -                      | `Unrecognized<string>` |