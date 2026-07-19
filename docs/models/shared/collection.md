# Collection

A collection of related media items.

## Example Usage

```typescript
import { Collection, CollectionMode } from "@parke.dev/plexjs/models/shared";

let value: Collection = {
  artBlurHash: "string value",
  collectionFilterBasedOnUser: true,
  collectionMode: CollectionMode.Default,
  collectionPublished: true,
  collectionSort: "string value",
  lastRatedAt: 1,
  thumbBlurHash: "string value",
  userRating: 1,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `artBlurHash`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Blur hash for collection art.                                     | LhE3*HRjR*a#ogWBofj[bbf6ofa#                                      |
| `collectionFilterBasedOnUser`                                     | *boolean*                                                         | :heavy_minus_sign:                                                | Whether the smart collection filter is based on the current user. | false                                                             |
| `collectionMode`                                                  | [shared.CollectionMode](../../models/shared/collectionmode.md)    | :heavy_minus_sign:                                                | Display mode for the collection.                                  | default                                                           |
| `collectionPublished`                                             | *boolean*                                                         | :heavy_minus_sign:                                                | Whether the collection is published to Plex Discover.             | true                                                              |
| `collectionSort`                                                  | *string*                                                          | :heavy_minus_sign:                                                | Sort order for items in the collection.                           | addedAt:desc                                                      |
| `lastRatedAt`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Timestamp of the last user rating.                                | 1704067200                                                        |
| `thumbBlurHash`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Blur hash for collection thumbnail.                               | LhE3*HRjR*a#ogWBofj[bbf6ofa#                                      |
| `userRating`                                                      | *number*                                                          | :heavy_minus_sign:                                                | User star rating (0-10).                                          | 8.5                                                               |