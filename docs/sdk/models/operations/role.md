# Role

## Example Usage

```typescript
import { Role } from "@lukehagar/plexjs/sdk/models/operations";

let value: Role = {
  id: 294129,
  filter: "actor=294129",
  thumb:
    "https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg",
  tag: "Mike Smith",
  tagKey: "668e7e7b22bcad9064350c91",
  role: "Self",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | The ID of the tag or actor.                                                   | 294129                                                                        |
| `filter`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The filter used to find the actor or tag.                                     | actor=294129                                                                  |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The thumbnail of the actor                                                    | https://metadata-static.plex.tv/2/people/27b85844536c39f3f9ac943aaad46608.jpg |
| `tag`                                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | The name of the tag or actor.                                                 | Mike Smith                                                                    |
| `tagKey`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Unique identifier for the tag.                                                | 668e7e7b22bcad9064350c91                                                      |
| `role`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The role of the actor or tag in the media.                                    | Self                                                                          |