# GetSearchAllLibrariesRole

## Example Usage

```typescript
import { GetSearchAllLibrariesRole } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesRole = {
  id: 126522,
  tag: "Teller",
  role: "Self - Judge",
  thumb:
    "https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                          | *number*                                                                                                      | :heavy_check_mark:                                                                                            | The unique identifier for the role.<br/>NOTE: This is different for each Plex server and is not globally unique.<br/> | 126522                                                                                                        |
| `tag`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The display tag for the actor (typically the actor's name).                                                   | Teller                                                                                                        |
| `role`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The role played by the actor in the media item.                                                               | Self - Judge                                                                                                  |
| `thumb`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The absolute URL of the thumbnail image for the actor.                                                        | https://metadata-static.plex.tv/7/people/708568fd018d7aa8b1032dcf867747e8.jpg                                 |