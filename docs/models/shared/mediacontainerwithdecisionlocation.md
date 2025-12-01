# MediaContainerWithDecisionLocation

## Example Usage

```typescript
import { MediaContainerWithDecisionLocation } from "@lukehagar/plexjs/models/shared";

let value: MediaContainerWithDecisionLocation =
  MediaContainerWithDecisionLocation.SidecarSubs;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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