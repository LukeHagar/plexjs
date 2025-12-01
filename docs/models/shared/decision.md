# Decision

## Example Usage

```typescript
import { Decision } from "@lukehagar/plexjs/models/shared";

let value: Decision = Decision.Directplay;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Directplay`           | directplay             |
| `Transcode`            | transcode              |
| `None`                 | none                   |
| -                      | `Unrecognized<string>` |