# Decision

## Example Usage

```typescript
import { Decision } from "@parke.dev/plexjs/models/shared";

let value: Decision = Decision.Directplay;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Directplay`           | directplay             |
| `Transcode`            | transcode              |
| `None`                 | none                   |
| -                      | `Unrecognized<string>` |