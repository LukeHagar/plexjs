# MediaReviewsVisibility

Whether or not the account has media reviews visibility enabled

## Example Usage

```typescript
import { MediaReviewsVisibility } from "@parke.dev/plexjs/models/shared";

let value: MediaReviewsVisibility = MediaReviewsVisibility.CriticsOnly;

// Open enum: unrecognized values are captured as Unrecognized<number>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `NoOne`                | 0                      |
| `CriticsOnly`          | 1                      |
| `PlexUsersOnly`        | 2                      |
| `PlexUsersAndCritics`  | 3                      |
| -                      | `Unrecognized<number>` |