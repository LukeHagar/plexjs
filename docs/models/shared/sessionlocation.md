# SessionLocation

The location of the client

## Example Usage

```typescript
import { SessionLocation } from "@lukehagar/plexjs/models/shared";

let value: SessionLocation = SessionLocation.Wan;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Lan`                  | lan                    |
| `Wan`                  | wan                    |
| -                      | `Unrecognized<string>` |