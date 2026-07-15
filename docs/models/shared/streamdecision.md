# StreamDecision

## Example Usage

```typescript
import { StreamDecision } from "@parke.dev/plexjs/models/shared";

let value: StreamDecision = StreamDecision.Unavailable;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Copy`                 | copy                   |
| `Transcode`            | transcode              |
| `Burn`                 | burn                   |
| `Unavailable`          | unavailable            |
| `Ignore`               | ignore                 |
| `None`                 | none                   |
| -                      | `Unrecognized<string>` |