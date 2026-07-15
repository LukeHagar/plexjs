# PlexDeviceProtocol

The protocol used for the connection (http, https, etc)

## Example Usage

```typescript
import { PlexDeviceProtocol } from "@parke.dev/plexjs/models/shared";

let value: PlexDeviceProtocol = PlexDeviceProtocol.Http;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Http`                 | http                   |
| `Https`                | https                  |
| -                      | `Unrecognized<string>` |