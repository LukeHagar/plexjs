# GetRecentlyAddedImage

## Example Usage

```typescript
import { GetRecentlyAddedHubsResponseType, GetRecentlyAddedImage } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetRecentlyAddedImage = {
  alt: "Episode 1",
  type: GetRecentlyAddedHubsResponseType.Background,
  url: "/library/metadata/45521/thumb/1644710589",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `alt`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | Episode 1                                                                                                         |
| `type`                                                                                                            | [operations.GetRecentlyAddedHubsResponseType](../../../sdk/models/operations/getrecentlyaddedhubsresponsetype.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               | background                                                                                                        |
| `url`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               | /library/metadata/45521/thumb/1644710589                                                                          |