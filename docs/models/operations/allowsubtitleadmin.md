# AllowSubtitleAdmin

Indicates if the user can manage subtitles.

## Example Usage

```typescript
import { AllowSubtitleAdmin } from "@lukehagar/plexjs/models/operations";

let value: AllowSubtitleAdmin = AllowSubtitleAdmin.Enable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Disable`              | 0                      |
| `Enable`               | 1                      |
| -                      | `Unrecognized<number>` |