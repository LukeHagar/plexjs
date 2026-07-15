# MediaContainerWithDecisionStreamType

Stream type:
  - VIDEO = 1 (Video stream)
  - AUDIO = 2 (Audio stream)
  - SUBTITLE = 3 (Subtitle stream)


## Example Usage

```typescript
import { MediaContainerWithDecisionStreamType } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDecisionStreamType =
  MediaContainerWithDecisionStreamType.Video;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | 1                      |
| `Audio`                | 2                      |
| `Subtitle`             | 3                      |
| -                      | `Unrecognized<number>` |