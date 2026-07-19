# PlaybackHistoryMetadata

## Example Usage

```typescript
import { PlaybackHistoryMetadata } from "@parke.dev/plexjs/models/shared";

let value: PlaybackHistoryMetadata = {
  title: "string value",
  type: "string value",
  accountID: 1,
  deviceID: 1,
  grandparentRatingKey: "string value",
  grandparentTitle: "string value",
  historyKey: "string value",
  index: 1,
  key: "string value",
  librarySectionID: "string value",
  originallyAvailableAt: "string value",
  parentIndex: 1,
  parentTitle: "string value",
  ratingKey: "string value",
  thumb: "string value",
  viewedAt: 1,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `title`                                                           | *string*                                                          | :heavy_minus_sign:                                                | The title of the item played                                      |
| `type`                                                            | *string*                                                          | :heavy_minus_sign:                                                | The metadata type of the item played                              |
| `accountID`                                                       | *number*                                                          | :heavy_minus_sign:                                                | The account id of this playback                                   |
| `deviceID`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The device id which played the item                               |
| `grandparentRatingKey`                                            | *string*                                                          | :heavy_minus_sign:                                                | The rating key of the grandparent item                            |
| `grandparentTitle`                                                | *string*                                                          | :heavy_minus_sign:                                                | The title of the grandparent item (e.g. show name for an episode) |
| `historyKey`                                                      | *string*                                                          | :heavy_minus_sign:                                                | The key for this individual history item                          |
| `index`                                                           | *number*                                                          | :heavy_minus_sign:                                                | The index of the item (e.g. episode number)                       |
| `key`                                                             | *string*                                                          | :heavy_minus_sign:                                                | The metadata key for the item played                              |
| `librarySectionID`                                                | *string*                                                          | :heavy_minus_sign:                                                | The library section id containing the item played                 |
| `originallyAvailableAt`                                           | *string*                                                          | :heavy_minus_sign:                                                | The originally available at of the item played                    |
| `parentIndex`                                                     | *number*                                                          | :heavy_minus_sign:                                                | The index of the parent item (e.g. season number)                 |
| `parentTitle`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The title of the parent item (e.g. season name for an episode)    |
| `ratingKey`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The rating key for the item played                                |
| `thumb`                                                           | *string*                                                          | :heavy_minus_sign:                                                | The thumb of the item played                                      |
| `viewedAt`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The time when the item was played                                 |