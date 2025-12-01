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
} from "@lukehagar/plexjs/sdk/models/shared";

let value: UserProfile = {
  defaultAudioLanguage: "ja",
  defaultAudioLanguages: null,
  defaultSubtitleLanguage: "en",
  defaultSubtitleLanguages: null,
  autoSelectSubtitle: AutoSelectSubtitle.ShownWithForeignAudio,
  defaultSubtitleAccessibility: DefaultSubtitleAccessibility.PreferSdh,
  defaultSubtitleForced: DefaultSubtitleForced.PreferForced,
  watchedIndicator: WatchedIndicator.MoviesAndTvShows,
  mediaReviewsVisibility: MediaReviewsVisibility.CriticsOnly,
  mediaReviewsLanguages: null,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `autoSelectAudio`                                                                                 | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | If the account has automatically select audio and subtitle tracks enabled                         | true                                                                                              |
| `defaultAudioLanguage`                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | The preferred audio language for the account                                                      | ja                                                                                                |
| `defaultAudioAccessibility`                                                                       | [shared.DefaultAudioAccessibility](../../../sdk/models/shared/defaultaudioaccessibility.md)       | :heavy_minus_sign:                                                                                | N/A                                                                                               | 0                                                                                                 |
| `defaultAudioLanguages`                                                                           | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The preferred audio languages for the account                                                     | <nil>                                                                                             |
| `defaultSubtitleLanguage`                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | The preferred subtitle language for the account                                                   | en                                                                                                |
| `defaultSubtitleLanguages`                                                                        | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The preferred subtitle languages for the account                                                  | <nil>                                                                                             |
| `autoSelectSubtitle`                                                                              | [shared.AutoSelectSubtitle](../../../sdk/models/shared/autoselectsubtitle.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1                                                                                                 |
| `defaultSubtitleAccessibility`                                                                    | [shared.DefaultSubtitleAccessibility](../../../sdk/models/shared/defaultsubtitleaccessibility.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1                                                                                                 |
| `defaultSubtitleForced`                                                                           | [shared.DefaultSubtitleForced](../../../sdk/models/shared/defaultsubtitleforced.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1                                                                                                 |
| `watchedIndicator`                                                                                | [shared.WatchedIndicator](../../../sdk/models/shared/watchedindicator.md)                         | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1                                                                                                 |
| `mediaReviewsVisibility`                                                                          | [shared.MediaReviewsVisibility](../../../sdk/models/shared/mediareviewsvisibility.md)             | :heavy_minus_sign:                                                                                | N/A                                                                                               | 1                                                                                                 |
| `mediaReviewsLanguages`                                                                           | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The languages for media reviews visibility                                                        | <nil>                                                                                             |