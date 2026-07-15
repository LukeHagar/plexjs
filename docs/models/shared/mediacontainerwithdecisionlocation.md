# MediaContainerWithDecisionLocation

## Example Usage

```typescript
import { MediaContainerWithDecisionLocation } from "@parke.dev/plexjs/models/shared";

let value: MediaContainerWithDecisionLocation =
  MediaContainerWithDecisionLocation.SidecarSubs;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Direct`               | direct                 |
| `SidecarSubs`          | sidecar-subs           |
| `SegmentsVideo`        | segments-video         |
| `SegmentsAudio`        | segments-audio         |
| `SegmentsAv`           | segments-av            |
| `SegmentsSubs`         | segments-subs          |
| `Embedded`             | embedded               |
| `Sidecar`              | sidecar                |
| -                      | `Unrecognized<string>` |