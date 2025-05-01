# GetMediaMetaDataRole

## Example Usage

```typescript
import { GetMediaMetaDataRole } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataRole = {
  id: 126522,
  tag: "Teller",
  role: "Self - Judge",
  filter: "actor=126522",
  tagKey: "5d77683d85719b001f3a535e",
  thumb:
    "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | Unique identifier for the actor or role.                                                                         | 126522                                                                                                           |
| `tag`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The display tag for the actor (typically the actor's name).                                                      | Teller                                                                                                           |
| `role`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The role played by the actor in the media item.                                                                  | Self - Judge                                                                                                     |
| `filter`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The filter string used to query this actor. For example, it may indicate that this is an actor with a given key. | actor=126522                                                                                                     |
| `tagKey`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A unique key associated with the actor's tag, used for internal identification.                                  | 5d77683d85719b001f3a535e                                                                                         |
| `thumb`                                                                                                          | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The URL of the thumbnail image for the actor.                                                                    | https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg                                    |