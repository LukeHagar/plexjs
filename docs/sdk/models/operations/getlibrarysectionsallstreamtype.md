# GetLibrarySectionsAllStreamType

Stream type:
  - 1 = video
  - 2 = audio
  - 3 = subtitle


## Example Usage

```typescript
import { GetLibrarySectionsAllStreamType } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibrarySectionsAllStreamType =
  GetLibrarySectionsAllStreamType.Video;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Video`                | 1                      |
| `Audio`                | 2                      |
| `Subtitle`             | 3                      |
| -                      | `Unrecognized<number>` |