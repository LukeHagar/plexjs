# GetLibraryItemsProducer

## Example Usage

```typescript
import { GetLibraryItemsProducer } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetLibraryItemsProducer = {
  id: 109501,
  filter: "actor=109501",
  tag: "Bob Odenkirk",
  tagKey: "5d77683254f42c001f8c3f69",
  role: "Jimmy McGill",
  thumb:
    "https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | The unique role identifier.                                                   | 109501                                                                        |
| `filter`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | The filter string for the role.                                               | actor=109501                                                                  |
| `tag`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The actor's name.                                                             | Bob Odenkirk                                                                  |
| `tagKey`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | A key associated with the actor tag.                                          | 5d77683254f42c001f8c3f69                                                      |
| `role`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The character name or role.                                                   | Jimmy McGill                                                                  |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | URL for the role thumbnail image.                                             | https://metadata-static.plex.tv/f/people/f2ca7b474cc984efbdd5c503a096285a.jpg |