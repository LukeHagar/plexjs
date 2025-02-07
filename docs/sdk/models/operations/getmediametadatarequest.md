# GetMediaMetaDataRequest

## Example Usage

```typescript
import { GetMediaMetaDataRequest } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataRequest = {
  ratingKey: 9518,
  includeConcerts: true,
  includeExtras: true,
  includeOnDeck: true,
  includePopularLeaves: true,
  includePreferences: true,
  includeReviews: true,
  includeChapters: true,
  includeStations: true,
  includeExternalMedia: true,
  asyncAugmentMetadata: true,
  asyncCheckFiles: true,
  asyncRefreshAnalysis: true,
  asyncRefreshLocalMediaAgent: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `ratingKey`                                            | *number*                                               | :heavy_check_mark:                                     | the id of the library item to return the children of.  | 9518                                                   |
| `includeConcerts`                                      | *boolean*                                              | :heavy_minus_sign:                                     | Include concerts data if set to true.                  | true                                                   |
| `includeExtras`                                        | *boolean*                                              | :heavy_minus_sign:                                     | Include extra content (e.g. bonus features).           | true                                                   |
| `includeOnDeck`                                        | *boolean*                                              | :heavy_minus_sign:                                     | Include on-deck items.                                 | true                                                   |
| `includePopularLeaves`                                 | *boolean*                                              | :heavy_minus_sign:                                     | Include popular leaves (episodes/chapters).            | true                                                   |
| `includePreferences`                                   | *boolean*                                              | :heavy_minus_sign:                                     | Include preferences information.                       | true                                                   |
| `includeReviews`                                       | *boolean*                                              | :heavy_minus_sign:                                     | Include reviews for the content.                       | true                                                   |
| `includeChapters`                                      | *boolean*                                              | :heavy_minus_sign:                                     | Include chapter details.                               | true                                                   |
| `includeStations`                                      | *boolean*                                              | :heavy_minus_sign:                                     | Include station data.                                  | true                                                   |
| `includeExternalMedia`                                 | *boolean*                                              | :heavy_minus_sign:                                     | Include external media data.                           | true                                                   |
| `asyncAugmentMetadata`                                 | *boolean*                                              | :heavy_minus_sign:                                     | Trigger asynchronous metadata augmentation.            | true                                                   |
| `asyncCheckFiles`                                      | *boolean*                                              | :heavy_minus_sign:                                     | Trigger asynchronous file checking.                    | true                                                   |
| `asyncRefreshAnalysis`                                 | *boolean*                                              | :heavy_minus_sign:                                     | Trigger asynchronous refresh of analysis.              | true                                                   |
| `asyncRefreshLocalMediaAgent`                          | *boolean*                                              | :heavy_minus_sign:                                     | Trigger asynchronous refresh of the local media agent. | true                                                   |