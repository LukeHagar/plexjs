# GetSessionHistoryMediaContainer

## Example Usage

```typescript
import { GetSessionHistoryMediaContainer } from "@lukehagar/plexjs/sdk/models/operations";
import { RFCDate } from "@lukehagar/plexjs/sdk/types";

let value: GetSessionHistoryMediaContainer = {
    size: 10855,
    metadata: [
        {
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
        },
    ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `size`                                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 10855                                                                                                 |
| `metadata`                                                                                            | [operations.GetSessionHistoryMetadata](../../../sdk/models/operations/getsessionhistorymetadata.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |