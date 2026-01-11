# StreamType

Stream type:
  - VIDEO = 1 (Video stream)
  - AUDIO = 2 (Audio stream)
  - SUBTITLE = 3 (Subtitle stream)


## Example Usage

```typescript
import { StreamType } from "@lukehagar/plexjs/models/shared";

let value: StreamType = StreamType.Video;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | 1                      |
| `Audio`                | 2                      |
| `Subtitle`             | 3                      |
| -                      | `Unrecognized<number>` |