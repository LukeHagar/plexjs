# UserProfile

## Example Usage

```typescript
import {
  AutoSelectSubtitle,
  DefaultSubtitleAccessibility,
  DefaultSubtitleForced,
  MediaReviewsVisibility,
  UserProfile,
  WatchedIndicator,
} from "@parke.dev/plexjs/models/shared";

let value: UserProfile = {
  autoSelectSubtitle: AutoSelectSubtitle.ShownWithForeignAudio,
  defaultAudioLanguage: "ja",
  defaultSubtitleAccessibility: DefaultSubtitleAccessibility.PreferSdh,
  defaultSubtitleForced: DefaultSubtitleForced.PreferForced,
  defaultSubtitleLanguage: "en",
  mediaReviewsVisibility: MediaReviewsVisibility.CriticsOnly,
  watchedIndicator: WatchedIndicator.MoviesAndTvShows,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `autoSelectAudio`                                                                          | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | If the account has automatically select audio and subtitle tracks enabled                  | true                                                                                       |
| `autoSelectSubtitle`                                                                       | [shared.AutoSelectSubtitle](../../models/shared/autoselectsubtitle.md)                     | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1                                                                                          |
| `defaultAudioAccessibility`                                                                | [shared.DefaultAudioAccessibility](../../models/shared/defaultaudioaccessibility.md)       | :heavy_minus_sign:                                                                         | N/A                                                                                        | 0                                                                                          |
| `defaultAudioLanguage`                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The preferred audio language for the account                                               | ja                                                                                         |
| `defaultAudioLanguages`                                                                    | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | The preferred audio languages for the account                                              | null                                                                                       |
| `defaultSubtitleAccessibility`                                                             | [shared.DefaultSubtitleAccessibility](../../models/shared/defaultsubtitleaccessibility.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1                                                                                          |
| `defaultSubtitleForced`                                                                    | [shared.DefaultSubtitleForced](../../models/shared/defaultsubtitleforced.md)               | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1                                                                                          |
| `defaultSubtitleLanguage`                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The preferred subtitle language for the account                                            | en                                                                                         |
| `defaultSubtitleLanguages`                                                                 | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | The preferred subtitle languages for the account                                           | null                                                                                       |
| `mediaReviewsLanguages`                                                                    | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | The languages for media reviews visibility                                                 | null                                                                                       |
| `mediaReviewsVisibility`                                                                   | [shared.MediaReviewsVisibility](../../models/shared/mediareviewsvisibility.md)             | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1                                                                                          |
| `watchedIndicator`                                                                         | [shared.WatchedIndicator](../../models/shared/watchedindicator.md)                         | :heavy_minus_sign:                                                                         | N/A                                                                                        | 1                                                                                          |