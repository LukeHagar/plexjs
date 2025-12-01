# StreamDecision

## Example Usage

```typescript
import { StreamDecision } from "@lukehagar/plexjs/models/shared";

let value: StreamDecision = StreamDecision.Unavailable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Copy`                 | copy                   |
| `Transcode`            | transcode              |
| `Burn`                 | burn                   |
| `Unavailable`          | unavailable            |
| `Ignore`               | ignore                 |
| `None`                 | none                   |
| -                      | `Unrecognized<string>` |