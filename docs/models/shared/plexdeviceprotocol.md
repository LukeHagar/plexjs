# PlexDeviceProtocol

The protocol used for the connection (http, https, etc)

## Example Usage

```typescript
import { PlexDeviceProtocol } from "@lukehagar/plexjs/models/shared";

let value: PlexDeviceProtocol = PlexDeviceProtocol.Http;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Http`                 | http                   |
| `Https`                | https                  |
| -                      | `Unrecognized<string>` |