# ModifyPlaylistGeneratorItem

Note: OpenAPI cannot properly render this query parameter example ([See GHI](https://github.com/OAI/OpenAPI-Specification/issues/1706)).  It should be rendered as:

Item[type]=42&Item[title]=Jack-Jack Attack&Item[target]=&Item[targetTagID]=1&Item[locationID]=-1&Item[Location][uri]=library://82503060-0d68-4603-b594-8b071d54819e/item//library/metadata/146&Item[Policy][scope]=all&Item[Policy][value]=&Item[Policy][unwatched]=0


## Example Usage

```typescript
import { ModifyPlaylistGeneratorItem, ModifyPlaylistGeneratorScope } from "@lukehagar/plexjs/sdk/models/operations";

let value: ModifyPlaylistGeneratorItem = {
  location: {
    uri:
      "library://82503060-0d68-4603-b594-8b071d54819e/item/%2Flibrary%2Fmetadata%2F146",
  },
  locationID: -1,
  policy: {
    value: NaN,
    scope: ModifyPlaylistGeneratorScope.All,
  },
  target: "",
  targetTagID: 1,
  title: "Jack-Jack Attack",
  type: 42,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `location`                                                                                                      | [operations.ModifyPlaylistGeneratorLocation](../../../sdk/models/operations/modifyplaylistgeneratorlocation.md) | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `locationID`                                                                                                    | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `policy`                                                                                                        | [operations.ModifyPlaylistGeneratorPolicy](../../../sdk/models/operations/modifyplaylistgeneratorpolicy.md)     | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `target`                                                                                                        | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `targetTagID`                                                                                                   | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `title`                                                                                                         | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `type`                                                                                                          | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |