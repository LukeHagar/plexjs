# MediaReviewsVisibility

Whether or not the account has media reviews visibility enabled

## Example Usage

```typescript
import { MediaReviewsVisibility } from "@lukehagar/plexjs/sdk/models/shared";

let value: MediaReviewsVisibility = MediaReviewsVisibility.CriticsOnly;
```

## Values

| Name                  | Value                 |
| --------------------- | --------------------- |
| `NoOne`               | 0                     |
| `CriticsOnly`         | 1                     |
| `PlexUsersOnly`       | 2                     |
| `PlexUsersAndCritics` | 3                     |