# MediaReviewsVisibility

Whether or not the account has media reviews visibility enabled

## Example Usage

```typescript
import { MediaReviewsVisibility } from "@lukehagar/plexjs/models/shared";

let value: MediaReviewsVisibility = MediaReviewsVisibility.CriticsOnly;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `NoOne`                | 0                      |
| `CriticsOnly`          | 1                      |
| `PlexUsersOnly`        | 2                      |
| `PlexUsersAndCritics`  | 3                      |
| -                      | `Unrecognized<number>` |