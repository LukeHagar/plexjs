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
} from "@lukehagar/plexjs/sdk/models/operations";

let value: UserProfile = {
  autoSelectAudio: true,
  defaultAudioLanguage: "ja",
  defaultSubtitleLanguage: "en",
  autoSelectSubtitle: AutoSelectSubtitle.Enable,
  defaultSubtitleAccessibility: DefaultSubtitleAccessibility.Enable,
  defaultSubtitleForced: DefaultSubtitleForced.Enable,
  watchedIndicator: WatchedIndicator.Enable,
  mediaReviewsVisibility: MediaReviewsVisibility.Enable,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `autoSelectAudio`                                                                                         | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | If the account has automatically select audio and subtitle tracks enabled                                 | true                                                                                                      |
| `defaultAudioLanguage`                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The preferred audio language for the account                                                              | ja                                                                                                        |
| `defaultSubtitleLanguage`                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The preferred subtitle language for the account                                                           | en                                                                                                        |
| `autoSelectSubtitle`                                                                                      | [operations.AutoSelectSubtitle](../../../sdk/models/operations/autoselectsubtitle.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `defaultSubtitleAccessibility`                                                                            | [operations.DefaultSubtitleAccessibility](../../../sdk/models/operations/defaultsubtitleaccessibility.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `defaultSubtitleForced`                                                                                   | [operations.DefaultSubtitleForced](../../../sdk/models/operations/defaultsubtitleforced.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `watchedIndicator`                                                                                        | [operations.WatchedIndicator](../../../sdk/models/operations/watchedindicator.md)                         | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |
| `mediaReviewsVisibility`                                                                                  | [operations.MediaReviewsVisibility](../../../sdk/models/operations/mediareviewsvisibility.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       | 1                                                                                                         |