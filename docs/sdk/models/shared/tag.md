# Tag

A variety of extra information about a metadata item is included as tags. These tags use their own element names such as `Genre`, `Writer`, `Directory`, and `Role`. Individual tag types may introduce their own extra attributes.


## Example Usage

```typescript
import { Tag } from "@lukehagar/plexjs/sdk/models/shared";

let value: Tag = {
  filter: "actor=49",
  role: "Secretary",
  tag: "Shaun Lawton",
  tagKey: "5d3ee12c4cde6a001c3e0b27",
  thumb: "http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `confidence`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | Measure of the confidence of an automatic tag                                               |                                                                                             |
| `context`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `filter`                                                                                    | *any*                                                                                       | :heavy_minus_sign:                                                                          | A filter parameter that can be used to query for more content that matches this tag value.  | actor=49                                                                                    |
| `id`                                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `ratingKey`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `role`                                                                                      | *any*                                                                                       | :heavy_minus_sign:                                                                          | The role this actor played                                                                  | Secretary                                                                                   |
| `tag`                                                                                       | *any*                                                                                       | :heavy_minus_sign:                                                                          | The value of the tag (the name)                                                             | Shaun Lawton                                                                                |
| `tagKey`                                                                                    | *any*                                                                                       | :heavy_minus_sign:                                                                          | Plex identifier for this tag which can be used to fetch additional information from plex.tv | 5d3ee12c4cde6a001c3e0b27                                                                    |
| `tagType`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `thumb`                                                                                     | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         | http://image.tmdb.org/t/p/original/lcJ8qM51ClAR2UzXU1mkZGfnn3o.jpg                          |