# GetSearchAllLibrariesDirectory

## Example Usage

```typescript
import { GetSearchAllLibrariesDirectory } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetSearchAllLibrariesDirectory = {
  key: "/library/sections/3/all?actor=197429",
  librarySectionID: 1,
  librarySectionKey: "/library/sections/1",
  librarySectionTitle: "Movies",
  type: "tag",
  id: 197429,
  filter: "actor=197429",
  tag: "Ben Stiller",
  tagKey: "5d776826999c64001ec2c606",
  thumb:
    "https://metadata-static.plex.tv/5/people/57bd7c7d6c5c9e2881251b30e5603d3d.jpg",
  count: 10,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `key`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The unique identifier path for the search result item.                        | /library/sections/3/all?actor=197429                                          |
| `librarySectionID`                                                            | *number*                                                                      | :heavy_check_mark:                                                            | The identifier for the library section.                                       | 1                                                                             |
| `librarySectionKey`                                                           | *string*                                                                      | :heavy_check_mark:                                                            | The key corresponding to the library section.                                 | /library/sections/1                                                           |
| `librarySectionTitle`                                                         | *string*                                                                      | :heavy_check_mark:                                                            | The title of the library section.                                             | Movies                                                                        |
| `librarySectionType`                                                          | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `type`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The type of the directory.                                                    | tag                                                                           |
| `id`                                                                          | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | 197429                                                                        |
| `filter`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The filter string used to query this specific item in the library.            | actor=197429                                                                  |
| `tag`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           | Ben Stiller                                                                   |
| `tagType`                                                                     | *number*                                                                      | :heavy_minus_sign:                                                            | The type of tag associated with this search result (e.g., Director, Actor).   |                                                                               |
| `tagKey`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The unique identifier for the tag associated with this search result.         | 5d776826999c64001ec2c606                                                      |
| `thumb`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The URL to the thumbnail image associated with this search result.            | https://metadata-static.plex.tv/5/people/57bd7c7d6c5c9e2881251b30e5603d3d.jpg |
| `count`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | The number of items associated with this search result.                       | 10                                                                            |