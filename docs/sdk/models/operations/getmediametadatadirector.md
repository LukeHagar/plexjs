# GetMediaMetaDataDirector

## Example Usage

```typescript
import { GetMediaMetaDataDirector } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetMediaMetaDataDirector = {
  id: 126522,
  tag: "Danny Boyle",
  filter: "director=235876",
  tagKey: "5d776831151a60001f24d031",
  thumb:
    "https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Unique identifier for the director.                                                | 126522                                                                             |
| `tag`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | The role of Director                                                               | Danny Boyle                                                                        |
| `filter`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The filter string used to query this director.                                     | director=235876                                                                    |
| `tagKey`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | A unique key associated with the director's tag, used for internal identification. | 5d776831151a60001f24d031                                                           |
| `thumb`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The URL of the thumbnail image for the director.                                   | https://metadata-static.plex.tv/8/people/8d65fa96804802e08f2de09fe014408e.jpg      |