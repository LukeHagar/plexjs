# MetadatumResponse

## Example Usage

```typescript
import { MetadatumResponse } from "@lukehagar/plexjs/sdk/models/shared";

let value: MetadatumResponse = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `accountID`                                       | *number*                                          | :heavy_minus_sign:                                | The account id of this playback                   |
| `deviceID`                                        | *number*                                          | :heavy_minus_sign:                                | The device id which played the item               |
| `historyKey`                                      | *string*                                          | :heavy_minus_sign:                                | The key for this individual history item          |
| `key`                                             | *string*                                          | :heavy_minus_sign:                                | The metadata key for the item played              |
| `librarySectionID`                                | *string*                                          | :heavy_minus_sign:                                | The library section id containing the item played |
| `originallyAvailableAt`                           | *string*                                          | :heavy_minus_sign:                                | The originally available at of the item played    |
| `ratingKey`                                       | *string*                                          | :heavy_minus_sign:                                | The rating key for the item played                |
| `thumb`                                           | *string*                                          | :heavy_minus_sign:                                | The thumb of the item played                      |
| `title`                                           | *string*                                          | :heavy_minus_sign:                                | The title of the item played                      |
| `type`                                            | *string*                                          | :heavy_minus_sign:                                | The metadata type of the item played              |
| `viewedAt`                                        | *number*                                          | :heavy_minus_sign:                                | The time when the item was played                 |