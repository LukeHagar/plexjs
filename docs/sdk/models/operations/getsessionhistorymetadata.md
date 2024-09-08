# GetSessionHistoryMetadata

## Example Usage

```typescript
import { GetSessionHistoryMetadata } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetSessionHistoryMetadata = {
    historyKey: "/status/sessions/history/1",
    key: "/library/metadata/32171",
    ratingKey: "32171",
    librarySectionID: "2",
    parentKey: "/library/metadata/32170",
    grandparentKey: "/library/metadata/32132",
    title: "The Noise That Blue Makes",
    grandparentTitle: "Taskmaster",
    type: "episode",
    thumb: "/library/metadata/32171/thumb/-1",
    parentThumb: "/library/metadata/32170/thumb/1654134301",
    grandparentThumb: "/library/metadata/32132/thumb/1703933346",
    grandparentArt: "/library/metadata/32132/art/1703933346",
    index: 1,
    parentIndex: 13,
    originallyAvailableAt: new RFCDate("2022-04-14T00:00:00Z"),
    viewedAt: 1654139223,
    accountID: 1,
    deviceID: 5,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `historyKey`                             | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /status/sessions/history/1               |
| `key`                                    | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32171                  |
| `ratingKey`                              | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 32171                                    |
| `librarySectionID`                       | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 2                                        |
| `parentKey`                              | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32170                  |
| `grandparentKey`                         | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32132                  |
| `title`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | The Noise That Blue Makes                |
| `grandparentTitle`                       | *string*                                 | :heavy_minus_sign:                       | N/A                                      | Taskmaster                               |
| `type`                                   | *string*                                 | :heavy_minus_sign:                       | N/A                                      | episode                                  |
| `thumb`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32171/thumb/-1         |
| `parentThumb`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32170/thumb/1654134301 |
| `grandparentThumb`                       | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32132/thumb/1703933346 |
| `grandparentArt`                         | *string*                                 | :heavy_minus_sign:                       | N/A                                      | /library/metadata/32132/art/1703933346   |
| `index`                                  | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 1                                        |
| `parentIndex`                            | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 13                                       |
| `originallyAvailableAt`                  | [RFCDate](../../../types/rfcdate.md)     | :heavy_minus_sign:                       | N/A                                      | 2022-04-14 00:00:00 +0000 UTC            |
| `viewedAt`                               | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 1654139223                               |
| `accountID`                              | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 1                                        |
| `deviceID`                               | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 5                                        |